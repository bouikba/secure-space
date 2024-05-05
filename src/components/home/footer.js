import { Icon } from "@/components"
import Link from "next/link"

export function Footer() {

    return (
        <footer className="bg-dark text-light">
            <div className="flex flex-col md:flex-row md:items-center justify-between max-width gap-4 px-4 py-10">
                <div className="flex items-center gap-2 w-fit">
                    <Icon type="logo" size={30} />
                    <span className="title">Securespace</span>
                </div>
                <div className="flex items-center gap-2 w-fit">
                    <Link
                        className="link"
                        href="#"
                    >
                        <Icon type="facebook" />
                    </Link>
                    <Link
                        className="link"
                        href="#"
                    >
                        <Icon type="instagram" />
                    </Link>
                    <Link
                        className="link"
                        href="#"
                    >
                        <Icon type="whatsapp" />
                    </Link>
                </div>
                <div className="title w-fit">
                    Securespace © {new Date().getUTCFullYear()}
                </div>
            </div>
        </footer>
    )

}