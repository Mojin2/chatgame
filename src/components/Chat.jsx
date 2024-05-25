import { useEffect, useState } from "react";
import Senario from "./Senario";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";
import image12 from "../images/12.png";
import image13 from "../images/13.png";
import image14 from "../images/14.png";

const bgs = [{ image: `bg-[url("./images/room.jpeg")]` }];
export default function Chat() {
  const [currentLine, setCurrentLine] = useState(undefined);
  const [imgUrl, setImgUrl] = useState("");
  const handleChildData = (data) => {
    setCurrentLine(data);
  };
  const [audio] = useState(new Audio("bgm/bgm.mp3"));

  const handlePlay = () => {
    audio.play().catch((error) => {
      console.error("Audio play failed:", error);
    });
  };
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];

  return (
    // <div
    //   className={`${
    //     currentLine != undefined && bgs[0].image
    //   } bg-cover bg-black relative w-screen h-screen flex justify-center items-center font-extrabold text-6xl text-white flex-col`}
    // >
    <div
      className={`${
        currentLine === undefined ? "" : "bg-[url('./images/bg.jpeg')]"
      } bg-cover bg-slate-950 relative w-screen h-screen flex justify-center items-center font-extrabold text-6xl text-white flex-col`}
    >
      <div className="w-full h-full flex items-center justify-center">
        {currentLine >= 0 && (
          <img src={images[currentLine]} className="mt-32" />
        )}
      </div>
      <div className="w-full h-full" onClick={handlePlay}>
        <Senario onData={handleChildData} />
      </div>
    </div>
  );
}
