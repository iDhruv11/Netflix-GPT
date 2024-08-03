import { useSelector } from "react-redux";

const Contents = () => {
    const user = useSelector(state => state.user)
    console.log(user.email);
    console.log(user.displayName);
    console.log(user.photoURL);
    
    return (
        <div>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
export default Contents;