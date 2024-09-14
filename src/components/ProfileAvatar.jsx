
const ProfileAvatar = ( { name, photoURL } ) => {
    return (

        <div className="flex flex-col justify-center items-center gap-4 group w-[25%]">

            <img className="w-full rounded-md group-hover:ring-4 group-hover:ring-white group-hover:cursor-pointer" src={photoURL} />
            <p className="text-center text-[#808080] font-medium tracking-wide text-2xl group-hover:text-white group-hover:cursor-pointer">{name}</p>

        </div>
    )
}
export {ProfileAvatar};