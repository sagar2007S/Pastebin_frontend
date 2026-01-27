
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste , getPasteById } from '../features/pasteSlice';
import { toast } from 'react-toastify';
import {getAllPastes} from '../features/pasteSlice.js'
import { useNavigate } from 'react-router-dom';
const ViewPaste = () => {


  const {id}=useParams();
  console.log(`This is the id`,id)

 const dispatch = useDispatch();
 const navigation= useNavigate();
   useEffect(() => {
    dispatch(getPasteById(id))
   }, [])

  const paste= useSelector((state)=> state.paste.currentPaste)
  console.log(`This is Paste from ViewPaste Page ${paste?._id}`)


  // allPastes.map((paste)=>{
  //   console.log("This is the paste id from view paste page",paste?.id)
  // })

  // const paste =allPastes.filter((p)=>p.id==id);
//  const paste = allPastes.find((p) => String(p._id) === String(id));

  const handleCopy =()=>{
navigator.clipboard.writeText(paste?.value)
toast.success("Copied to Clipboard")
  }

  const handleBack =()=>{
navigation('/pastes/')
  }
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex flex-col items-center gap-6">
      
      {/* Input for Title */}
      <input
        type="text"
        value={paste?.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your text"
        className="w-full max-w-xl border-b-2 border-gray-400 focus:outline-none text-white focus:border-purple-700 px-4 py-2 text-lg bg-transparent"
        disabled
     />

      {/* Glassmorphic Button */}
      {/* <button
        className="bg-[#98cef11e] backdrop-blur-md text-black px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#2b9ce8f2] transition duration-300"  onClick={createPaste}
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button> */}

      {/* Textarea for Content */}
      <textarea
        value={paste?.value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter content"
        rows={15}
        className="w-full max-w-xl p-4 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-white"
        disabled   
         />
      <div className='inline '>
         <button onClick={handleCopy} className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-cyan-500 hover:text-black  transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5">Copy</button>
          <button onClick={handleBack} className=" ml-2 bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-red-600 transition-all duration-300 
         hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 hover:text-black ">Back</button>
          </div>
         
    </div>
  )
}

export default ViewPaste
