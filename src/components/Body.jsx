import Feature from "./Feature";
const info = [
    {
        heading: 'Enjoy on your TV', 
        sub: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        urlOne: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png', 
        urlTwo: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
    },
    {
        heading: 'Download your shows to watch offline', 
        sub: 'Save your favourites easily and always have something to watch.',
        urlOne: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg', 
        urlTwo: null
    },
    {
        heading: 'Watch everywhere', 
        sub: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        urlOne: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png', 
        urlTwo: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
    },
    {
        heading: 'Create profiles for kids', 
        sub: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
        urlOne: 'https://occ-0-6546-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d', 
        urlTwo: null
    },

]
const Body = () => {
    return (
        <div>
            {
                info.map((item, index) => <Feature heading = {item.heading} sub={item.sub} urlOne={item.urlOne} index={index + 1} urlTwo={item.urlTwo}/>)
            }
        </div>
    )
}
export default Body;