import React, { useEffect, useRef } from "react";
import "./index.css";

function Yooho() {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        function adjustFontSize() {
            if (imgRef.current) {
                const height = imgRef.current.clientHeight;
                const fontSize = height * 0.112; // 5% of the image's height
                containerRef.current.style.setProperty('--font-size', `${fontSize}px`);
            }
        }

        // Adjust the font size initially
        adjustFontSize();

        // Adjust the font size whenever the window is resized
        window.addEventListener('resize', adjustFontSize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', adjustFontSize);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen animated-gradient">
            <div className="relative" ref={containerRef}>
                <img className="max-w-full h-auto" ref={imgRef} src="/yoho.png" alt="Yoho" />
                <div className="text-overlay">
                    <span >TWO</span>
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
