import React from "react";
import { Copyright } from "@material-ui/icons";

export default function Footer(){
    return(
    <section id="footer">
        <div className="container px-5 py-10 mx-auto">
            <div>
            <p className="flex justify-center flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                Made with React
            </p>
                <hr className="flex justify-center flex-wrap lg:w-4/5 sm:mx-auto pt-2 pb-2"/>
            <p className="flex justify-center flex-wrap sm:mx-auto pb-6">
                <Copyright className="text-white-600 w-20 h-20 flex-shrink-0 mr-4" /> Mansi Vakharia
            </p>
            </div>
        </div>
    </section>
    );
}