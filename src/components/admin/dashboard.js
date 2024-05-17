"use client"

import { PRODUCTS, SERVICES } from "@/data/constant"
import { useEffect, useState } from "react"
import { Icon, Loading } from "@/components"

export default function Dashboard() {

    const [COMMANDS, setCOMMANDS] = useState(null)
    const [USERS, setUSERS] = useState(null)

    useEffect(() => {
        fetch("/api/commands")
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setCOMMANDS(res.commands.length)
                }
            })

        fetch("/api/users")
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setUSERS(res.users.length)
                }
            })
    }, [])

    return (
        <main className="w-full flex flex-col bg-light gap-10 p-4">
            <div className="flex items-center justify-evenly min-h-full gap-10">
                <Statistic
                    icon="users"
                    name="Users"
                    number={USERS}
                />
                <Statistic
                    icon="commands"
                    name="Commands"
                    number={COMMANDS}
                />
                <Statistic
                    icon="products"
                    name="Products"
                    number={PRODUCTS.length}
                />
                <Statistic
                    icon="services"
                    name="Services"
                    number={SERVICES.length}
                />
            </div>
        </main>
    )
}

function Statistic({ icon, name, number }) {
    return number !== null ? (
        <div className="flex items-center gap-4">
            <Icon type={icon} style="bg-white shadow-md shadow-sh-dark rounded-md p-2" size={80} />
            <div className="flex flex-col gap-2">
                <span className="title">{number}</span>
                <span className="text">{name}</span>
            </div>
        </div>
    ) :
        <Loading />
}