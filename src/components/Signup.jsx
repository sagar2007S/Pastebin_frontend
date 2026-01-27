



// // import axios from "axios";
// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";

// // function Signup() {
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     reset,
// //     formState: { errors, isSubmitting },
// //   } = useForm();
// //   const password = watch("password");
// //   const navigation = useNavigate();

// //   const onSubmit = async (data) => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:4000/api/v2/users/register",
// //         {
// //           username: data.username,
// //           email: data.email,
// //           password: data.password,
// //         }
// //       );
// //       toast.success("Signed Up Successfully, Please LogIn");
// //       navigation("/login");
// //       reset();
// //     } catch (error) {
// //       console.log("Error Occurred", error);
// //       toast.error(error?.response?.data?.message || "Sign Up failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex justify-center items-center p-4">
// //       <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-3xl">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
// //             PasteBin
// //           </h1>
// //           <p className="text-gray-500 text-sm">Create your account to get started</p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //           {/* Username Field */}
// //           <div>
// //             <label className="block text-gray-700 text-sm font-semibold mb-2">
// //               Username
// //             </label>
// //             <input
// //               type="text"
// //               {...register("username", {
// //                 required: { value: true, message: "Username is Required" },
// //                 minLength: {
// //                   value: 4,
// //                   message: "The User Name must be more than 3 characters",
// //                 },
// //               })}
// //               className="w-full h-12 border-2 border-gray-300 rounded-lg px-4 text-gray-700 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
// //               placeholder="Enter your username"
// //             />
// //             {errors.username && (
// //               <p className="text-red-500 text-xs mt-1 ml-1">
// //                 {errors.username.message}
// //               </p>
// //             )}
// //           </div>

// //           {/* Email Field */}
// //           <div>
// //             <label className="block text-gray-700 text-sm font-semibold mb-2">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               {...register("email", {
// //                 required: { value: true, message: "Email Required" },
// //                 minLength: { value: 3, message: "Valid Email is Required" },
// //                 pattern: {
// //                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// //                   message: "Please enter Correct email address",
// //                 },
// //               })}
// //               className="w-full h-12 border-2 border-gray-300 rounded-lg px-4 text-gray-700 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
// //               placeholder="Enter your email"
// //             />
// //             {errors.email && (
// //               <p className="text-red-500 text-xs mt-1 ml-1">
// //                 {errors.email.message}
// //               </p>
// //             )}
// //           </div>

// //           {/* Password Field */}
// //           <div>
// //             <label className="block text-gray-700 text-sm font-semibold mb-2">
// //               Password
// //             </label>
// //             <input
// //               type="password"
// //               {...register("password", {
// //                 required: { value: true, message: "Password Is Required" },
// //                 minLength: {
// //                   value: 6,
// //                   message: "Password is Must be of 6 Characters",
// //                 },
// //                 maxLength: {
// //                   value: 12,
// //                   message: "Password Should Not be More Than 12 Characters",
// //                 },
// //               })}
// //               className="w-full h-12 border-2 border-gray-300 rounded-lg px-4 text-gray-700 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
// //               placeholder="Enter your password"
// //             />
// //             {errors.password && (
// //               <p className="text-red-500 text-xs mt-1 ml-1">
// //                 {errors.password.message}
// //               </p>
// //             )}
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             disabled={isSubmitting}
// //             className="w-full h-12 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
// //           >
// //             {isSubmitting ? "Signing Up..." : "Sign Up"}
// //           </button>
// //         </form>

// //         {/* Footer */}
// //         <div className="mt-6 text-center">
// //           <p className="text-gray-600 text-sm">
// //             Already have an account?{" "}
// //             <span
// //               onClick={() => navigation("/login")}
// //               className="text-violet-600 font-semibold hover:text-violet-700 cursor-pointer transition-colors"
// //             >
// //               Log In
// //             </span>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;



// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm();
//   const password = watch("password");
//   const navigation = useNavigate();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/v2/users/register",
//         {
//           username: data.username,
//           email: data.email,
//           password: data.password,
//         }
//       );
//       toast.success("Signed Up Successfully, Please LogIn");
//       navigation("/login");
//       reset();
//     } catch (error) {
//       console.log("Error Occurred", error);
//       toast.error(error?.response?.data?.message || "Sign Up failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4">
//       <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white border-opacity-20 transform transition-all duration-300 hover:shadow-purple-500/30">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-white mb-2">
//             Paste<span className="text-purple-400">Bin</span>
//           </h1>
//           <p className="text-gray-300 text-sm">Create your account to get started</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Username Field */}
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               {...register("username", {
//                 required: { value: true, message: "Username is Required" },
//                 minLength: {
//                   value: 4,
//                   message: "The User Name must be more than 3 characters",
//                 },
//               })}
//               className="w-full h-12 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 backdrop-blur-sm"
//               placeholder="Enter your username"
//             />
//             {errors.username && (
//               <p className="text-red-400 text-xs mt-1 ml-1">
//                 {errors.username.message}
//               </p>
//             )}
//           </div>

//           {/* Email Field */}
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: { value: true, message: "Email Required" },
//                 minLength: { value: 3, message: "Valid Email is Required" },
//                 pattern: {
//                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                   message: "Please enter Correct email address",
//                 },
//               })}
//               className="w-full h-12 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 backdrop-blur-sm"
//               placeholder="Enter your email"
//             />
//             {errors.email && (
//               <p className="text-red-400 text-xs mt-1 ml-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Password Field */}
//           <div>
//             <label className="block text-gray-200 text-sm font-semibold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               {...register("password", {
//                 required: { value: true, message: "Password Is Required" },
//                 minLength: {
//                   value: 6,
//                   message: "Password is Must be of 6 Characters",
//                 },
//                 maxLength: {
//                   value: 12,
//                   message: "Password Should Not be More Than 12 Characters",
//                 },
//               })}
//               className="w-full h-12 bg-white bg-opacity-10 border-2 border-white border-opacity-20 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 backdrop-blur-sm"
//               placeholder="Enter your password"
//             />
//             {errors.password && (
//               <p className="text-red-400 text-xs mt-1 ml-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
//           >
//             {isSubmitting ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 text-center">
//           <p className="text-gray-300 text-sm">
//             Already have an account?{" "}
//             <span
//               onClick={() => navigation("/login")}
//               className="text-purple-400 font-semibold hover:text-purple-300 cursor-pointer transition-colors duration-200"
//             >
//               Log In
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");
  const navigation = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v2/users/register",
        {
          username: data.username,
          email: data.email,
          password: data.password,
        }
      );
      toast.success("Signed Up Successfully, Please LogIn");
      navigation("/login");
      reset();
    } catch (error) {
      console.log("Error Occurred", error);
      toast.error(error?.response?.data?.message || "Sign Up failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4">
      <div className="backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-500 border-opacity-30 transform transition-all duration-300 hover:shadow-purple-500/50" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}}>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">
            Paste<span className="text-purple-400">Bin</span>
          </h1>
          <p className="text-gray-300 text-sm">Create your account to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              {...register("username", {
                required: { value: true, message: "Username is Required" },
                minLength: {
                  value: 4,
                  message: "The User Name must be more than 3 characters",
                },
              })}
              className="w-full h-12 rounded-lg px-4 text-black placeholder-gray-400 focus:outline-none border-2 border-white border-opacity-20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 bg-white/10"
              
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "Email Required" },
                minLength: { value: 3, message: "Valid Email is Required" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter Correct email address",
                },
              })}
              className="w-full h-12 bg-white/10 bg-opacity-10 border-2 border-white border-opacity-20 rounded-lg px-4 text-black placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 backdrop-blur-sm "
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-200 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Password Is Required" },
                minLength: {
                  value: 6,
                  message: "Password is Must be of 6 Characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password Should Not be More Than 12 Characters",
                },
              })}
              className="w-full h-12 bg-white/10 bg-opacity-10 border-2 border-white border-opacity-20 rounded-lg px-4 text-black  placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-200 backdrop-blur-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transform transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/50"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigation("/login")}
              className="text-purple-400 font-semibold hover:text-purple-300 cursor-pointer transition-colors duration-200"
            >
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;