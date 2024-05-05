"use client"
import { useState } from "react"
import Link from "next/link"
import { Icon } from "@/components"
import Commands from "./commands"
import Products from "./products"
import Services from "./services"
import Users from "./users"

export function Admin() {

    const [section, setSection] = useState("")

    return (
        <main className="h-screen flex items-stretch">
            <Aside section={section} setSection={setSection}/>
            <Section section={section}/>
        </main>
    )

}

function Aside({ section, setSection }) {

    return (
        <div className="w-[250px] flex flex-col p-2 gap-2 bg-dark">
            <Link
                className="option-disabled"
                href="/"
            >
                <Icon type="logo" />
                <span>securespace</span>
            </Link>
            <div className="option-split"/>
            <button
                className={section === "commands" ? "option-active" : "option"}
                onClick={() => setSection("commands")}
            >
                <Icon type="commands" />
                <span>commands</span>
            </button>
            <button
                className={section === "products" ? "option-active" : "option"}
                onClick={() => setSection("products")}
            >
                <Icon type="products" />
                <span>products</span>
            </button>
            <button
                className={section === "services" ? "option-active" : "option"}
                onClick={() => setSection("services")}
            >
                <Icon type="services" />
                <span>services</span>
            </button>
            <button
                className={section === "users" ? "option-active" : "option"}
                onClick={() => setSection("users")}
            >
                <Icon type="users" />
                <span>users</span>
            </button>
        </div>
    )

}

function Section({ section }) {

    switch (section) {
        case "commands": return <Commands />
        case "products": return <Products />
        case "services": return <Services />
        case "users": return <Users />
        default: return (
            <div className="h-full w-full flex items-center justify-center">
                <Icon type="logo" size={100} />
            </div>
        )
    }

}