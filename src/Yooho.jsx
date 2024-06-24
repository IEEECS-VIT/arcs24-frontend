import React from "react";
import "./index.css";

function Yooho() {
    return (
        <div className="flex items-center justify-center min-h-screen animated-gradient">
            <div className="relative">
                <img className="max-w-full h-auto" src="/yoho.png" alt="Yoho" />
                <div className="text-overlay">
                    <span>TWO</span>
                    <span>CREATIVE</span>
                    <span>EVENTS FOR THE</span>
                    <span>NEXT</span>
                    <span>WAVE OF</span>
                    <span>LOCAL TALENT</span>
                </div>
            </div>
        </div>
    );
}

export default Yooho;
