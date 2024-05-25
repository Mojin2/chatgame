import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import img from "../images/cake6.gif";
import MovingText from "react-moving-text";
import "./arrow.css";

export default function Home() {
  const [gifSrc, setGifSrc] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConfetti, setIsConfetti] = useState(false);
  const [isScrollLoaded, setScrollIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    setTimeout(() => {
      setIsConfetti(true);
    }, 3000);
    setTimeout(() => {
      setScrollIsLoaded(true);
    }, 5000);
    const uniqueGifSrc = `${img}?${new Date().getTime()}`;
    setGifSrc(uniqueGifSrc);
  }, []);
  return (
    <div className="absolute w-screen h-screen bg-white font-Dokdo flex justify-center items-center font-extrabold text-shadow-md flex-col">
      {isConfetti && <Confetti />}
      <div className="z-10 flex justify-center flex-col items-center h-[20%]">
        {isLoaded && (
          <>
            <MovingText
              type="popIn"
              iteration="1"
              className="text-7xl text-yellow-500"
            >
              은빈이와
            </MovingText>
            <MovingText
              type="popIn"
              iteration="1"
              className="text-7xl text-red-500 font-extrabold"
            >
              2주년 기념일
            </MovingText>
          </>
        )}
      </div>
      {/* <div className="px-12 py-2 mt-16 text-4xl">Scroll</div> */}
      <div className="relative bottom-32 z-0">
        <img src={gifSrc} className="-z-1" />
      </div>
      {isScrollLoaded && (
        <div className="blinking-text relative -bottom-16 text-3xl h-[20px]">
          아래로 스크롤하세요!
        </div>
      )}
      {!isScrollLoaded && (
        <div className="relative -bottom-16 text-3xl h-[20px]"></div>
      )}
    </div>
  );
}
