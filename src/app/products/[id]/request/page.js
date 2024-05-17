"use client"
import { Header, Loading } from "@/components"
import { PRODUCTS } from "@/data/constant"
import { useState, useMemo } from "react"
import { useSession } from "next-auth/react"

export default function Request({ params }) {

    const session = useSession()
    const product = useMemo(() => {
        return PRODUCTS.filter(p => p.id === Number(params.id))[0] || null
    }, [])

    return product && session.status === "authenticated" ? (
        <main className="main">
            <Header />
            <RequestForm product={product} />
        </main>
    ) : (
        session.status === "unauthenticated" ? (
            <main className="main">
                <Header />
                <div className="w-screen h-screen flex items-center justify-center title">Please sign in !</div>
            </main>
        )
            : <Loading />
    )

}

function RequestForm({ product }) {

    // const service = data.filter(service => service._id === _id)[0]
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")

    const funcRequestService = () => {

        if (phone && address && date) {
            fetch("/api/commands", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: product.title,
                    phone,
                    address,
                    date,
                })
            })
                .then(res => res.json())
                .then(res => {
                    if (res.status) {
                        window.history.go(-1)
                    }
                })
        }

    }
    const funcCancelRequest = () => {

        window.history.go(-1)

    }

    return (
        <div className="max-width min-h-screen flex flex-col md:flex-row items-center content-stretch gap-4 px-4 xl:px-0 py-32">

            <div className="w-full flex flex-col md:flex-row">
                <div className="w-full">
                    <img
                        className="w-full h-full max-w-none object-cover block"
                        src={product.img}
                        alt="service cover"
                    />
                </div>
                <div className="bg-light w-full flex flex-col gap-4 p-4">
                    <div className="title opacity-50">{product.title}</div>
                    <div className="title">phone number</div>
                    <input
                        className="input"
                        type="number"
                        placeholder="+212 (xxx) xxx-xx-xx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="title">Address</div>
                    <input
                        className="input"
                        type="text"
                        placeholder="Address..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <div className="title">Date</div>
                    <input
                        className="input"
                        type="date"
                        placeholder="Address..."
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <div className="flex items-center gap-4">
                        <button
                            className="btn-dark"
                            onClick={funcRequestService}
                        >
                            Confirm
                        </button>
                        <button
                            className="btn-dark"
                            onClick={funcCancelRequest}
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )

}