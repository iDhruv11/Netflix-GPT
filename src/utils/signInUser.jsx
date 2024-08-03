import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig";

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

export {signInUser}