export const MovieBackdrop = ({movie}) => {
    return (
        <div className="w-[285px]">
            <img src={movie.src}  />
        </div>
    )
}