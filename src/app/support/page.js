import { Header, Icon } from "@/components"

export default function Support() {
    return (
        <main className="main">
            <Header />
            <div className="flex flex-col min-h-screen items-center justify-center gap-6 max-width">
                <div className="text-4xl font-black capitalize flex items-center justify-center gap-2">
                    <div>help center</div>
                    <Icon type="support" size={30} />
                </div>
                <div className="flex flex-col md:flex-row items-stretch justify-stretch gap-2 w-full md:w-fit p-4">
                    <input
                        type="text"
                        placeholder="How can we help?"
                        className="input w-full lg:w-[500px] p-6"
                    />
                    <button
                        className="btn-dark flex justify-center items-center p-4 bg-light w-full md:w-fit min-h-full"
                    >
                        <Icon type="send" />
                    </button>
                </div>
            </div>
        </main>
    )
}