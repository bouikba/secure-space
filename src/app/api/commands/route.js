import { getToken } from "next-auth/jwt"
import { connectToDatabase } from '@/utils'
import { ADMIN_LIST } from "@/data/constant"

// Models
import commands from "@/data/commands"

export async function POST(req) {
    try {

        const token = await getToken({ req })
        const body = await req.json()

        if (token) {
            await connectToDatabase()
            const newCommand = new commands({
                name: token.name,
                email: token.email,
                picture: token.picture,
                ...body
            })
            await newCommand.save()
            return Response.json({ status: true })
        }

        return Response.json({ status: false })

    } catch (e) {

        console.log("[Error] [/api] [GET]", e)
        return Response.json({ status: false })

    }

}

export async function GET(req) {
    try {

        const token = await getToken({ req })
        if (token && ADMIN_LIST.includes(token.email)) {
            await connectToDatabase()
            return Response.json({ status: true, commands: await commands.find() })
        } else {
            return Response.json({ status: false })
        }

    } catch (e) {
        console.log("[Error] [/api/commands] [GET]", e)
        return Response.json({ status: false })
    }
}

export async function DELETE(req) {
    try {

        const token = await getToken({ req })
        const body = await req.json()

        if (token && ADMIN_LIST.includes(token.email)) {
            await connectToDatabase()
            await commands.deleteOne({
                _id: body._id
            })
            return Response.json({ status: true })
        } else {
            return Response.json({ status: false })
        }

    } catch (e) {
        console.log("ERROR, /api/commands", e)
        return Response.json({ status: false })
    }
}