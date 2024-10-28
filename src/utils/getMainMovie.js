
export const getMainMovie = (collection, setMainMovie, contentOccurance) => {

    
    const nameMapping = {
        martin: "Martin Scorsese",
        tarantino: "Quentin Tarantino",
        steven: "Steven Spielberg",
        nolan: "Christopher Nolan",
        kubrick: "Stanley Kubrick",
        fincher: "David Fincher",
        coen: "Coen Brothers",
        ray: "Satyajit Ray",
        hirani: "Rajkumar Hirani",
        guru: "Guru Dutt",
        anurag: "Anurag Kashyap",
    }
    console.log(collection)
    let index = Math.floor(Math.random() * collection.content.length)

    // let index = Math.floor(Math.random() * collection.content.length)
    // if(collection.page == "director") index = 1

    if(contentOccurance.length == collection.content.length) contentOccurance.length = 0
    while(contentOccurance.includes(index)){
        index = Math.floor(Math.random() * collection.content.length)
        console.log("movie was ", collection.content[index])
    }
    contentOccurance.push(index)

    const mainMovie = collection.content[index]

    const logo = new Image()
    logo.src = mainMovie.logo.image

    logo.onload = () => {

        const aspectRatio = logo.naturalWidth/logo.naturalHeight
        let rank
        let minWidth, maxWidth

        if(aspectRatio >= 1.75){
            minWidth = `w-[55%]`
            maxWidth = (collection.page == "home") ? `w-[95%]` : `w-[85%]`
        }
        else if(aspectRatio >= 1.20 && aspectRatio < 1.75){
            minWidth = `w-[40%]`
            maxWidth = `w-[55%]`
        }
        else{
            minWidth = `w-[30%]`
            maxWidth = `w-[38%]`
        }
        
        if(collection.page == "home"){
            if(index > 4){
                rank = (index - 5) + 1
            }
            else {
                rank = index + 1
            }
        }
        else {
            rank = index + 1
        }

        let desc = mainMovie.desc.slice(0, 140).trim()
        if( desc[desc.length-1] == ",") desc.splice(0, desc.length-1)
        desc = desc + "..."

        setMainMovie({

            page: collection.page,
            director: nameMapping[mainMovie.director],
            title: mainMovie.title,
            desc,
            logo: {
                src: mainMovie.logo.image,
                minWidth,
                maxWidth,
            },
            type: mainMovie.type,
            isNetflixOriginal: collection.page != "director" ? index >= 10 : false,
            rank,
            ageRating: mainMovie.ageRating,
            backdrop: mainMovie.backdropNoLang,
            videoKey: ["Black Friday", "Gulaal"].includes(mainMovie.title)
                ?   `ITeFJcFFEBQ`
                :   mainMovie.videos?.clip || mainMovie.videos?.trailer || mainMovie.videos?.teaser || `ITeFJcFFEBQ`
            
        })
    }
    
}