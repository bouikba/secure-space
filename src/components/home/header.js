"use client"

import Link from "next/link"
import { useState, useEffect, useRef, useMemo } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Icon } from "@/components"
import { signIn, useSession } from "next-auth/react"
import { ADMIN_LIST, PRODUCTS, SERVICES } from "@/data/constant"

export function Header() {

    const container = useRef(null)

    useGSAP(() => {

        gsap.from(container.current, {
            yPercent: -100,
            opacity: 0,
            duration: 1,
            ease: "power3"
        })

    }, { scope: container })

    return (
        <div
            id="header"
            ref={container}
            className="fixed w-full bg-dark text-light p-4 z-50"
        >
            <div className="flex items-center justify-between max-width">
                <Logo />
                <div className="hidden md:flex md:items-center md:justify-center md:gap-2">
                    <Products />
                    <Services />
                    <Support />
                    <AdminButton />
                </div>
                <div className="hidden md:block">
                    <SignButton />
                </div>
                <div className="block md:hidden">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export function Logo() {
    return (
        <Link
            className="flex items-center gap-2 w-fit"
            href="/"
        >
            <Icon type="logo" size={30} />
            <div className="title">securespace</div>
        </Link>
    )
}

function Products() {

    const [o, setO] = useState(false)
    const currentParent = useRef(null)
    const collections = useMemo(() => {
        let _c = []
        PRODUCTS.map(p => {
            if (!_c.includes(p.collection)) _c.push(p.collection)
        })
        return _c
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                currentParent.current &&
                !currentParent.current.contains(event.target)
            ) {
                setO(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <button
            ref={currentParent}
            className="link w-fit"
            style={{ zIndex: o ? 1000 : 0 }}
            onClick={() => setO(state => !state)}
        >
            <span>Products</span>
            <Icon type="chevronDown" />
            {
                o &&
                <div className="menu">
                    <Link
                        className="menu-option"
                        href={`/products`}
                    >
                        <div>all</div>
                    </Link>
                    {
                        collections.map(c => {
                            return (
                                <Link
                                    key={c}
                                    className="menu-option"
                                    href={`/products/collection/${c}`}
                                >
                                    <div>{c}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </button>
    )
}

function Services() {

    const [o, setO] = useState(false)
    const currentParent = useRef(null)
    const types = useMemo(() => {
        let titles = []
        SERVICES.map(service => {
            titles.push({
                id: service.id,
                title: service.title
            })
        })
        return titles
    }, [])

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                currentParent.current &&
                !currentParent.current.contains(event.target)
            ) {
                setO(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <button
            ref={currentParent}
            className="link w-fit"
            style={{ zIndex: o ? 1000 : 0 }}
            onClick={() => setO(state => !state)}
        >
            <span>Services</span>
            <Icon type="chevronDown" />
            {
                o &&
                <div className="menu">
                    {
                        types.map(type => {
                            return (
                                <Link
                                    key={type.id}
                                    className="menu-option"
                                    href={`/services/${type.id}`}
                                >
                                    <div>{type.title}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </button>
    )
}

function Support() {
    return (
        <Link
            className="link w-fit"
            href="/support"
        >
            <span>Support</span>
            <Icon type="support" />
        </Link>
    )
}

function SignButton() {

    const session = useSession()

    return session.status === "authenticated"
        ? (
            <Link
                className="link"
                href="/profile"
            >
                <img
                    className="w-[30px] rounded-full"
                    title={session.data.user.name}
                    src={session.data.user.image}
                    width={30}
                    height={30}
                />
            </Link>
        )
        : (
            <button
                onClick={() => signIn("google")}
                className="btn-light w-fit"
            >
                <span className="uppercase">Sign In</span>
            </button>
        )
}

function AdminButton() {

    const [isAdmin, setIsAdmin] = useState(false)
    const session = useSession()

    useEffect(() => {
        if (
            session.data &&
            ADMIN_LIST.includes(session.data.user.email)
        ) setIsAdmin(true)
    }, [session])

    return isAdmin && (
        <Link
            className="btn-green"
            href="/admin"
        >
            Admin
        </Link>
    )
}

function Menu() {

    const [o, setO] = useState(false)

    return (
        <div
            className="flex items-center justify-center gap-2"
        >
            <SignButton />
            <button
                className="btn-light"
                onClick={() => setO(state => !state)}
            >
                <Icon type={o ? "close" : "menu"} size={24} />
            </button>

            <div className={`fixed top-full left-0 w-full bg-dark flex flex-col gap-4 p-4 duration-300 ${o ? 'translate-y-0' : '-translate-y-[200%]'}`}>
                <Products />
                <Services />
                <Support />
                <AdminButton />
            </div>
        </div>
    )
}