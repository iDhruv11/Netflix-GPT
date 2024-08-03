import Hero from './Hero'
import Body from './Body'
import Faq from './Faq'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebaseConfig'
import { addUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
const Home = () => {
    const dispatcher = useDispatch();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('inside authstatechange');            
            const { email, displayName, photoURL } = user;
            console.log(email, displayName, photoURL);      
            dispatcher(addUser({ email, displayName, photoURL }));
        }
        else {
            console.log('User Signed out');
        }
    })
    return (
        <div>
            <Hero />
            <Body />
            <Faq />
            <Footer />
        </div>
    )
}

export default Home;