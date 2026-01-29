import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePaste } from "../features/pasteSlice.js";
import { toast } from "react-toastify";
import {getAllPastes} from "../features/pasteSlice.js"


const Pastes = () => {
 

  const [seacrhTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getAllPastes())
  }, [dispatch])

   const pastes = useSelector((state) => state.paste?.pastes || [])
    const loading = useSelector((state) => state.paste.loading);
  console.log(`This are all Pastes ${pastes}`)
  // pastes.map((paste)=>{
  //   console.log(paste.title)

  // })
  
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(seacrhTerm.toLowerCase())

  );
  

const handleDlete =(pasteId)=>{
  console.log("This Paste Id is comming from handleDelete",pasteId)
dispatch(deletePaste(pasteId));
toast.success("Paste Deleted Successfully");
}



const handleShare = async (paste)=>{
if (navigator.share) {
    try {
      await navigator.share({
        title: paste.title,
        text: paste.value,
        url: `${window.location.origin}/pastes/${paste._id}`, // optional
      });
      toast.success("Shared successfully!");
    } catch (err) {
      toast.error("Error sharing: " + err.message);
    }
  } else {
    toast.warning("Sharing not supported on this browser.");
  }
}



if(loading){
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
  </>
}
else{

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex flex-col items-center gap-6">
      <input
        type="search"
        placeholder="search here"
        value={seacrhTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-2xl min-w-[600px] mt-5 text-white"
      />
      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return( 
             <div className="border" key={paste?._id}>
             <h1 className="text-2xl font-bold text-white">
              {paste.title}
              </h1>
              <h3 className="text-1xl font-medium text-white">
                {paste.value}
              </h3>
              <div className="flex flex-row gap-6 place-content-evenly">
                <button>
                  <Link to={`/updatePaste/${paste?._id}`}  className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-amber-500 transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black "> Edit</Link>
                  </button>
             
                 <button>
                  <Link to={`/pastes/${paste?._id}`}  className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-green-500  transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black ">View</Link>
                  </button>
                  <button onClick={() =>handleDlete(paste?._id)}  className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20  hover:bg-red-500 transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black ">Delete</button>
                  
                   <button onClick={()=>  {navigator.clipboard.writeText(paste?.value), toast.success("copied")}} className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-cyan-400 
                    transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black " >Copy</button>
                    <button  className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-blue-500  transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black " onClick={(()=> handleShare(paste))}>Share</button>
              </div>
              <div className="text-white">
                {paste.createdAt}
              </div>
              </div>

            )
          })
          }
      </div>
    
    </div>
  );
  }
};

export default Pastes;
