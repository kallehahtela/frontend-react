import React from "react";
import ServiceButton from "../ui/ServiceButton";

const Services:React.FC = () => {
    return (
        // Main Container
        <div className="mt-10 mb-10 w-full flex flex-col justify-center items-center">

            {/* Inner Container */}
            <div className="relative w-2/3 flex flex-col  justify-center items-center p-5">

                {/* Text Styles */}
                <div className="absolute flex flex-col left-5 top-0">
                    <p className="ml-3 text-4xl font-semibold mb-1">
                        Services
                    </p>
                    <p className="ml-3 font-semibold">
                        We deliver just perfection
                    </p>
                </div>

                {/* Buttons Styles */}
                <div className="flex flex-col gap-4 mt-15">
                    <ServiceButton title="Frontend Development" />
                    <ServiceButton title="Web Application" />
                    <ServiceButton title="Mobile App Development" />
                    <ServiceButton title="Backend Development" />
                </div>
            </div>
        </div>
    );
};

export default Services;