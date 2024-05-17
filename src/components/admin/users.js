"use client"

import { useEffect, useState } from "react"
import { Loading } from "@/components"

export default function Users() {

    const [users, setUsers] = useState(null)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch("/api/users")
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setUsers(res.users)
                }
            })
    }, [refresh])

    const funcDeleteUser = (email) => {
        fetch("/api/users", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    setRefresh(state => !state)
                }
            })
    }

    return users ? (
        <div className="w-full overflow-u-scroll flex flex-col gap-10 p-4">
            <div className="title">Users management</div>
            <div className="flex flex-col gap-10 p-10 bg-white rounded-md shadow-md shadow-sh-dark">
                <div className="grid grid-cols-5 items-center">
                    <span className="title">#</span>
                    <span className="title">picture</span>
                    <span className="title">name</span>
                    <span className="title">email</span>
                    <span className="title">action</span>
                </div>
                {
                    users.map((user, index) => {
                        return (
                            <div
                                key={user._id}
                                className="grid grid-cols-5 items-center"
                            >
                                <span className="text">{index}</span>
                                <img src={user.picture} className="max-w-[50px] rounded-full" alt="user" />
                                <span className="text">{user.name}</span>
                                <span className="text">{user.email}</span>
                                <button
                                    className="btn-red"
                                    onClick={() => funcDeleteUser(user.email)}
                                >
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    ) : <Loading />
}