import { getToken } from "next-auth/jwt"
import { connectToDatabase } from '@/utils'
import users from "@/data/users"

export async function GET(req) {
    try {
        const token = await getToken({ req })
        if (token) {
            await connectToDatabase()
            const user = await users.findOne({ email: token.email })
            return Response.json({ status: true, marked: user.marked })
        } else {
            return Response.json({ status: false })
        }
    } catch (e) {
        console.log("ERROR, /api/products", e)
        return Response.json({ status: false })
    }
}

export async function POST(req) {

    try {

        const token = await getToken({ req })
        const body = await req.json()

        if (token) {
            if (await checkIfMarked(token, body.id)) {
                await unmarkProduct(token, body.id)
            } else {
                await markProduct(token, body.id)
            }
            return Response.json({ status: true })
        } else {
            return Response.json({ status: false })
        }

    } catch (e) {
        console.log("ERROR, /api/products", e)
        return Response.json({ status: false })
    }

}

async function markProduct(token, productId) {

    try {
        await connectToDatabase()
        await users.updateOne(
            {
                email: token.email
            },
            {
                $push: {
                    marked: productId
                }
            }
        )
    } catch (e) {
        console.log("ERROR, /api/products, markProduct", e)
    }

}

async function unmarkProduct(token, productId) {

    try {
        await connectToDatabase()
        const user = await users.findOne({ email: token.email })
        await users.updateOne(
            {
                email: token.email
            },
            {
                marked: user.marked.filter(id => id !== productId)
            }
        )
    } catch (e) {
        console.log("ERROR, /api/products, unmarkProduct", e)
    }

}

async function checkIfMarked(token, productId) {
    try {
        await connectToDatabase()
        const user = await users.findOne({ email: token.email })
        console.log(user.marked)
        return user.marked.includes(productId)
    } catch (e) {
        console.log("ERROR, /api/products, checkIfMarked", e)
    }
}