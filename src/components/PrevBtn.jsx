import { Greater } from "../utils/Icons"

export const PrevBtn = ({onClick}) => {

    return (
        <div
            className="absolute top-0 right-0 opacity-0 bg-[#00000038] hover:bg-[#00000081] group-hover:opacity-100 group-hover:cursor-pointer flex items-center z-10 h-full transition-all duration-150 ease-linear"
            onClick={onClick}
            >
            <Greater />
        </div>
    )
}