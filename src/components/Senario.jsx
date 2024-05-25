import React, { useRef, useState } from "react";
import TypingText from "./TypingText";
import { SlArrowRight } from "react-icons/sl";
export default function Senario({ onData }) {
  const script = [
    {
      //0
      text: `시스템 로딩중...`,
      name: "???",
    }, //1
    { text: "오늘은 은빈이랑\n 2주년이잖아?!", name: "이진규" },
    {
      //2
      text: "평소보다 잘보이게\n 이쁘게 준비하고\n얼른 나가야겠어.",
      name: "이진규",
    },
    {
      //3
      text: "흠.. 이정도면\n 충분히 꾸민거같네!\n 근데 뭔가 잊은게 있는거\n 같은데...",
      name: "이진규",
    },
    {
      //4
      text: "맞다! 선물도\n 같이 준비하는게 좋겠지?",
      name: "이진규",
    },
    {
      //5
      text: "은빈이는 2주년에\n 어떤 선물을 받고싶을까?",
      name: "이진규",
      options: [
        { text: "완전 비싼 선물", nextLine: 6 },
        { text: "진심을 담은 편지", nextLine: 7 },
        { text: "이쁜 꽃", nextLine: 7 },
      ],
    },
    {
      //6
      text: "은빈이가 그렇게\n 물질적인 것만\n 원할리가 없는데..\n 마지막 기회야.",
      name: "이진규",
      options: [
        { text: "진심을 담은 편지", nextLine: 7 },
        { text: "이쁜 꽃", nextLine: 7 },
      ],
    },
    {
      //7
      text: "맞아\n 그게 은빈이가\n 딱 좋아할거같은 선물이야!\n",
      name: "이진규",
    },
    {
      //8
      text: "작년 이 날에는\n 은빈이가 울었는데\n 이번에도 눈물이 날까..?",
      name: "이진규",
      options: [
        { text: "우는척 해준다.", nextLine: 9 },
        { text: "진심의 눈물을 흘린다.", nextLine: 10 },
      ],
    },
    {
      //9
      text: "아이고....\n 은빈이 1년 사이에\n 변했네 변했어...",
      name: "이진규",
      options: [{ text: "악어의 눈물을 흘린다.", nextLine: 10 }],
    },
    {
      //10
      text: "역시 은빈이야!!\n 오늘 정말 행복한\n 2주년이었어.",
      name: "이진규",
    },
    {
      //11
      text: "은빈이랑 시간을 보내면\n 정말 빠르게 흐르는 것 같네.",
      name: "이진규",
    },
    {
      //12
      text: "앞으로는 걱정없이\n 더 행복하게 만났으면\n 좋겠다.",
      name: "이진규",
    },
    {
      //13
      text: "앞으로도 잘 부탁해!",
      name: "이진규",
    },
    {
      //14
      text: "진규랑 은빈이는\n 행복하게\n 오래오래 살았답니다.\n\n -Happy End-",
      name: "???",
    },
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const handleClick = () => {
    if (!isTyping) {
      if (!script[currentLine].options) {
        if (currentLine < script.length - 1) {
          setCurrentLine(currentLine + 1);
          setIsTyping(true);
          onData(currentLine);
          console.log(currentLine);
        }
      }
    }
  };

  const handleOptionClick = (nextLine) => {
    setCurrentLine(nextLine);
    setIsTyping(true);
    onData(nextLine - 1);
    console.log(nextLine);
  };

  return (
    <div
      onClick={handleClick}
      className=" absolute bottom-2 border-4 px-4 py-4 border-white left-2 right-2 h-[300px] text-2xl bg-slate-950 bg-opacity-60 rounded-xl font-medium"
    >
      <div
        style={{ cursor: "pointer", padding: "20px" }}
        className="font-Dodum"
      >
        <TypingText
          text={script[currentLine].text}
          onComplete={() => setIsTyping(false)}
        />
        {!isTyping && script[currentLine].options && (
          <div style={{ marginTop: "20px" }} className="flex flex-col ">
            {script[currentLine].options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option.nextLine)}
                style={{ margin: "7px", cursor: "pointer" }}
                className="font-Dodum"
              >
                <div className="flex flex-row items-center">
                  <SlArrowRight className="text-white h-4 w-4 mr-2" />
                  {option.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`${isTyping ? "hidden" : ""} ${
          script[currentLine].options ? "hidden" : ""
        } ${
          currentLine === script.length - 1 ? "hidden" : ""
        } absolute bottom-5 right-6 text-3xl animate-blink`}
      >
        ►
      </div>
      <div className="absolute left-3 -top-6 border-4 border-white bg-white text-slate-700 font-Dodum font-extrabold rounded-lg px-7 py-1">
        {script[currentLine].name}
      </div>
    </div>
  );
}
