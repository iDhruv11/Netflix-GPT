
const Dropdown = ({ question, answerOne, answerTwo, show, setDropdownToShow, index}) => {
    const handleClick = () => {
        (show) ? setDropdownToShow(null) : setDropdownToShow(index);
    }
    return (
        <div className="bg-[#2D2D2D] text-2xl font-bold">
            <div className="flex justify-between items-center py-6 px-6 hover:bg-[#3a3a3a] transition ease-in-out duration-300" onClick={handleClick}>
                <div>{question}</div>
                <div>
                    {
                        (show) ? '✖' : '🞤'
                    }
                </div>
            </div>
            {
                (show) ? (
                    <div className="border-t-2 border-t-black py-5 px-6">
                        <div>{answerOne}</div>
                        {
                            (answerTwo != "") ? <br /> : null
                        }
                        <div>{answerTwo}</div>
                    </div>
                ) : null
            }
        </div>


    )

}
export default Dropdown;