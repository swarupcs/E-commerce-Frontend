import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import SummaryApi from './common';

function App() {

  const fetchUserDetails = async() => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method : SummaryApi.current_user.method,
      credentials: 'include'  //if we dont use this line, cookie will not send to the browser
    })

    const dataApi = await dataResponse.json();
    console.log("dataApi", dataApi);
  }

  useEffect(() => {
    // user Details
    fetchUserDetails()

  }, [])
  return (
    <>
    <ToastContainer />
      <Header/>
      <main className='min-h-[calc(100vh-120px)] pt-16'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default App;


