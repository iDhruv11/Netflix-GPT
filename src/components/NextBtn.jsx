import { Smaller } from "../utils/Icons"

export const NextBtn = ({ onClick }) => {
    return (
        <div
            className="absolute top-0 left-0 opacity-0 bg-[#00000038] hover:bg-[#00000081] group-hover:opacity-100 group-hover:cursor-pointer flex items-center z-10 h-full transition-all duration-150 ease-linear"
            onClick={onClick}
        >
            <Smaller />
        </div>
    )
}