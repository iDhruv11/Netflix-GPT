import { useEffect, useState } from "react"

export const Logo = ( { width = "100px"} ) => {
    return (
        <svg width={width} fill="#e50914" viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
    )
}
export const Search = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 32 32"><path fill="white" d="M13.5 3C7.701 3 3 7.701 3 13.5S7.701 24 13.5 24c2.45 0 4.703-.839 6.489-2.244l6.878 6.878a1.25 1.25 0 1 0 1.768-1.768l-6.879-6.878A10.46 10.46 0 0 0 24 13.5C24 7.701 19.299 3 13.5 3m-8 10.5a8 8 0 1 1 16 0a8 8 0 0 1-16 0"/></svg>
    )
}
export const Bell = () =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h2m0 0h10M7 17v-6a5 5 0 0 1 10 0v6m0 0h2M11.5 5.5V4a.5.5 0 0 1 1 0v1.5M13 20a1 1 0 1 1-2 0z" /></svg>
    )
}
export const Arrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="white" d="m4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427" /></svg>
    )
}
export const Pencil = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 256 256"><path fill="white" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z" /></svg>
    )
}
export const Squareface = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" /><ellipse cx="15" cy="10.5" fill="white" rx="1" ry="1.5" /><ellipse cx="9" cy="10.5" fill="white" rx="1" ry="1.5" /><path stroke="white" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" /></g></svg>
    )
}
export const Person = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-width="1.5"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="7" r="3" /></g></svg>
    )
}
export const Question = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="white" d="M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4" /></svg>
    )
}
export const Play = ({width, height}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 256 256"><path fill="black" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"/></svg>
    )
}
export const Info = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="white" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"/></svg>
    )
}
export const Add = ({width}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height="7em" viewBox="0 0 512 512"><path fill="#808080" d="M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12z"/></svg>
    )
}
export const Cross = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"/></svg>
    )
}
export const Minus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M19 12.998H5v-2h14z"/></svg>
    )
}
export const Select = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="white" stroke-linecap="square" d="m1 7l4.5 4.5L14 3"/></svg>
    )
}

export const ErrorIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" role="img" data-icon="CircleXSmall" aria-hidden="true" class="default-ltr-cache-0 e1vkmu651"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z" fill="currentColor"></path></svg>
    )
}
export const Edit = ({width="1.5em", height="1.5em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8zm6.78 1a.7.7 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38z"/></svg>
    )
}
export const LeftArrow = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M3.283 10.94a1.5 1.5 0 0 0 0 2.12l5.656 5.658a1.5 1.5 0 1 0 2.122-2.122L7.965 13.5H19.5a1.5 1.5 0 0 0 0-3H7.965l3.096-3.096a1.5 1.5 0 1 0-2.122-2.121z"/></g></svg>
    )
}
export const Nlogo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 256 256"><defs><path id="logosNetflixIcon0" fill="#b1060f" stroke="#000" d="m141.676 41.275l-.067 38.361l-.068 38.361l-3.156-8.905l-.006-.017l-4.078 85.402c4.01 11.324 6.158 17.369 6.182 17.393c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.094-.084.145-39.143.114-86.797l-.058-86.644zm-61.538-.115v86.732c0 47.703.047 86.779.104 86.836s3.011-.222 6.565-.62c3.553-.398 8.465-.893 10.914-1.1c3.756-.317 14.97-1.038 16.268-1.046c.378-.002.402-1.95.457-36.735l.058-36.734l2.713 7.677l.96 2.713l4.077-85.381l-1.401-3.96a32066 32066 0 0 0-6.283-17.754l-.225-.628z"/><path id="logosNetflixIcon1" fill="url(#logosNetflixIcon3)" d="M80.138 41.16v48.685l34.296 90.976c.004-2.085.008-3.211.012-5.594l.058-36.734l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.821.226 3.388.342 3.483.257c.064-.058.107-19.21.118-46.227l-34.136-98.14l-.016 9.287l-.068 38.361l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55a32066 32066 0 0 0-6.283-17.754l-.225-.628z"/><path id="logosNetflixIcon2" fill="#e50914" d="m80.139 41.16l34.365 97.377v-.044l2.713 7.677c15.104 42.738 23.218 65.652 23.266 65.7c.031.032 2.317.17 5.078.307c8.366.415 18.734 1.304 26.599 2.282c1.812.225 3.37.34 3.48.258l-34.1-96.737v.017l-3.156-8.905c-3.084-8.701-5.143-14.52-17.532-49.55c-3.332-9.42-6.159-17.408-6.283-17.754l-.225-.628z"/><radialGradient id="logosNetflixIcon3" cx="48.34%" cy="49.419%" r="70.438%" fx="48.34%" fy="49.419%" gradientTransform="matrix(1 0 0 .55088 0 .222)"><stop offset="0%"/><stop offset="100%" stop-opacity="0"/></radialGradient></defs><path d="M0 0h255.904v255.904H0z"/><use href="#logosNetflixIcon0" stroke-width="2.96"/><use href="#logosNetflixIcon1"/><use href="#logosNetflixIcon2"/><use href="#logosNetflixIcon0" stroke-width="2.96"/><use href="#logosNetflixIcon1"/><use href="#logosNetflixIcon2"/></svg>
    )
}
export const Greater = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m15.632 12l-4.748-8.968l-1.768.936L13.368 12l-4.252 8.032l1.768.936z"/></svg>
    )
}
export const Smaller = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m8.369 12l4.747-8.968l1.768.936L10.632 12l4.252 8.032l-1.768.936z"/></svg>
    )
}

