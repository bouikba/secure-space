export function Loading() {
    return (
        <div className="bg-light fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-[2000]">
            <div className="animate-spin p-4 rounded-full border-2 border-y-transparent border-x-dark"/>
        </div>
    )
}