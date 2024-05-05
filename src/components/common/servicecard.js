import Link from "next/link"

export function ServiceCard({ service }) {
    return (
        <Link
            className="service-card group relative flex flex-col overflow-hidden cursor-pointer w-full shadow-md shadow-sh-dark rounded-md"
            href={`/services/${service.id}`}
        >
            <img
                className="h-full object-cover group-hover:opacity-20 duration-500"
                src={service.img}
            />
            <div className="text-dark title text-center p-4">
                {service.title}
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-dark title whitespace-break-spaces opacity-0 group-hover:opacity-100 duration-500 p-4 text-center">
                {service.description}
            </div>
        </Link>
    )
}