"use client"
import { useState } from "react"
import Link from "next/link"
import { Icon } from "@/components"
import Commands from "./commands"
import Products from "./products"
import Services from "./services"
import Users from "./users"
import Dashboard from "./dashboard"

export function Admin() {

    const [section, setSection] = useState("dashboard")

    return (
        <main className="h-screen flex items-stretch overflow-hidden">
            <Aside section={section} setSection={setSection}/>
            <Section section={section}/>
        </main>
    )

}

function Aside({ section, setSection }) {

    return (
        <div className="min-w-[250px] h-full flex flex-col p-4 gap-4 bg-dark">
            <Link
                className="option-disabled"
                href="/"
            >
                <Icon type="logo" size={20} />
                <span>securespace</span>
            </Link>
            <button
                className={section === "dashboard" ? "option-active" : "option"}
                onClick={() => setSection("dashboard")}
            >
                <Icon type="dashboard" />
                <span>dashboard</span>
            </button>
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
        case "dashboard": return <Dashboard/>
    }

}