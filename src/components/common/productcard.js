"use client"
import { Icon } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export function ProductCard({ product }) {

    const [markedList, setMarkedList] = useState([])
    const [fetchData, setFetchData] = useState(false)
    const router = useRouter()
    const mediumRating = useMemo(() => {
        let medium = 0
        product.rating.map((r, index) => medium += r * (index + 1))
        medium = Math.floor(medium / 1500 * 100)
        return medium
    }, [])

    const seeProduct = () => {
        router.push("/products/" + product.id)
    }
    const buyProduct = (e) => {
        e.stopPropagation()
        router.push(`/products/${product.id}/request`)
    }
    const markProduct = (e) => {
        e.stopPropagation()
        fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: product.id })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) setFetchData(state => !state)
            })
    }

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(res => {
                if (res.status) setMarkedList(res.marked)
            })
    }, [fetchData])

    return (
        <div
            className="product-card group flex flex-col items-center w-full md:w-fit bg-light shadow-sh-dark shadow-md rounded-md overflow-hidden hover:ring-2 hover:ring-dark hover:duration-300 cursor-pointer"
            onClick={seeProduct}
        >

            <div className="w-full flex items-center justify-between p-2">
                <span className="title">{product.title}</span>
                <div className="flex">
                    <Icon type="star" size={15} style={mediumRating >= 20 ? "stroke-yellow-500 fill-yellow-500" : "stroke-yellow-500"} />
                    <Icon type="star" size={15} style={mediumRating >= 40 ? "stroke-yellow-500 fill-yellow-500" : "stroke-yellow-500"} />
                    <Icon type="star" size={15} style={mediumRating >= 60 ? "stroke-yellow-500 fill-yellow-500" : "stroke-yellow-500"} />
                    <Icon type="star" size={15} style={mediumRating >= 80 ? "stroke-yellow-500 fill-yellow-500" : "stroke-yellow-500"} />
                    <Icon type="star" size={15} style={mediumRating === 100 ? "stroke-yellow-500 fill-yellow-500" : "stroke-yellow-500"} />
                </div>
            </div>

            <img className="object-cover" src={product.img} />
            <div className="bg-dark text-light p-2 flex items-center justify-between gap-2 w-full">
                <span className="text">{product.price} MAD</span>
                <div className="flex gap-2">
                    <button
                        className="btn-light group-hover:scale-100 scale-0 duration-300"
                        onClick={buyProduct}
                    >
                        <Icon type="store" />
                    </button>
                    <button
                        className="btn-light group-hover:scale-100 scale-0 duration-300"
                        onClick={markProduct}
                    >
                        {
                            markedList.includes(product.id)
                                ? <Icon type="check" />
                                : <Icon type="save" />
                        }
                    </button>
                </div>
            </div>

        </div>
    )
}