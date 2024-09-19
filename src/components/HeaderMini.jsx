import { Logo } from "../utils/Icons"

export const HeaderMini = ({ showLogo }) => {
    return (
        <div className="bg-gradient-to-b from-black to-transparent w-full h-[8vh] px-20 fixed top-0 left-0">
            {
                (showLogo) && (
                    <div className="pt-6"><Logo /></div>
                )
            }
        </div>
    )
}