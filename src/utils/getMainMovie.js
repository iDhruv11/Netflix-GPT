export const getMainMovie = (collection, setMainMovie) => {
    
    console.log(collection)

    // const index = Math.floor(Math.random() * collection.content.length)
    let index = Math.floor(Math.random() * collection.content.length)
    if(collection.page == "director") index = 8
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


        setMainMovie({

            title: mainMovie.title,
            desc: mainMovie.desc,
            logo: {
                src: mainMovie.logo.image,
                minWidth,
                maxWidth,
                aspectRatio,
            },
            type: mainMovie.type,
            isNetflixOriginal: (index >= 10),
            rank,
            ageRating: mainMovie.ageRating,
            backdrop: mainMovie.backdropNoLang,
            videoKey: ["Black Friday", "Gulaal"].includes(mainMovie.title)
                ?   `ITeFJcFFEBQ`
                :   mainMovie.videos?.clip || mainMovie.videos?.trailer || mainMovie.videos?.teaser || `ITeFJcFFEBQ`
            
        })
    }
    
}