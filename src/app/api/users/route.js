import { getToken } from "next-auth/jwt"
import { connectToDatabase } from '@/utils'
import { ADMIN_LIST } from "@/data/constant"

// Models
import users from "@/data/users"

export async function GET(req) {
    try {

        const token = await getToken({ req })
        if (token && ADMIN_LIST.includes(token.email)) {
            await connectToDatabase()
            return Response.json({ status: true, users: await users.find() })
        } else {
            return Response.json({ status: false })
        }

    } catch (e) {
        console.log("[Error] [/api/users] [GET]", e)
        return Response.json({ status: false })
    }
}

export async function DELETE(req) {
    try {
        const token = await getToken({ req })
        const body = await req.json()

        if (token && ADMIN_LIST.includes(token.email)) {
            console.log("access delete request handler")
            await connectToDatabase()
            await users.deleteOne({ email: body.email })
            return Response.json({ status: true })
        } else {
            return Response.json({ status: false })
        }
    } catch (e) {
        console.log("ERROR, /api/users", e)
        return Response.json({ status: false })
    }
}