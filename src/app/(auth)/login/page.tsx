import { AuthBanner } from "../_components/auth.banner";

const login =  () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-screen ">
                <AuthBanner/>
            </div>
            <div className="bg-light-green w-full md:w-1.2 h-1/2 md:h-screen">

            </div>
        </div>
    );
}

export default login;