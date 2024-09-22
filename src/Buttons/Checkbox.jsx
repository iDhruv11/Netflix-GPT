import { useState } from "react";
import { TickForCheckbox } from "../utils/Icons"

export const Checkbox = () => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div
            className={`border-2 border-neutral-500 inline-block hover:border-neutral-300 hover:cursor-pointer ${ isChecked ? `px-1 py-1` : `px-3 py-3` } `}
            onClick={ () => setIsChecked(!isChecked) }
        >
            {
                (isChecked) && <TickForCheckbox />
            }
        </div>
    )
}