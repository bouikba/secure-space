"use client"
import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { Header, Icon, Loading, ProductCard } from "@/components"
import { PRODUCTS } from "@/data/constant"

export default function Profile() {

    const session = useSession()

    return session.data ? (
        <main className="main">
            <Header />
            <div className="grid grid-cols-8 gap-4 max-width py-32 px-4 xl:px-0">

                {/* Profile */}
                <div className="bg-light h-fit flex flex-col gap-2 p-4 col-span-8 lg:col-span-2">

                    <div className="flex items-center gap-4">
                        <img
                            className="rounded-md"
                            src={session.data.user.image}
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col gap-2 overflow-hidden">
                            <span className="text-2xl font-black">{session.data.user.name}</span>
                            <span>
                                {session.data.user.email.slice(0, session.data.user.email.indexOf("@") - 4)}
                                ****@
                            </span>
                        </div>
                    </div>

                    {/* <button
                        className={`btn-dark ${section === "purchase" ? 'btn-dark-select': ''} justify-between w-full`}
                        onClick={() => setSection("purchase")}
                    >
                        <Icon type="store" />
                        <span>Purchase</span>
                        <span>{
                            (userData["purchase"].length < 10 ?'0' :'') + userData["purchase"].length
                        }</span>
                    </button>

                    <button
                        className={`btn-dark ${section === "saved" ? 'btn-dark-select': ''} justify-between w-full`}
                        onClick={() => setSection("saved")}
                    >
                        <Icon type="save" />
                        <span>Saved</span>
                        <span>{
                            (userData["saved"].length < 10 ?'0' :'') + userData["saved"].length
                        }</span>
                    </button>

                    <button
                        className="btn-dark justify-start w-full"
                        onClick={() => signOut()}
                    >
                        <Icon type="signOut" />
                        Sign Out
                    </button> */}

                </div>

                {/* Section  */}
                <div id="items" className="bg-light flex flex-wrap items-start gap-4 p-4 min-h-[500px] col-span-8 lg:col-span-6">
                    <EmptyBox />
                </div>

            </div>
        </main>
    ) : <Loading />
}

function EmptyBox() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <svg className="fill-sh-dark stroke-dark stroke-2" width="200" height="200" viewBox="0 0 800 642" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9565 128.664L10.9657 128.664L10.9749 128.665L135.037 136.348L323.233 300.456L166.805 301.633L166.742 301.633L166.679 301.635C161.912 301.791 156 300.434 150.317 297.897C144.634 295.361 139.67 291.865 136.595 288.202L136.592 288.199L7.76389 135.048C7.76287 135.047 7.76185 135.046 7.76083 135.045C6.202 133.184 5.4497 131.721 5.15478 130.734C4.94503 130.032 5.00022 129.715 5.02326 129.637C5.07325 129.572 5.29224 129.347 5.96178 129.107C6.92081 128.764 8.53625 128.505 10.9565 128.664ZM5.03081 129.618C5.03124 129.618 5.02943 129.624 5.02411 129.635C5.02772 129.623 5.03038 129.617 5.03081 129.618ZM5.02156 129.64C5.01554 129.651 5.01156 129.657 5.01107 129.656C5.01059 129.656 5.0136 129.65 5.02156 129.64Z" />
                <path d="M519.646 24.3483L519.648 24.349L788.45 106.817C792.853 108.168 794.46 110.347 794.864 111.925C795.269 113.5 794.912 116.185 791.689 119.498L791.688 119.5L716.902 196.461C716.902 196.461 716.902 196.461 716.902 196.461C714.892 198.528 712.119 200.265 708.905 201.54L703.253 203.783L706.546 208.896L777.19 318.554L777.428 318.923L777.726 319.244C780.814 322.575 781.219 325.405 780.747 327.213C780.277 329.018 778.549 331.279 774.239 332.662L774.226 332.666L449.469 437.853L449.458 437.856C440.771 440.692 429.41 436.515 424.569 428.742L424.529 428.678L424.487 428.615L344.368 308.214L680.594 207.828L693.635 203.934L681.175 198.459L445.804 95.0438L445.794 95.0394L445.784 95.0351C444.938 94.6679 444.219 94.2643 443.536 93.8012L442.012 92.769L440.183 92.971L140.422 126.075L112.349 48.3901L112.24 48.0886L112.094 47.8035C110.067 43.8599 110.311 40.739 111.398 38.6931C112.486 36.6467 114.942 34.6892 119.364 34.1513C119.365 34.1511 119.367 34.1509 119.368 34.1507L358.156 5.40145L358.16 5.40087C367.233 4.29976 377.504 10.569 380.691 19.1365L380.978 19.906L381.495 20.5436L432.573 83.4903L437.161 89.1454L440.79 82.8312C441.388 81.7916 442.056 80.845 442.908 79.9825L442.915 79.9755L490.301 31.824L490.305 31.8195C493.535 28.5296 498.508 25.877 504.068 24.4611C509.629 23.045 515.254 22.9988 519.646 24.3483Z" />
                <path d="M674.302 401.714L662.581 506.09C662.24 509.106 660.72 512.62 658.303 515.786C655.885 518.953 652.894 521.348 650.074 522.475L650.072 522.476L366.879 635.78L366.873 635.783L366.866 635.786C364.176 636.871 360.727 637.023 357.298 636.155C353.868 635.286 350.896 633.508 349.032 631.276L166.075 411.932L166.074 411.93C163.902 409.329 161.747 405.336 160.135 400.892C158.523 396.447 157.617 392 157.617 388.606V335.626H328.652L405.926 464.048C405.927 464.048 405.927 464.048 405.927 464.049C413.04 475.874 429.056 481.832 442.149 477.552C442.149 477.552 442.15 477.552 442.15 477.552L674.302 401.714Z" />
            </svg>
            <span className="title">No items was found</span>
        </div>
    )
}