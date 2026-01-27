import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {loginUser} from "../features/userSlice.js"

export default function LoginPage() {
 
   const {
     register,
     handleSubmit,
     watch,
     reset,
    formState: { errors,isSubmitting },
  } = useForm();

 const navigate=useNavigate();
 const dispatch = useDispatch();


  const onSubmit =  async (data)=>{
    try {
  const email=data.email;
  const password=data.password;
  const result=await dispatch(loginUser({email, password})).unwrap();
  //console.log(result)
  const accessToken=  result.accessToken;
  const refreshToken= result.refreshToken;
  
  const userId=result.loggedInUser?._id
  //console.log(`This is the Access Token ${accessToken}`)
  //onsole.log(result.accessToken)
  //console.log(`This is User: ${user}`)
  //console.log(`This is the refersh token${refreshToken}`)
  localStorage.setItem('accessToken',accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  
  toast.success("Logged In Succesfully!")
  navigate(`/createPaste/${userId}`);
  
  
  reset();
  // return result;
} catch (error) {
      console.error(`Error Occured ${error}`)
      toast.error(error.response?.data?.message || "Login failed")
    }
  }


 const prevAccessToken = useSelector((state) => state.user.accessToken);

 const prevRefreshToken= useSelector((state)=> state.user.refreshToken);

//  console.log(`This is a Access Token ${prevAccessToken}`)
//  console.log(`This is a Refresh Token ${prevRefreshToken}`)


useEffect(() => {
  if (prevAccessToken && prevRefreshToken) {
    console.log("Access:", prevAccessToken);
    console.log("Refresh:", prevRefreshToken);
  }
}, [prevAccessToken, prevRefreshToken]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-5">
      <div className="backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-purple-500 border-opacity-30 transform transition-all duration-300 hover:shadow-purple-500/50" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Paste<span className="text-purple-400">Bin</span>
          </h1>
          <p className="text-gray-300 text-sm">
            Please login to your account
          </p>
        </div>

        {/* Login Inputs */}
         <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-5">
            <label className="block text-gray-200 text-sm font-semibold mb-2" >
              Email Address
            </label>
            <input
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.2)'}}
            placeholder="Enter your email"
            {...register("email", {
        required:{value:true, message:"Email is Required"}, 
        minLength:{value:3, message:"Valid Email is Required"}
      }
      
    )} />
    {errors.email&& <h4 className='text-red-400 text-xs mt-1 ml-1'>{errors.email.message}</h4>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Password
            </label>
            <input
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.2)'}}
            placeholder="Enter your password"
            type="password"
              {...register("password", { required: {value:true, message:"Password is Required"} })}
            />
             {errors.password && <h4 className='text-red-400 text-xs mt-1 ml-1'>{errors.password.message}</h4>}
          </div>

          <div className="text-right mb-6">
            <a
              href="#"
              className="text-purple-400 text-sm hover:text-purple-300 transition-colors duration-200"
            >
              Forgot Password?
            </a>
          </div>

          <input 
            type="submit" 
            value={isSubmitting ? "Logging In..." : "Login"}
            disabled={isSubmitting}
            className='w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-semibold hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50 cursor-pointer' 
          />
        </div>
</form>
        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600 border-opacity-50"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 text-gray-400" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>OR</span>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            Don't have an account?{' '}
            <Link to='/signup' className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-200">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}