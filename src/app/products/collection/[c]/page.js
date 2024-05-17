import { Header, ProductCard } from "@/components"
import { PRODUCTS } from "@/data/constant"

export default function Collection({ params }) {
    return (
        <main className="main">
            <Header />
            <div className="flex justify-center gap-4 flex-wrap py-32 px-4 md:px-0 max-width">
                <div className="w-full text-center bg-sh-light p-4 mb-10">
                    <span className="title">
                        {"collection of " + params.c.replace("%20", " ")}
                    </span>
                </div>
                {
                    PRODUCTS.map(product => {
                        if (product.collection === params.c.replace("%20", " ")) {
                            return <ProductCard key={product.id} product={product} />
                        }

                    })
                }
            </div>
        </main>
    )
}