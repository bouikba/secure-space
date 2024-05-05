import { Header } from "@/components";

export default function Login() {
    return (
        <main className="main items-center justify-center p-4">
            <div className="bg-light flex flex-col items-center w-full lg:max-w-[500px] gap-4 px-4 shadow-md shadow-sh-dark">
                <div className="title opacity-50">Login to secure space</div>
                <input className="input" placeholder="Email..."/>
                <input className="input" placeholder="Password..."/>
                <button className="btn-dark w-full">login</button>
            </div>
        </main>
    )
} 