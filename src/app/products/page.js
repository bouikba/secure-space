"use client"
import { Header, ProductCard } from "@/components"
import { PRODUCTS } from "@/data/constant"

export default function Products() {

    return (
        <main className="main">
            <Header />
            <div className="flex justify-center gap-4 flex-wrap py-32 px-4 md:px-0 max-width">
                <div className="w-full text-center bg-sh-light p-4 mb-10">
                    <span className="title">Products</span>
                </div>
                { PRODUCTS.map(product => <ProductCard product={product} />)}
            </div>
        </main>
    )

}