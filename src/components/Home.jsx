import Hero from './Hero'
import Body from './Body'
import Faq from './Faq'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebaseConfig'
import { addUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProfile } from '../utils/profileSlice'


const Home = () => {
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        // just wasted more than an hour just because this listener below was not placed in useEffect, so always wrap your event listener in an useEffect.
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('inside authstatechange');
                const { email, displayName, photoURL, emailVerified } = user;
                console.log(email, displayName, photoURL, emailVerified);
                dispatcher(addUser({ email, displayName, photoURL , emailVerified }));            
                dispatcher(addProfile({ type: 'primary', name: displayName, photoURL, photoID: 0 }))
                navigate('/Profiles');                
            }
            else {
                console.log('User Signed out');
            }
        })
      }, [])
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