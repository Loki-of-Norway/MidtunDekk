import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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

        return () => {};
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // After reaching top, scroll down to the end of the animation
        const checkScroll = setInterval(() => {
            if (window.scrollY === 0) {
                clearInterval(checkScroll);
                setTimeout(() => {
                    const heroContent = document.getElementById('hero-content');
                    const target = heroContent ? heroContent.offsetTop : window.innerHeight * 3;
                    gsap.to(window, { scrollTo: target, duration: 4, ease: 'power2.inOut' });
                }, 300);
            }
        }, 100);
    };

    return (
        <div
            onClick={handleClick}
            className="fixed bottom-8 right-8 z-[100] w-20 h-20 md:w-24 md:h-24 filter drop-shadow-2xl rounded-full p-3 cursor-pointer hover:scale-110 transition-transform"
            style={{ backgroundColor: '#F35900' }}
        >
            <img
                ref={wheelRef}
                src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/60591092f8bc7f74675e9aa3_dekk.png"
                alt="Spinning Wheel"
                className="w-full h-full object-contain pointer-events-none"
            />
        </div>
    );
};

export default FloatingWheel;
