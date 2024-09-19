import { TickForBtn } from "../utils/Icons"

export const SaveBtn = () => {
    return (
        <button
            className="bg-white text-black text-2xl font-bold px-6 py-2 rounded-sm flex items-center gap-2 transition-all duration-200 ease-linear border-2 border-white hover:border-[#adadad] hover:bg-[#adadad]"
        >
            <TickForBtn />
            <p className="tracking-wide">Save</p>
        </button>
    )
}