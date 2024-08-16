// src/components/LoginForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { FaF } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const navgate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'
  //(from)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const {signInWithFacebook,signInWithGoogle,loading,setLoading,signIn} = useAuth()

  const onSubmit = async(data) => {
    //(data);

    try {
      //login user
      await signIn(data.email,data.password)
      toast.success("login successful")
      navgate(from)
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  };

  //handle social login
  const handleSocialLogIn = async(social) =>{

    if(social === "google"){
    await signInWithGoogle()
    .then(res => {
      toast.success("Google Login Successful")
      navgate(from)
    })
    .catch(error =>{
      toast.error(error.message)
      setLoading(false)
    })
    }else{
      await signInWithFacebook()
      .then(res => {
        toast.success("Facebook Login Successful")
        navgate(from)
      })
      .catch(error =>{
        toast.error(error.message)
        setLoading(false)
      })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700">Login</h2>

        <div
          className="flex justify-center space-x-4 [&>*]:w-full"
        >
          <button onClick={()=>handleSocialLogIn("google")} className="px-4 py-2 font-medium text-white bg-sky-500 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 ">
            <FaGoogle className="text-xl mx-auto" />
          </button>
          <button onClick={()=>handleSocialLogIn("facebook")} className=" px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800">
            <FaFacebook className="text-xl mx-auto" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-left text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="write your email"
              {...register("email", { required: true })}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-left">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="write password"
                {...register("password", { required: true, minLength: 6 })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-sm font-medium text-blue-600"
              >
                {showPassword ? (
                  <FaRegEye className="text-lg" />
                ) : (
                  <FaRegEyeSlash className="text-lg" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center"
            >
             {
              loading ? <TbFidgetSpinner className="animate-spin text-center"/> : "Sign in"
             }  
            </button>
          </div>

          {/* signUp and forget link */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="text-sm">
              <Link to="/signup"
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;