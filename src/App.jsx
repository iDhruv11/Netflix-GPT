
import Home from './components/Home'
import SignIn from "./components/SignIn";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { mailContext } from './utils/MailContext';
import { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Store } from './utils/Store';
import Profiles from './components/Profiles';
import { EditProfile } from './components/EditProfile';
function App() {
  const [mail, setMail] = useState(null);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/SignIn',
      element: <SignIn />,
      caseSensitive: true
    },
    {
      path: '/Profiles',
      element: <Profiles />,
      caseSensitive: true,
    },
    {
      path: '/Profiles/:profileIndex',
      element: <EditProfile />,
      caseSensitive: true
    } 
  ])
  
  return (
    <Provider store={Store}>
      <mailContext.Provider value={[mail, setMail]}>
        <RouterProvider router={router} />
      </mailContext.Provider>
    </Provider>

  )
}
export default App;   

