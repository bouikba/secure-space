"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/constant";
import { Header, Icon, Loading, ProductCard } from "@/components";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProductDetails({ params }) {

    const [markedList, setMarkedList] = useState([])
    const [fetchData, setFetchData] = useState(false)
    const [product, setProduct] = useState(null)
    const searchProduct = () => {
        setProduct(PRODUCTS.filter(p => p.id === Number(params.id))[0])
    }
    useEffect(() => {
        searchProduct()
    }, [])

    const [displayImage, setDisplayImage] = useState(false)
    const router = useRouter()

    const funcDisplayProductImage = () => {
        setDisplayImage(true)
    };
    const funcCloseProductImage = () => {
        setDisplayImage(false)
    };
    const funcGoBack = () => {
        router.back()
    }

    const refImage = useRef()
    useGSAP(() => {
        gsap.from(refImage.current, {
            opacity: 0,
            scale: 0,
            duration: 0.3
        })
    }, { dependencies: [displayImage] })

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

    return product ? (
        <main className="main">
            <Header />
            <div className="flex flex-col gap-6 py-32 px-4 xl:px-0 max-width">
                <button
                    className="btn-dark"
                    onClick={funcGoBack}
                >
                    <Icon type="chevronLeft" />
                    <span>go back</span>
                </button>
                <div className="grid grid-cols-6 items-stretch gap-4 shadow-md shadow-sh-dark">
                    {/* Image */}
                    <div
                        className="relative bg-white flex justify-center items-center overflow-hidden col-span-6 md:col-span-3"
                    >
                        <img
                            className="h-full max-h-[400px] object-contain"
                            src={product.img}
                            alt="product"
                        />
                        <button
                            className="btn-dark absolute top-0 right-0 m-4"
                            onClick={funcDisplayProductImage}
                        >
                            <Icon type="zoom" />
                        </button>
                    </div>
                    {/* Details */}
                    <div className="bg-light flex flex-col justify-end gap-4 md:gap-6 p-2 md:p-10 col-span-6 md:col-span-3">

                        <div className="flex gap-2 w-fit">
                            <span className="title p-2">
                                {product.title}
                            </span>
                            <span className="title bg-sh-light p-2">
                                {product.price} MAD
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link
                                className={`btn-dark`}
                                href={`/products/${product.id}/request`}
                            >
                                <Icon type="store" />
                                <span>buy</span>
                            </Link>
                            <button
                                className={`btn-dark`}
                                onClick={markProduct}
                            >
                                {
                                    markedList.includes(product.id)
                                        ?
                                        <>
                                            <Icon type="check" />
                                            <span>marked</span>
                                        </>
                                        :
                                        <>
                                            <Icon type="save" />
                                            <span>mark</span>
                                        </>
                                }

                            </button>
                        </div>

                        <Rating rating={product.rating} />

                        <div className="text md:text-lg">
                            {product.description}
                        </div>

                    </div>
                </div>
                <SimilarProducts id={product.id} collection={product.collection} />
                {
                    displayImage &&
                    <div
                        className="bg-white flex items-center justify-center -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 w-auto h-auto p-4 z-50 shadow-xl shadow-sh-dark"
                        ref={refImage}
                    >
                        <button
                            className="btn-dark absolute right-0 top-0 m-4"
                            onClick={funcCloseProductImage}
                        >
                            <Icon type="close" size={30} />
                        </button>
                        <img
                            className="w-full max-w-[512px] object-contain"
                            src={product.img}
                            alt="product"
                            quality={100}
                        />
                    </div>
                }
            </div>
        </main>
    ) : <Loading />

}

function Rating({ rating }) {

    const midRating = useMemo(() => {
        let middle = 0
        for (let i = 0; i < rating.length; i++) {
            middle += rating[i]
        }
        middle = Math.floor(middle / rating.length)
        return middle
    }, [rating])

    return (
        <div className="flex items-center gap-2">

            <div className="flex flex-col gap-4 border border-sh-dark p-2">
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"stroke-yellow-500 fill-yellow-500"} />
                </div>
            </div>
            <div className="flex flex-col items-end gap-4 w-full border border-sh-dark p-2">
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: `${rating[4]}%` }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: `${rating[3]}%` }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: `${rating[2]}%` }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: `${rating[1]}%` }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: `${rating[0]}%` }} />
                </div>
            </div>

        </div>
    )
}

function SimilarProducts({ id, collection }) {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
                {
                    PRODUCTS.map(product => {
                        if (product.collection === collection && product.id !== id) {
                            return <ProductCard key={product.id} product={product} />
                        }
                    })
                }
            </div>
            <div className="mx-auto pt-10">
                <Link
                    className="btn-dark"
                    href="/products"
                >
                    <span>see all</span>
                    <Icon type="chevronRight" />
                </Link>
            </div>
        </div>
    )
}