import { useNavigate } from "react-router-dom";

function PastebinHome() {

  const navigation = useNavigate();
  const handleRegister =()=>{
   navigation("/Signup")
  }

const handleloginButton =()=>{
    navigation("/Login")
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo/Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Paste<span className="text-purple-400">Bin</span>
          </h1>
          <p className="text-xl text-gray-300">
            Store and share your code snippets with ease
          </p>
        </div>

        {/* Feature highlights */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast & Simple</h3>
            <p className="text-gray-300 text-sm">Paste and share in seconds</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-300 text-sm">Your data is encrypted</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <div className="text-4xl mb-3">💾</div>
            <h3 className="text-lg font-semibold text-white mb-2">Reliable</h3>
            <p className="text-gray-300 text-sm">Access anytime, anywhere</p>
          </div>
        </div> */}

        {/* Auth Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center px-4">
          <button
            onClick={() => handleloginButton()}
            className="w-full sm:w-48 h-48 sm:h-48 max-w-xs bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 active:from-purple-700 active:to-purple-900 text-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 active:scale-95 flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <svg 
              className="w-16 h-16 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
              />
            </svg>
            <span className="text-2xl font-bold relative z-10 group-hover:tracking-wider transition-all duration-300">Login</span>
          </button>

          <button
            onClick={()=> handleRegister()}
            className="w-full sm:w-48 h-48 sm:h-48 max-w-xs bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 active:from-blue-700 active:to-blue-900 text-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50 active:scale-95 flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <svg 
              className="w-16 h-16 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" 
              />
            </svg>
            <span className="text-2xl font-bold relative z-10 group-hover:tracking-wider transition-all duration-300">Register</span>
          </button>
        </div>

        {/* Footer */}
        <p className="mt-12 text-gray-400 text-sm">
          Start sharing your code snippets today
        </p>
      </div>
    </div>
  );
}

export default PastebinHome;