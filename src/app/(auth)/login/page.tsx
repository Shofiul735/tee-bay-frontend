'use client'

import { Fragment } from "react";
import { AuthBanner } from "../_components/auth.banner";
import { LoginForm } from "./_components/LoginForm";
import { FooterSection } from "@/components/FooterSetion/footer-section";

const login =  () => {
    return (
        <Fragment>
            <div className="flex flex-col md:flex-row w-full h-screen">
                <div className="w-full md:w-1/4 h-1/2 md:h-screen ">
                    <AuthBanner/>
                </div>
                <div className="bg-light-green w-full md:w-3/4 h-1/2 md:h-screen flex justify-center items-center flex-col">
                    <LoginForm />
                </div>
            </div>
        </Fragment>
    );
}

export default login;