"use client"

import { useEffect, useState } from "react"
import { Loading } from "@/components"

export default function Commands() {

    const [refresh, setRefresh] = useState(false)
    const [commands, setCommands] = useState(null)

    useEffect(() => {
        fetch("/api/commands")
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setCommands(res.commands)
                }
            })
    }, [refresh])

    const funcDeleteCommand = (_id) => {
        fetch("/api/commands", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ _id })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setRefresh(state => !state)
                }
            })
    }

    return commands ? (
        <div className="flex flex-col w-full gap-10 p-4 overflow-y-scroll">
            <div className="title">commands management</div>
            <div className="flex flex-col gap-10 p-10 bg-white rounded-md shadow-md shadow-sh-dark" >
                <div className="grid grid-cols-7 justify-start">
                    <span className="title">#</span>
                    <span className="title">name</span>
                    <span className="title">type</span>
                    <span className="title">phone</span>
                    <span className="title">address</span>
                    <span className="title">date</span>
                    <span className="title">status</span>
                </div>
                {
                    commands.map((command, index) => {
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-7 justify-start items-center"
                            >
                                <span className="text">{index}</span>
                                <span className="text">{command.name}</span>
                                <span className="text">{command.type}</span>
                                <span className="text">{command.phone}</span>
                                <span className="text">{command.address}</span>
                                <span className="text">{command.date}</span>
                                <button
                                    className="btn-red"
                                    onClick={() => funcDeleteCommand(command._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) : <Loading />
}