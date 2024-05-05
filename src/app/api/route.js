import { getToken } from "next-auth/jwt"
import { connectToDatabase } from '@/utils'

// Models
import users from "@/data/users"
import commands from "@/data/commands"
// import blacklist from "@/data/blacklist"
import services from "@/data/services"
import products from "@/data/products"

export async function GET(req) {

    try {

        const token = await getToken({ req })
        const { searchParams } = new URL(req.url)
        console.log(searchParams.get("get"))
        if (token) {
            await connectToDatabase()
            switch (searchParams.get("get")) {
                case "services":
                    return Response.json({
                        status: true,
                        data: await services.find({})
                    })
                case "products":
                    
                    return Response.json({
                        status: true,
                        data: await products.find({})
                    })
                case "commands":
                    return Response.json({
                        status: true,
                        data: await commands.find({})
                    })
                case "users":
                    return Response.json({
                        status: true,
                        data: await users.find({})
                    })
            }
        }

        return Response.json({
            status: false,
            data: null
        })

    } catch (e) {

        console.log("[Error] [/api] [GET]", e)
        return Response.json({
            status: false,
            data: null
        })

    }

}

export async function POST(req) {

    try {

        const token = await getToken({ req })
        const body = await req.json()

        if (token) {
            await connectToDatabase()
            switch (body.action) {
                case "add-command":
                    const newCommand = new commands({
                        name: token.name,
                        email: token.email,
                        picture: token.picture,
                        ...body.command,
                        status: 1,
                    })
                    await newCommand.save()
                    return Response.json({ status: true })
                case "update-command":
                    await commands.findOneAndUpdate({ "_id": body.command._id }, { ...body.command })
                    return Response.json({ status: true })
            }
        }

        return Response.json({ status: false })

    } catch (e) {

        console.log("[Error] [/api] [GET]", e)
        return Response.json({ status: false })

    }

}