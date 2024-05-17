import { SERVICES } from "@/data/constant";
import { ServiceCard } from "../common/servicecard";

export default function Products() {
    return (
        <div className="flex flex-col gap-4 p-4 overflow-y-scroll">
            <div className="title">Services management</div>
            <div className="flex flex-wrap gap-4">
                {
                    SERVICES.map(service => {
                        return <ServiceCard key={service.id} service={service}/>
                    })
                }
            </div>
        </div>
    )
}