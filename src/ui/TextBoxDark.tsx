import React from "react";
import Button from "./Button";

type TextProps = {
    title: string;
    text: string;
    className?: string;
};

const TextBoxDark:React.FC<TextProps> = ({ title, text, className }) => {
    const textParts = text.split('<br />');

    return (
        <div 
            className={`relative bg-[#171717] flex flex-col mb-10 w-3/4 text-center rounded-md py-8${className || ''}`}
        >
            
             {title && <p className="mt-2 font-bold text-2xl text-left text-white ml-10">{title}</p>}

             <h4 className="text-sm text-left text-white ml-10 mt-2">
                {textParts.map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < textParts.length -1 && <br />}
                    </span>
                ))}
            </h4>
        <Button 
            title="Pricing"
            className="relative w-2/5 ml-23 mt-5 text-sm font-bold bg-sky-600"
        />
        </div>
    );
}

export default TextBoxDark;