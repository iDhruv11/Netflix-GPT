import { useEffect, useState } from "react";
import Dropdown from './Dropdown';
const Faq = () => {
    const [data, setData] = useState([]);
    const [dropdownToShow, setDropdownToShow] = useState(null);
    let show = false;
    useEffect(()=>{
        fetchFaq();
    }, [])
    const fetchFaq = async () => {
        const url = "https://66a3952a44aa63704581c8a4.mockapi.io/dropdowns";
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        setData(jsonData);
    }
    
    return (
        <div className="w-full bg-black text-white py-16 border-b-8 border-[#2D2D2D]">
            <h1 className="text-5xl font-extrabold text-center">Frequently Asked Questions</h1>
            <div className="w-7/12 bg-black mx-auto mt-8 flex flex-col gap-2">
                {
                    data.map((item, index) => {
                        show = (index == dropdownToShow) ? true : false;
                        return (
                            <Dropdown 
                            question={item.question} 
                            answerOne={item.answerOne}
                            answerTwo={item.answerTwo}
                            key={item.id}
                            show={show}
                            setDropdownToShow={setDropdownToShow}
                            index={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Faq;