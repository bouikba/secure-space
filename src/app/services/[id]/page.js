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
                    className="w-full max-h-[400px] object-cover"
                    src={service.img}
                />
                <div className="bg-light flex flex-col md:flex-row gap-4 p-4">
                    <div className="flex flex-col gap-4 md:w-1/2">
                        <div className="title">
                            {service.title}
                        </div>
                        <div className="text">
                            {service.description}
                        </div>
                        <Link href={`/services/${service.id}/request`}
                            className="btn-dark"
                        >
                            <span>request service</span>
                        </Link>
                    </div>
                    <Rating rating={service.rating} />
                </div>
            </div>
        )
}

function Rating({ rating }) {
    return (
        <div className="flex items-center gap-2 md:w-1/2">

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