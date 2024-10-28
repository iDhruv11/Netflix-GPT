import { useEffect, useRef, useState } from "react"

export const PageTitle = ({ page, options }) => {

    let showListTimeoutId = useRef(null)
    let hideListTimeoutId = useRef(null)
    const pageTitle = useRef(null)

    const [showList, setShowList] = useState(false)
    const [isTransparent, setIsTransparent] = useState(false)

    const handleShowList = () => {
        showListTimeoutId.current = setTimeout( () => {
            setShowList(true)
        }, 700)
    }
    const handleHideList = () => {
        clearTimeout(showListTimeoutId.current)
        hideListTimeoutId.current = setTimeout( () => {
            setShowList(false)
        }, 700)
    }

    const handleKeepShowingList = () => {
        clearTimeout(hideListTimeoutId.current)
    }
    const handleStopShowingList = () => {
        setTimeout(() => {
            setShowList(false)
        }, 700);
    }

    // useEffect( () => {
        // if(!isTransparent){
        //     pageTitle.current.classList.add("transition-all")
        //     setTimeout(() => {
        //         setIsTransparent(true)
        //     }, 1000);
        // }
        // else{
        //     pageTitle.current.classList.remove("transition-all")
        //     setIsTransparent(false)
            
        //     setTimeout(() => {
        //         pageTitle.current.classList.add("transition-all")
        //         setIsTransparent(true)
        //     }, 1000);
        // }
    // }, [page])
    useEffect( () => {

        if(!isTransparent){

            setTimeout(() => {
                setIsTransparent(true)
            }, 2000);

        }
        else{

            setIsTransparent(false)
            setTimeout(() => {
                setIsTransparent(true)
            }, 2000);

        }
    }, [page])

    return (
        <div
            className={`w-full h-full pl-16 text-white ${ (isTransparent) ? `bg-transparent transition-all duration-[1000ms] ease-linear` : `bg-[#141414]` }`}
        >

            <div className="flex items-center gap-10">

                <h1 className="text-[2.50rem] font-medium pb-1">{ 
                    (page == "movies")
                        ? "Movies"
                        : (page == "shows")
                            ? "TV Shows"
                            : "Director's Chair"
                }</h1>

                <div>
                    <select
                        className="border-[1px] border-neutral-100 text-neutral-100 text-lg font-medium tracking-wide px-3 py-[.2rem] focus:outline-none appearance-none modify-arrow hover:cursor-pointer pr-7 transition-all duration-200 ease-linear hover:bg-white/10"
                        style={
                            {
                                backgroundColor: (showList) ? "rgba(255, 255, 255, 0.1)" : "black"
                            }
                        }
                        onMouseEnter={ handleShowList }
                        onMouseLeave={ handleHideList }
                    >
                        <option value="" selected disabled hidden>{ (page == "directors") ? "Directors" : "Genres"}</option>

                    </select>

                    <div
                        className={`bg-black/85 text-sm font-normal flex pr-3 absolute ${ (showList) ? `opacity-100` : `opacity-0` } transition-all duration-150 ease-linear`}
                        onMouseEnter={ handleKeepShowingList }    
                        onMouseLeave={ handleStopShowingList }
                    >
                            
                        <div className="py-2">
                            {
                                options.map((option, index) => (index <= 6) && <p className="py-[0.20rem] px-3 hover:cursor-pointer text-neutral-300 hover:text-white transition-all duration-200 ease-linear">{option}</p>)
                            }
                        </div>
                        <div className="py-2">
                            {
                                options.map((option, index) => (index > 6) && <p className="py-[0.20rem] px-3 hover:cursor-pointer text-neutral-300 hover:text-white transition-all duration-200 ease-linear">{option}</p>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}