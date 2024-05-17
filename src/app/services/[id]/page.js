"use client"
import { Header, Icon, Loading, ServiceCard } from "@/components";
import { SERVICES } from "@/data/constant";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Services({ params }) {

    const service = useMemo(() => {
        return SERVICES.filter(s => s.id === Number(params.id))[0] || null
    }, [])

    return service ? (
        <main className="main">
            <Header />
            <ServiceDetails
                service={service}
            />
        </main>
    ) : <Loading />

}

function ServiceDetails({ service }) {

    return (
        <div className="flex min-h-screen flex-col gap-4 px-4 py-32 max-width shadow-md shadow-sh-dark">
            <img
                className="w-full max-w-none max-h-[400px] object-cover"
                src={service.img}
            />
            <div className="bg-light flex flex-col gap-6 p-6">

                <div className="title border-l-4 pl-4 border-dark">
                    {service.title}
                </div>
                <div className="text">
                    {service.description}
                </div>
                <Rating rating={service.rating} />
                <Features features={service.features} />
                <div className="flex justify-center w-full">
                    <Link href={`/services/${service.id}/request`}
                        className="btn-dark w-1/2 p-4"
                    >
                        <span>request service</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

function Rating({ rating }) {
    return (
        <div className="flex items-center gap-2 md:w-1/2">

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

function Features({ features }) {
    return (
        <div className="flex flex-col gap-2">
            {
                features.map(feature => {
                    return (
                        <div
                            key={feature.title}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-2">
                                <Icon type="check" size={30} style="opacity-50" />
                                <span>{feature.title}</span>
                            </div>
                            <div className="text pl-[25px]">
                                {feature.description}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}