export const Tick = ({color, width="3em", height="3em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 15 15"><path fill="none" stroke={color} stroke-linecap="square" d="m1 7l4.5 4.5L14 3"/></svg>
    )
}
export const TickForBtn = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="black" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/></svg>
    )
}
export const TickForCheckbox = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#a3a3a3" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z"/></svg>
    )
}
export const Replay = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 1024 1024"><path fill="white" d="M784.512 230.272v-50.56a32 2 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384a384 384 0 0 1-384-384a384 384 0 0 1 643.712-282.88"/></svg>
    )
}
export const Unmute = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="white" d="M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 0 1 .808-.13ZM10.5 5.445l-4.245 3.86a.75.75 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86Zm8.218-1.223a.75.75 0 0 1 1.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 0 1-1.06-1.06a9.5 9.5 0 0 0 0-13.436a.75.75 0 0 1 0-1.06"/><path fill="white" d="M16.243 7.757a.75.75 0 1 0-1.061 1.061a4.5 4.5 0 0 1 0 6.364a.75.75 0 0 0 1.06 1.06a6 6 0 0 0 0-8.485Z"/></svg>
    )
}
export const Mute = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><path fill="white" d="M12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805A.75.75 0 0 1 12 3.75M6.255 9.305a.75.75 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3c.187 0 .367.069.505.195l4.245 3.86V5.445ZM16.28 8.22a.75.75 0 1 0-1.06 1.06L17.94 12l-2.72 2.72a.75.75 0 1 0 1.06 1.06L19 13.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L20.06 12l2.72-2.72a.75.75 0 0 0-1.06-1.06L19 10.94z"/></svg>
    )
}

export const FilmSlate = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="white" d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07L164.57 71l-28.13-16.28ZM77.55 70.27l28.12 16.24l-59.6 15.73l-6-22.08Z"/></svg>
    )
}

export const Explore = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#1da8aa" d="M10.02 6L8.61 7.41L13.19 12l-4.58 4.59L10.02 18l6-6z"/></svg>
    )
}

