import React, { useEffect, useRef } from "react";
import "./index.css";

function Yooho() {
    const imgRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        function adjustFontSize() {
            if (imgRef.current) {
                const height = imgRef.current.clientHeight;
                const fontSize = height * 0.112; 
                containerRef.current.style.setProperty('--font-size', `${fontSize}px`);
                console.log(fontSize)
            }
        }

        adjustFontSize();
        window.addEventListener('resize', adjustFontSize);

        return () => window.removeEventListener('resize', adjustFontSize);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen relative">
            <div className="animated-gradient"></div>
            <div className="image-container" ref={containerRef}>
                <img className="index max-w-full h-auto" ref={imgRef} src="/yoho.png" alt="Yoho" />
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
