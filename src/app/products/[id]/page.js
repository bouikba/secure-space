"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/constant";
import { Header, Icon, Loading, ProductCard } from "@/components";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProductDetails({ params }) {

    const [product, setProduct] = useState(null)
    const searchProduct = () => {
        setProduct(PRODUCTS.filter(p => p.id === Number(params.id))[0])
    }
    useEffect(() => {
        searchProduct()
    }, [])

    const [userData, setUserData] = useState(null)
    const [displayImage, setDisplayImage] = useState(false)
    const router = useRouter()

    const funcPurchase = (e) => {
        // e.stopPropagation()
        // if (!userData) return
        // if (userData.purchase.includes(product.id)) {
        //     fetch(`/api/products?action=pull-purchase&id=${product.id}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             if (res.status) {
        //                 setUserData({
        //                     ...userData,
        //                     purchase: userData.purchase.filter(id => id !== product.id)
        //                 })
        //             }
        //         })
        // } else {
        //     fetch(`/api/products?action=push-purchase&id=${product.id}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             if (res.status) {
        //                 setUserData({
        //                     ...userData,
        //                     purchase: [
        //                         ...userData.purchase,
        //                         product.id
        //                     ]
        //                 })
        //             }
        //         })
        //     router.push(`/products/request/${product.id}`)
        // }
    }
    const funcSave = (e) => {
        // e.stopPropagation()
        // if (!userData) return
        // if (userData.saved.includes(product.id)) {
        //     fetch(`/api/products?action=pull-saved&id=${product.id}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             if (res.status) {
        //                 setUserData(state => ({
        //                     ...state,
        //                     saved: state.saved.filter(id => id !== product.id)
        //                 }))
        //             }
        //         })
        // } else {
        //     fetch(`/api/products?action=push-saved&id=${product.id}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             if (res.status) {
        //                 setUserData(state => ({
        //                     ...state,
        //                     saved: [
        //                         ...state.saved,
        //                         product.id
        //                     ]
        //                 }))
        //             }
        //         })
        // }
    }
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
            yPercent: -100,
            duration: 0.3
        })
    }, { dependencies: [displayImage] })

    return product ? (
        <main className="main">
            <Header />
            <div className="flex flex-col gap-4 py-32 px-4 xl:px-0 max-width">
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
                        className="relative bg-white hover:bg-light duration-300 cursor-pointer flex items-center justify-center col-span-6 md:col-span-3"
                        onClick={funcDisplayProductImage}
                    >
                        <div className="absolute top-0 left-0 m-4 opacity-50 text">Zoom</div>
                        <img
                            className="w-full max-h-[500px] object-contain"
                            src={product.img}
                            alt="product"
                        />
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
                            <button
                                className={`btn-dark ${userData && userData.purchase.includes(product.id) ? "bg-yellow-500 hover:bg-yellow-500" : ""}`}
                                onClick={funcPurchase}
                            >
                                <Icon type="store" />
                                <span>{userData && userData.purchase.includes(product.id) ? "pendding" : "buy"}</span>
                            </button>
                            <button
                                className={`btn-dark ${userData && userData.saved.includes(product.id) ? "btn-dark-select" : ""}`}
                                onClick={funcSave}
                            >
                                <Icon type="save" />
                                <span>{userData && userData.saved.includes(product.id) ? "marked" : "mark"}</span>
                            </button>
                        </div>

                        <Rating rating={product.rating} />

                        <div className="text md:text-lg">
                            {product.description}
                        </div>

                    </div>
                </div>
                <SimilarProducts id={product.id} collection={product.collection}/>
                {
                    displayImage &&
                    <div
                        className="bg-white flex items-center justify-center fixed top-0 left-0 w-full h-full z-50"
                        ref={refImage}
                    >
                        <button
                            className="btn-dark absolute right-0 top-0 m-4"
                            onClick={funcCloseProductImage}
                        >
                            <Icon type="close" size={30} />
                        </button>
                        <img
                            className="w-full min-h-full object-contain"
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
    return (
        <div className="flex items-center gap-2">

            <div className="flex flex-col gap-4 border border-sh-dark p-2">
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                </div>
                <div className="flex gap-2">
                    <Icon type="star" size={15} style={"fill-yellow-500"} />
                </div>
            </div>
            <div className="flex flex-col items-end gap-4 w-full border border-sh-dark p-2">
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: rating ? rating[4] : 0 }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: rating ? rating[3] : 0 }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: rating ? rating[2] : 0 }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: rating ? rating[1] : 0 }} />
                </div>
                <div className="w-full border border-sh-dark h-[15px] p-1">
                    <div className="bg-sh-dark h-full" style={{ width: rating ? rating[0] : 0 }} />
                </div>
            </div>

        </div>
    )
}

function SimilarProducts({ id, collection }) {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
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