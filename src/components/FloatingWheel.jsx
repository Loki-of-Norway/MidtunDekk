import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingWheel = () => {
    const wheelRef = useRef(null);

    useEffect(() => {
        try {
            if (wheelRef.current) {
                gsap.to(wheelRef.current, {
                    rotation: 360 * 5, 
                    ease: "none",
                    scrollTrigger: {
                        trigger: "html",
                        start: 0,
                        end: "max",
                        scrub: 1,
                    }
                });
            }
        } catch (error) {
            console.error("FloatingWheel animation error:", error);
        }

        return () => {
             // ScrollTrigger.getAll().forEach(t => t.kill()); 
        };
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[100] w-20 h-20 md:w-24 md:h-24 filter drop-shadow-2xl rounded-full p-3" style={{ backgroundColor: '#F35900' }}>
            <img 
                ref={wheelRef}
                src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/60591092f8bc7f74675e9aa3_dekk.png" 
                alt="Spinning Wheel" 
                className="w-full h-full object-contain"
            />
        </div>
    );
};

export default FloatingWheel;
