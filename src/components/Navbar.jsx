import React, { useLayoutEffect } from 'react'
import { data, NavLink, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';
import { useDispatch } from 'react-redux';
import {getCurrentUser} from '../features/userSlice.js'
import {getAllPastes} from '../features/pasteSlice.js'
import { useEffect } from 'react';
import {logoutUser} from '../features/userSlice.js'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Navbar = () => {

const dispatch=useDispatch();
const navigation = useNavigate();
const handleLogout = ()=>{
  try {
    console.log("Hello World")
  dispatch(logoutUser()).unwrap();
  toast.success("Logout Successfully");
  navigation("/")
  } 
  catch (error) {
    toast.error("Login Failed")
  }
//navigation("/")
}

  useEffect(() => {
  dispatch(getCurrentUser());
}, [dispatch]);

  const authUser = useSelector( state => state.user?.user);
  const user_id=useSelector(state => state.user.user?._id)
  const username=useSelector(state => state.user.user?.username)
  const {  loading } = useSelector(state => state.user);
  //console.log("this is user id 👍",user_id)
  //console.log("This is auth user",authUser)




  const userSlice = useSelector((state) => state.user);
//console.log("USER SLICE 👉", userSlice); //here the response is user:undefined
//console.log("Page reloaded:", performance.navigation.type === 1); // this is true 


   
if (loading) {
  return <>
 <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
            Paste<span className="text-purple-400">Bin</span>
          </h1>
        </div>

        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-purple-400 border-opacity-20 rounded-full"></div>
            {/* Spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-400 border-r-purple-400 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-gray-300 text-lg font-medium animate-pulse">
          Loading...
        </p>

        {/* Dots animation */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  </>; 
}
  return (
     <div className="flex flex-row items-center justify-between p-4 bg-gradient-to-br from-black via-slate-900 to-black  ">

     
      
      <h1 className="text-5xl font-bold text-white mb-2">
            Paste<span className="text-purple-400">Bin</span>
          </h1>

    <div className='flex space-x-1.5'>

       <NavLink to={`/createPaste/${user_id}`} className={({isActive})=> isActive ? "active": "text-white"}>Home</NavLink>
   <NavLink to={`/pastes/`} className={({isActive})=> isActive ? "active":"text-white"}>ListofPaste</NavLink>
   </div>

   <div className='inline-flex'>
      <h1 className="text-1xl font-bold text-white ">
            Hello<span className="text-purple-400  ml-2">{username}</span>
          </h1>

        {
          user_id && (
         
            <button onClick={handleLogout} className=" ml-2 bg-[#98cef11e] backdrop-blur-md text-white px-4 py-1 rounded-xl shadow-lg border border-white/20 hover:bg-red-600 transition-all duration-300 
            hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black ">Logout</button>
          
        
        )
        }
   </div>
  


{/* //*/}
   
    </div>
   
  )


}

export default Navbar





