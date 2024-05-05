"use client"
import { useState, useEffect } from "react"

export default function Commands() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api?get=commands")
            .then(res => res.json())
            .then(res => {
                if (res.status) setData(res.data)
            })
    }, [])

    const funcChangeStatus = (command) => {

        setData(commands => commands.map(c => {
            return c._id === command._id ? {
                ...command,
                status: command.status < 3 ? command.status + 1 : 1
            } : c
        }))

        fetch("/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                action: "update-command",
                command: {
                    ...command,
                    status: command.status < 3 ? command.status + 1 : 1
                }
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    // notify
                }
            })
    }

    return data && (
        <div className="w-full flex flex-col p-4 text-sm">
            <div className="bg-dark text-light grid grid-cols-6 p-4">
                <div>User</div>
                <div>Address</div>
                <div>Phone</div>
                <div>Date</div>
                <div>Command</div>
                <div>Status</div>
            </div>
            {
                data.map(command => {
                    return (
                        <div
                            key={command._id}
                            className="grid grid-cols-6 items-center odd:bg-sh-dark p-4"
                        >
                            <div className="flex flex-col">
                                <span>{command.name}</span>
                                <span className="text-xs">
                                    {command.email.slice(0, command.email.indexOf("@")) + "@..."}
                                </span>
                            </div>
                            <div>{command.address}</div>
                            <div>{command.phone}</div>
                            <div>{command.date}</div>
                            <div>{command.type}</div>
                            <div
                                className={`p-2 w-fit cursor-pointer\
                                ${command.status === 1 ? "bg-yellow-300":""}\
                                ${command.status === 2 ? "bg-green-300":""}\
                                ${command.status === 3 ? "bg-red-300":""}`}
                                onClick={() => funcChangeStatus(command)}
                            >
                                {command.status === 1 && "Pending"}
                                {command.status === 2 && "Success"}
                                {command.status === 3 && "Unsuccess"}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}