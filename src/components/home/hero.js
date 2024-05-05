"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { Icon } from "@/components"
import Link from "next/link"
import { Teko } from "next/font/google"
const font = Teko({ subsets: ["latin"] })

export function Hero() {

    const container = useRef(null)

    // Animation
    useGSAP(() => {
        gsap.from(".word", {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3"
        })
        gsap.from(".description", {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power3"
        })
        gsap.from(".explore", {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power3"
        })
        gsap.from(".image", {
            opacity: 0,
            duration: 1,
            ease: "power3"
        })
    }, { scope: container })

    return (
        <div
            ref={container}
            className="relative bg-dark text-light min-h-screen overflow-hidden"
        >
            <div className="w-full h-full absolute opacity-30 pointer-events-none z-0">
                <img
                    src="/hero.jpg"
                    className="image w-full h-full max-h-full object-cover"
                />
            </div>
            <div className="flex items-center justify-center min-h-screen max-width p-4 z-10">
                <div className="flex items-center flex-col gap-4">
                    <div className={`title-big ${font.className}`}>
                        <span className="word">Your</span>
                        <span className="word">are</span>
                        <span className="word">in</span>
                        <span className="word">Secure</span>
                        <span className="word">Space</span>
                    </div>
                    <div className="description text-sm md:text-base text-center max-w-[700px]">
                        Get ready to take control of your security!
                        Explore the latest security technologies with us today.
                        Modern solutions, effective protection, and guaranteed safety.
                        Join us now and be part of the advanced security community.
                    </div>
                    <Link
                        className="explore btn-light"
                        href="#products-explore"
                    >
                        <Icon type="chevronDown" size={30} />
                    </Link>
                </div>
            </div>
        </div>
    )
}