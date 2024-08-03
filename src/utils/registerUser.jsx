import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"

const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
        
}

export { registerUser };