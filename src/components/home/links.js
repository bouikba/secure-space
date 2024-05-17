"use client"

import { SERVICES } from "@/data/constant"
import Link from "next/link"

export function Links(){
    return (
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 p-4 max-width z-20">
                {
                    SERVICES.map(service => {
                        return (
                            <Link
                                href={`#id-${service.id}`}
                                key={service.id}
                                className="border border-dark text-dark p-2 whitespace-nowrap hover:bg-sh-dark duration-300 cursor-pointer"
                            >
                                {service.title}
                            </Link>
                        )
                    })
                }
        </div>
    )
}