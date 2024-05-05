"use client"
import { useState, useEffect } from "react"

export default function Users() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/api?get=users")
            .then(res => res.json())
            .then(res => {
                if (res.status) setData(res.data)
                console.log(res)
            })
    }, [])

    function funcParseDate(time) {
        const addZero = n => n < 10 ? '0' + n : n
        const date = new Date(time)
        return `${addZero(date.getFullYear())}/${addZero(date.getMonth())}/${addZero(date.getDay())}`
    }
    function funcBanUser(email){
        // fetch("/api", {
        //     meth
        // })
    }

    return data && (
        <div className="flex flex-col p-4">
            <div className="bg-dark text-light grid grid-cols-6 p-2">
                <div>Picture</div>
                <div>Name</div>
                <div>Email</div>
                <div>Join date</div>
            </div>
            {
                data.map(user => {
                    return (
                        <div
                            key={user._id}
                            className="grid grid-cols-6 items-center odd:bg-sh-dark p-2"
                        >
                            <img src={user.picture} width={40} height={40} />
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{funcParseDate(user.join)}</div>
                            <button
                                className="btn-red"
                                onClick={funcBanUser(user.email)}
                            >
                                ban
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}