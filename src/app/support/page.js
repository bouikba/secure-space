"use client"

import { Header, Icon } from "@/components"
import { FAQ } from "@/data/constant"
import { useState } from "react"

export default function Support() {
    return (
        <main className="main">
            <Header />
            <div className="flex flex-col min-h-screen gap-10 max-width py-32 px-4">
                <div className="flex items-center gap-4">
                    <span className="title">FAQ</span>
                    <Icon type="support" size={30} />
                </div>
                <FAQList />
                <div className="flex items-center gap-4">
                    <span className="title">Help center</span>
                    <Icon type="support" size={30} />
                </div>
                <div className="flex flex-col md:flex-row items-stretch justify-stretch gap-4 w-full md:w-fit">
                    <input
                        type="text"
                        placeholder="How can we help?"
                        className="input w-full lg:w-[500px] p-6"
                    />
                    <button
                        className="btn-dark flex justify-center items-center p-4 w-full md:w-fit min-h-full"
                    >
                        <Icon type="send" />
                    </button>
                </div>
            </div>
        </main>
    )
}

function FAQList() {

    const [openFAQ, setOpenFAQ] = useState(0)

    return (
        <div className="w-full flex flex-col gap-4">
            {
                FAQ.map((faq, index) => {
                    return (
                        <div
                            className="flex flex-col gap-4 p-4 bg-light rounded-md shadow-md shadow-sh-dark cursor-pointer overflow-hidden"
                            key={index}
                        >
                            <div
                                className="flex items-center justify-between"
                                onClick={() => setOpenFAQ(index)}
                            >
                                <span className="title whitespace-break-spaces">{faq.question}</span>
                                <Icon type={openFAQ === index ? "chevronUp" : "chevronDown"} />
                            </div>
                            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${openFAQ === index ? "max-h-[500px]" : "max-h-0"}`}>
                                {
                                    faq.response.map((res, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-stretch gap-2 text whitespace-break-spaces"
                                            >
                                                <div className="bg-dark max-w-[2px] min-w-[2px] min-h-full" />
                                                <span className="text">{res}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}