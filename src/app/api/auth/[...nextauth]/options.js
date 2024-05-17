import GoogleProvider from "next-auth/providers/google"
import users from "@/data/users"
import { connectToDatabase } from "@/utils"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ profile }) {

            if (!profile) return false
            else await _signIn(profile)
            return true

        },
    },
    secret: process.env.NEXTAUTH_SECRET
}

async function _signIn(profile) {

    await connectToDatabase()
    if (await isOld(profile.email)) await updateUser(profile)
    else await setupUser(profile)

}

// check if old user
async function isOld(email) {

    if (email === undefined) return false
    return await users.findOne({ "email": email }) ? true : false

}

// update user data
async function updateUser(profile) {

    try {

        await users.updateOne({ "email": profile.email }, {
            "name": profile.name,
            "picture": profile.picture,
        })

    } catch (e) {
        console.log("[Error][updateUser]")
    }

}

// setupUser new user in database
async function setupUser(profile) {

    try {

        const user = {
            email: profile.email,
            name: profile.name,
            picture: profile.picture,
            purchase: [],
            save: [],
            join: new Date().getTime(),
        }

        const newUser = new users(user)
        await newUser.save()

    } catch (e) {
        console.log("[Error][setupUser]")
    }

}