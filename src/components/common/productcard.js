"use client"
import { Icon } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react"

export function ProductCard({ product }) {

    const router = useRouter()

    const seeProduct = () => {
        router.push("/products/" + product.id)
    }
    const buyProduct = () => {
        // go to request product //
    }
    const saveProduct = () => {
        // saving product //
    }

    return (
        <div
            className="product-card group flex flex-col gap-4 w-full md:w-fit bg-light shadow-sh-dark shadow-md rounded-md overflow-hidden hover:ring-2 hover:ring-dark hover:duration-300 cursor-pointer p-4"
            onClick={seeProduct}
        >

            <div className="title">
                {product.title}
            </div>
            <img
                className="object-cover"
                src={product.img}
            />
            <div className="flex items-center gap-2 w-full">
                <div className="w-full text-red-400 text-2xl font-bold rounded-md p-2">
                    {product.price} MAD
                </div>
                <button
                    className="btn-dark group-hover:scale-100 scale-0 duration-300"
                    onClick={() => buyProduct()}
                >
                    <Icon type="store" />
                </button>
                <button
                    className="btn-dark group-hover:scale-100 scale-0 duration-300"
                    onClick={() => saveProduct()}
                >
                    <Icon type="save" />
                </button>
            </div>

        </div>
    )
}