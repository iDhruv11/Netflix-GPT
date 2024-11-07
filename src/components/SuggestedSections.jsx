import { useSelector } from "react-redux";
import { Section } from "./Section";
import { SectionTrending } from "./SectionTrending";

const SuggestedSections = ({ sections, page }) => {

    const data = useSelector(store => {
        return sections.reduce((acc, section) => {
            acc[section] = store.contents[section]
            return acc
        }, {})
    })
    console.log(data)
    return (
        <div
            className="bg-[#141414] w-screen relative mt-[3.2rem]"
            style={{ boxShadow: "0px -50px 40px 50px #141414", zIndex: "49" }}
        >
            <div className="-translate-y-40 flex flex-col gap-16">
                {
                    (() => {

                        return Object.keys(data)
                            .map(section => {

                                return (section == "trendingIndia")
                                    ? (() => {
                                        if(page == "home") return [
                                            <SectionTrending content={data[section].movies} page={"Movies"}/>,
                                            <SectionTrending content={data[section].shows} page={"Shows"}/>
                                        ]
                                        if(page == "movies") return <SectionTrending content={data[section].movies} page={"Movies"}/> 
                                        if(page == "shows") return <SectionTrending content={data[section].shows} page={"Shows"}/>
                                    })() 
                                    : <Section sectionData={data[section]} page={page} section={section}/>
                            })
                            .flat()

                    })()
                }
            </div>
        </div>
    )
}
export default SuggestedSections;