export const Plus = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 1024 1024"><path fill="white" stroke="white" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8"/><path fill="white" d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"/></svg>
    )
}
export const Like = ({width="1.4em", height="1.4em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32"><path fill="white" stroke="white" d="M26 12h-6V6a3.003 3.003 0 0 0-3-3h-2.133a2.01 2.01 0 0 0-1.98 1.717l-.845 5.917L8.465 16H2v14h21a7.01 7.01 0 0 0 7-7v-7a4.005 4.005 0 0 0-4-4M8 28H4V18h4Zm20-5a5.006 5.006 0 0 1-5 5H10V17.303l3.958-5.937l.91-6.366H17a1 1 0 0 1 1 1v8h8a2.003 2.003 0 0 1 2 2Z"/></svg>
    )
}
export const LikeFilled = ({ width="1.6em", height="1.6em" }) => {

    const [bounce, setBounce] = useState(false)

    useEffect( () => {

        setBounce(true)
        setTimeout(() => {
            setBounce(false)
        }, 300)

    }, [])

    return (
        <svg className={`${ (bounce) ? `-translate-y-3` : `translate-y-0` } transition-transform duration-150 ease-linear`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32"><path fill="white" d="M2 16h5v14H2zm21 14H9V15.197l3.042-4.563l.845-5.917A2.01 2.01 0 0 1 14.868 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.01 7.01 0 0 1-7 7"/></svg>
    
    )

}
export const Dislike = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.55em" height="1.55em" viewBox="0 0 32 32"><path fill="white" stroke="white" d="M30 16V9a7.01 7.01 0 0 0-7-7H2v14h6.465l3.577 5.366l.846 5.917A2.01 2.01 0 0 0 14.868 29H17a3.003 3.003 0 0 0 3-3v-6h6a4.005 4.005 0 0 0 4-4M8 14H4V4h4Zm20 2a2.003 2.003 0 0 1-2 2h-8v8a1 1 0 0 1-1 1h-2.133l-.91-6.366L10 14.697V4h13a5.006 5.006 0 0 1 5 5Z"/></svg>
    )
}
export const DislikeFilled = ({ width="1.55em", height="1.55em"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32"><path fill="white" d="M2 2h5v14H2zm21 0H9v14.803l3.042 4.563l.845 5.917A2.01 2.01 0 0 0 14.868 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.01 7.01 0 0 0-7-7"/></svg>
    )
}
export const DoubleLike = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 32 32"><path fill="white" stroke="white" d="M20.8 14H15V9.6C15 7.5 13.8 6 12 6h-1C9.5 6 9.2 7.5 9.1 8.4c0 .1 0 .3-.1.5l-.6 4.3l-2 3.9H2v13h16.3c3.7 0 6.7-3 6.7-6.7v-5.1c0-2.4-1.9-4.3-4.2-4.3M4 28v-9h2v9zm19-4.7c0 2.6-2.1 4.7-4.7 4.7H8v-9.8l2.4-4.5l.6-4.5c0-.2.1-.4.1-.5c0-.2.1-.5.1-.6h.8c1 0 1 1.4 1 1.6V16h7.8c1.2 0 2.2 1 2.2 2.2zM27 9h-6V4.4c0-2-1.2-3.4-3-3.4h-.8c-1.8 0-2 1.9-2.1 2.6L14.9 6h2l.1-1l.1-1.2c0-.5.1-.7.1-.8h.8c.9 0 1 .9 1 1.4V11h8c1.2 0 2 .8 2 2v5c0 1.7-.9 3.4-2.1 4.2l1.1 1.7c1.8-1.2 2.9-3.5 2.9-5.9v-5c.1-2.4-1.5-4-3.9-4"/></svg>
    )
}
export const DoubleLikeFilled = () => {

    const [bounce, setBounce] = useState(false)

    useEffect( () => {
        
        setBounce(true)
        setTimeout(() => {
            setBounce(false)
        }, 300)

    }, [])

    return (
        <svg className={`${ (bounce) ? `-translate-y-3` : `translate-y-0` } transition-transform duration-150 ease-linear`} xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 32 32"><path fill="white" d="M20.8 14H15V9.6C15 7.5 13.8 6 12 6h-1C9.5 6 9.2 7.5 9.1 8.4c0 .1 0 .3-.1.5l-.6 4.3L7 16v14h11.3c3.7 0 6.7-3 6.7-6.7v-5.1c0-2.3-1.9-4.2-4.2-4.2M2 30V17h3v13zM26.8 9H21V4.6C21 2.5 19.8 1 18 1h-1c-1.5 0-1.8 1.5-1.9 2.3c0 .2 0 .3-.1.5l-.1 1.1c1.3 1 2.1 2.6 2.1 4.6V12h3.8c3.4 0 6.2 2.8 6.2 6.2v5.1c0 .4 0 .8-.1 1.1c2.4-1 4.1-3.4 4.1-6.1v-5.1c0-2.3-1.9-4.2-4.2-4.2"/></svg>
    )
}
export const ArrowDown = ({ fill="none", stroke="white", width="2.2em", height="2.2em" }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={fill} stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5"/></svg>
    )
}