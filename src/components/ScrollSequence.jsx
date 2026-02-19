import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequence({ frameCount = 151, pathPrefix = "/frames/ezgif-frame-" }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const renderRef = useRef({ frame: 0 });

  // 1. Preload Images
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, "0");
        img.src = `${pathPrefix}${paddedIndex}.jpg`;
        img.onload = () => {
             if (!isMounted) return;
             loadedCount++;
             if (loadedCount === frameCount) {
                 setImages(loadedImages);
                 setIsLoaded(true);
             }
        };
        img.onerror = () => {
             console.error(`Failed to load image: ${img.src}`);
             if (!isMounted) return;
             loadedCount++;
             if (loadedCount === frameCount) {
                 setImages(loadedImages);
                 setIsLoaded(true);
             }
        }
        loadedImages[i-1] = img;
    }
    return () => { isMounted = false; };
  }, [frameCount, pathPrefix]);

  // 2. Setup Animation
  useGSAP(() => {
    if (!isLoaded || !canvasRef.current || !containerRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    setSize();

    const render = () => {
        const frameIndex = Math.round(renderRef.current.frame);
        const img = images[frameIndex];
        if (img && img.complete && img.naturalHeight !== 0) {
             const hRatio = canvas.width / img.width;
             const vRatio = canvas.height / img.height;
             // User requested a "larger frame" to avoid cutoff. Switching to 'contain' (Math.min) ensures the full image is visible.
             const ratio = Math.min(hRatio, vRatio); 
             const centerShift_x = (canvas.width - img.width * ratio) / 2;
             const centerShift_y = (canvas.height - img.height * ratio) / 2;
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
    };

    render();

    // Create the timeline that pins the canvas and scrubs the frames
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        end: "+=3000", // Scroll distance: 3000px of scrolling to complete the animation
        scrub: 0.5, // Smoothing for better feel
        pin: true, // Pin the container while scrolling
        anticipatePin: 1,
      }
    });

    tl.to(renderRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    const handleResize = () => {
        setSize();
        render();
    };
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, { scope: containerRef, dependencies: [isLoaded, images] });

  if (!isLoaded) return <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-2xl">Loading Assets...</div>;

  return (
    // Container is now simply h-screen to fill viewport, GSAP handles the rest
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute top-24 left-0 w-[calc(100%-4rem)] mx-8 h-[calc(100%-8rem)] object-cover rounded-[2rem] bg-white" />
    </div>
  );
}
