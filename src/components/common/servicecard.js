import Link from "next/link"
import { Icon } from "@/components"

export function ServiceCard({ service }) {
    return (
        <div
            id={`id-${service.id}`}
            className="service-card group relative flex flex-col md:flex-row md:even:flex-row-reverse items-stretch p-4 gap-4 overflow-hidden cursor-pointer w-full shadow-md shadow-sh-dark rounded-md"
        >
            <div className="md:w-1/2 min-h-full">
                <img
                    className="h-full w-full max-w-none object-cover"
                    src={service.img}
                />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
                <div className="text-dark title border-l-4 border-dark pl-4">
                    {service.title}
                </div>
                <div className="text-dark">
                    {service.description}
                </div>
                <Features features={service.features} />
                <Link
                    className="btn-dark self-end group-even:self-start"
                    href={`/services/${service.id}`}
                >
                    <span>learn more</span>
                    <Icon type="chevronRight" />
                </Link>
            </div>

        </div>
    )
}

function Features({ features }) {
    return (
        <div className="flex flex-col gap-2">
            {
                features.map(feature => {
                    return (
                        <div
                            key={feature.title}
                            className="flex items-center gap-2"
                        >
                            <Icon type="check" size={30} style="opacity-50" />
                            <span>{feature.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}