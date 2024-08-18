"use client"

import Link from "next/link";
import { AuthBanner } from "../_components/auth.banner"
import { SignupForm } from "./_components/SignupForm/SignupForm";

const Signup = () =>{
    return (
        <section className="flex flex-col md:flex-row w-full h-screen">
            <div className="w-full md:w-1/4 h-1/2 md:h-screen ">
                    <AuthBanner/>
            </div>
            <div className="bg-light-green w-full md:w-3/4 md:h-screen 
            flex justify-center items-center flex-col p-8 md:p-0">
                <SignupForm />
                <div>
                    <span className='text-gray-400'>Alreay have an account? </span><Link href="/login" className='font-bold
                    text-deep-olive underline'>Login</Link>
                </div>
            </div>
        </section>
    )
}

export default Signup;