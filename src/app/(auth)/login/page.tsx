"use client"
import React , {useState} from "react";
import Image from "next/image";
import axios from "axios";
import Email from "../../../../public/email.svg";
import Password from "../../../../public/password.svg";
import Link from "next/link";
import { LoginProps } from "@/app/types";
import useSignup from '../../../_hooks/useSignup'
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const initialState: LoginProps = {
    email: "",
   
    password: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async () => {
    setIsLoading(true);
    try {
      
      const response = await axios.post(
        "https://voting-basic.onrender.com/api/login",values
        
      );
      console.log("API response:", response.data);
      if (response.data.success === true) {
        localStorage.setItem("access_token", response.data.message);
        // Data was posted successfully
        // Navigate to another page
        router.push("/dashboard");
       console.log("Success");
      } else {
        throw new Error("Error posting data to API");
      }
    } catch (error: any) {
      setError(error.response.data.msg);
      console.error("Error sending form data :", error);
    } finally {
      setIsLoading(false);
    }
    console.log(values);
  };

  const { values, handleChange, handleSubmit } = useSignup(
    initialState,
    handleSubmitForm
  );

  return (
    <div className="flex">
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen lg:w-2/5 lg:bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="flex justify-center items-center h-1/2">
          <h1 className="text-white text-3xl font-bold">WIBA TEAM 4</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen gap-6 mx-auto lg:w-3/5">
        <div className="p-4">
        <h4 className="text-center text-2xl font-bold">
          Hello there &#128075;
        </h4>
        <p className="text-center" >Welcome back</p>
        </div>
      
        <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={Email} alt={"div icon"} />
          </button>
        </div>
        <div className="flex justify-between p-4 lg:w-[440px] w-[320px]  rounded-sm bg-[#E3EBF3]">
          <input
            className="bg-inherit w-11/12 border-none outline-none"
            placeholder="Enter password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <button className="">
            <Image className="w-5" src={Password} alt={"div icon"} />
          </button>
        </div>
        <button
          className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-4 text-white rounded-full lg:w-[440px] w-[320px]  mt-10"
          type="submit"
          onClick={handleSubmit}
        >
          {isLoading ? "...Submitting" : "Login To Your Account"}
        </button>
        

        <Link href='/'>
          don&apos;t have an account?   <a className="text-blue-500">Signup</a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
