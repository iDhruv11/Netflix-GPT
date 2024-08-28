
import Home from './components/Home'
import SignIn from "./components/SignIn";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { mailContext } from './utils/MailContext';
import { useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { userStore } from './utils/userStore';
import Contents from './components/Contents';
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
      path: '/Contents',
      element: <Contents />,
      caseSensitive: true
    }

  ])
  
  return (
    <Provider store ={userStore}>
      <mailContext.Provider value={[mail, setMail]}>
        <RouterProvider router={router} />
      </mailContext.Provider>
    </Provider>

  )
}
export default App;   

