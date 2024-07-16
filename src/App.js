import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from "react-redux";
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch();
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async() => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method : SummaryApi.current_user.method,
      credentials: 'include'  //if we dont use this line, cookie will not send to the browser
    })

    const dataApi = await dataResponse.json();

    if(dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

    // console.log("dataApi", dataApi);
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })

    const dataApi = await dataResponse.json()

    // console.log("dataAPi", dataApi);

    setCartProductCount(dataApi?.data?.count)
  }

  useEffect(() => {
    // user Details
    fetchUserDetails()
    // user details cart product
    fetchUserAddToCart()

  }, [])
  return (
    <>
    <Context.Provider value={{
      fetchUserDetails,  // user detail fetch
      cartProductCount, // current user add to cart product count,
      fetchUserAddToCart,
    }}>
    <ToastContainer />
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet/>
      </main>
      <Footer/>
      </Context.Provider>
    </>
  );
}

export default App;


