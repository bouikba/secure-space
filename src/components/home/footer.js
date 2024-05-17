import { Icon } from "@/components"
import Link from "next/link"

export function Footer() {

    return (
        <div className="bg-dark text-light mt-32 p-4">
            <div className="flex flex-col md:flex-row md:items-start justify-between max-width gap-4 py-10">
                <div className="flex-col flex justify-start gap-2 w-fit">
                    <div className="title">Products</div>
                    <Link
                        className="link"
                        href={"/products/collection/surveillance%20camera"}
                    >
                        surveillance camera
                    </Link>
                    <Link
                        className="link"
                        href={"/products/collection/smoke%20detector"}
                    >
                        smoke detector
                    </Link>
                    <Link
                        className="link"
                        href={"/products/collection/electronic%20lock"}
                    >
                        electronic lock
                    </Link>
                </div>
                <div className="flex-col flex justify-start gap-2 w-fit">
                    <div className="title">Services</div>
                    <Link
                        className="link"
                        href={"/services/985753"}
                    >
                        CCTV Installation
                    </Link>
                    <Link
                        className="link"
                        href={"/services/379963"}
                    >
                        Alarm Systems Installation
                    </Link>
                    <Link
                        className="link"
                        href={"/services/536049"}
                    >
                        Door Locking Systems Installation
                    </Link>
                    <Link
                        className="link"
                        href={"/services/215635"}
                    >
                        Security Equipment Repair
                    </Link>
                </div>
                <div className="flex-col flex justify-start gap-2 w-fit">
                    <div className="title">Contact</div>
                    <Link
                        className="link"
                        href={"#"}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/color/30/facebook-new.png" alt="facebook-new" />
                        facebook
                    </Link>
                    <Link
                        className="link"
                        href={"#"}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/office/30/instagram-new.png" alt="instagram-new" />
                        instagram
                    </Link>
                    <Link
                        className="link"
                        href={"#"}
                    >
                        <img width="30" height="30" src="https://img.icons8.com/color/30/whatsapp--v1.png" alt="whatsapp--v1" />
                        whatsapp
                    </Link>
                </div>
                <div className="flex-col flex justify-start gap-2 w-fit">
                    <div className="title">
                        Help center
                    </div>
                    <Link
                        className="link"
                        href="/support"
                    >
                        <Icon type="support" size={30} />
                        support
                    </Link>
                </div>
            </div>
            <div className="text text-center max-width">
                Securespace © {new Date().getUTCFullYear()}
            </div>
        </div>
    )

}