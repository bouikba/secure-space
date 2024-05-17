"use client"
import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Icon, ProductCard } from "@/components"
import Link from "next/link";
import { PRODUCTS } from "@/data/constant"
import { Teko } from "next/font/google"
const font = Teko({ subsets: ["latin"] })
gsap.registerPlugin(ScrollTrigger)

export function Products() {

    const container = useRef()

    useGSAP(() => {
        gsap.from(".word", {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3",
            scrollTrigger: {
                trigger: ".word",
                start: "top 50%",
                end: "bottom 60%",
                scrub: 1
            }
        })
        gsap.from(".product-card", {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".product-card",
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1
            }
        })
    }, { scope: container })

    return (
        <div
            ref={container}
            id="products-explore"
            className="relative flex flex-col justify-center text-dark min-h-screen overflow-hidden"
        >
            <div className="flex flex-col items-center max-width p-4 xl:p-10 gap-4 xl:gap-10">
                <div className={`title-big text-dark ${font.className}`}>
                    <span className="word">Explore</span>
                    <span className="word">Our</span>
                    <span className="word">Products</span>
                </div>
                <div className="flex flex-col justify-center md:flex-row w-full gap-4 xl:gap-10">
                    {
                        PRODUCTS.map((product, index) => {
                            if (index < 3) {
                                return <ProductCard key={product.id} product={product} />
                            }
                        })
                    }
                </div>
                <Link className="btn-dark" href="/products">
                    <span>See All</span>
                    <Icon type="chevronRight" />
                </Link>
            </div>
        </div>
    )
}