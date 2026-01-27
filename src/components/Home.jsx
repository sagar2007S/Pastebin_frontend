import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../features/pasteSlice';
import {createNewPaste, updatePaste} from '../features/pasteSlice.js'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()

  const allPastes=useSelector((state)=>state.paste.pastes)
  console.log(allPastes);

  //const pasteId = searchParams.get("pasteId");
  const {pasteId} =useParams();
 // console.log(pasteId)

 
     
const navigation =useNavigate();




//   useEffect(() => {
// // if(pasteId){
// //   const paste= allPastes.find((p)=>p._id=== pasteId)
// //   console.log(paste)
// //   setTitle(paste.title);
// // setValue(paste.value)
// // }

//   //
// }, [pasteId])

useEffect(() => {
  if (pasteId && allPastes.length > 0) {
    const paste = allPastes.find((p) => p._id === pasteId);

    if (paste) {
      setTitle(paste.title);
      setValue(paste.value);
    }
  }
}, [pasteId, allPastes]);




const createPaste = () =>{

if([title,value].some(feild => feild?.trim()==="")){
toast.error("Please Enter the Title and the Content");
console.error("error Occurred ")
}else{

 const paste= {
   title:title,
   value:value,
  }
if(pasteId){
   // update 
   dispatch(updatePaste({pasteId, paste}))
   setTitle('');
setValue('');
navigation('/pastes/')
  }else{
// create 
dispatch(createNewPaste(paste))
toast.success("Paste Created Successfully")
  }
setTitle('')
setValue('')
setSearchParams({})
}
}




  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex flex-col items-center gap-6">
      
      {/* Input for Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your Title"
        className="w-full max-w-xl border-b-2 border-gray-400 focus:outline-none focus:border-purple-500 px-4 py-2 text-lg bg-transparent text-white"
      />

      {/* Glassmorphic Button */}
      <button
        className="bg-[#98cef11e] backdrop-blur-md text-white px-6 py-2 rounded-xl shadow-lg border border-white/20 hover:bg-[#992be8f2] transition duration-300"  onClick={()=> createPaste()}
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button>

      {/* Textarea for Content */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your Content "
        rows={15}
        className="w-full max-w-xl p-4 border text-white border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
};

export default Home;
