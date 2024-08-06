import { useSelector } from "react-redux";

const Contents = () => {
    const user = useSelector(state => state.user)
    
    return (
        <div>
            <ul>
                <li>{user.email}</li>
                <li>{user.displayName}</li>
                <li>{user.photoURL}</li>
            </ul>
        </div>
    )
}
export default Contents;