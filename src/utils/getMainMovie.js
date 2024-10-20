export const getMainMovie = (collection, setMainMovie) => {

    const shuffledCollection = [
        ...collection.trendingIndia,
        ...collection.netflix
    ]
    const index = Math.floor(Math.random() * shuffledCollection.length)
    const mainMovie = shuffledCollection[index]

    const logo = new Image()
    logo.src = mainMovie.logo.image

    logo.onload = () => {

        const ratio = logo.naturalWidth/logo.naturalHeight
        let rank
        let minWidth, maxWidth

        if(ratio >= 1.75){
            minWidth = `w-[55%]`
            maxWidth = `w-[95%]`
        }
        else if(ratio >= 1.20 && ratio < 1.75){
            minWidth = `w-[40%]`
            maxWidth = `w-[55%]`
        }
        else{
            minWidth = `w-[30%]`
            maxWidth = `w-[38%]`
        }
        
        if( collection.trendingIndia.length > 5){
            if(index > 4){
                rank = (index - 5) + 1
            }
            else {
                rank = index + 1
            }
        }
        else{
            rank = index + 1
        }
        
        setMainMovie({

            title: mainMovie.title,
            desc: mainMovie.desc,
            logo: {
                src: mainMovie.logo.image,
                minWidth,
                maxWidth
            },
            type: mainMovie.type,
            isNetflixOriginal: (index >= collection.trendingIndia.length) ,
            rank,
            ageRating: mainMovie.ageRating,
            backdrop: mainMovie.backdropNoLang,
            videoKey: mainMovie.videos?.clip || mainMovie.videos?.trailer || mainMovie.videos?.teaser || `ITeFJcFFEBQ`
            
        })
    }
    
}