export const DeleteBtn = ( { allowed }) => {
    return (
        <button
            className={`text-[#808080] border-2 border-neutral-700 font-semilbold text-2xl px-10 py-2 rounded-sm tracking-wide ${ allowed ? `hover:cursor-pointer hover:text-[#e2e2e2] hover:border-[#e2e2e2]` : `hover:cursor-not-allowed`}`}

        >Delete Profile</button>
    )
}