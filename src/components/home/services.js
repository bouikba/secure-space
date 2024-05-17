"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from "@/data/constant";
import { ServiceCard } from "@/components";
import { Teko } from "next/font/google"
const font = Teko({ subsets: ["latin"] })
gsap.registerPlugin(ScrollTrigger);

export function Services() {

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
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1
            }
        })
        gsap.from(".service-card", {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".service-card",
                start: "top 80%",
                end: "bottom 60%",
                scrub: 1
            }
        })
    }, { scope: container })

    return (
        <div
            ref={container}
            className="relative flex flex-col justify-center min-h-screen overflow-hidden"
        >
            <div className="flex flex-col items-center max-width p-4 xl:p-10 gap-4 xl:gap-10">
                <div className={`title-big text-dark ${font.className}`}>
                    <span className="word">Explore</span>
                    <span className="word">Our</span>
                    <span className="word">Services</span>
                </div>
                <div className="flex flex-col gap-6">
                    {
                        SERVICES.map(service => {
                            return <ServiceCard key={service.id} service={service} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}