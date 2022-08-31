import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiTwotoneCheckCircle,
  AiTwotoneCalendar,
  AiOutlineFile,
} from "react-icons/ai";
import { BsTwitter, BsArrowRepeat, BsGithub } from "react-icons/bs";
import { RiEarthLine } from "react-icons/ri";

import Logo from "../public/Logo.png";
import Tech from "../public/Tech.svg";
import React from "../public/React.png";
import PowerPlant from "../public/PowerPlant.png";
import { useOffsetTop } from "./Hooks/useOffsetTop";

//compontens
import { ChangeViewRightContents } from "./components/ChangeViewRightContents";

const Home: NextPage = () => {
  const router = useRouter();
  const rightContentsRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);

  // 賢すぎ
  const rightContents = useOffsetTop(rightContentsRef);
  const content1 = useOffsetTop(content1Ref);
  const content2 = useOffsetTop(content2Ref);
  const content3 = useOffsetTop(content3Ref);

  return (
    <>
      <div className="w-full">
        <div className="header bg-white flex justify-between mx-[120px] my-[12px]">
          <div>
            <a href="#">
              <img
                src={Logo.src}
                alt="ロゴ"
                height={22}
                width={94}
                className="mt-[4px]"
              />
            </a>
          </div>
          <div className="flex">
            <a className="my-auto" href="#">
              <BiSearch className="text-gray-500" />
            </a>
            <button className="my-auto ml-[22px] px-[18px] py-[6px] text-[12px] text-white font-medium rounded-lg bg-[#3ea8ff] hover:bg-[#6126e1]">
              Log in
            </button>
          </div>
        </div>
        <div className="bg-[#edf2f7] w-full h-[2000px] pt-[40px]">
          <div className="w-full text-center">
            <img
              src={PowerPlant.src}
              alt="パワプラロゴ"
              height={60}
              width={60}
              className="mx-auto my-[12px]"
            />
            <h1 className="text-[24px] font-bold">Zennを模写コーディング</h1>
          </div>
          <div className="flex mt-[40px] h-[300px] ml-[140px]">
            <div className="w-min fixed left-[60px]">
              <button className="text-gray-400 text-center mb-[16px]">
                <div className="rounded-full bg-white p-[12px] w-min">
                  <AiOutlineHeart className="text-[20px] font-bold" />
                </div>
                <span className="text-[8px]">195</span>
              </button>
              <button className="text-gray-400 text-center w-min hover:text-black">
                <BsTwitter className="text-[24px] mx-auto" />
                <span className="text-[6px] whitespace-nowrap">ツイート</span>
              </button>
            </div>
            <div className="rounded-lg bg-white w-[64%] h-[600px] -ml-[12px] p-6 overflow-y-scroll">
              <div className="category flex">
                <button className="flex rounded-2xl border pl-[4px] pr-[6px] py-[2px] mr-1">
                  <img
                    src={React.src}
                    alt="React"
                    height={20}
                    width={20}
                    className="my-auto"
                  />
                  <span className="text-gray-600 text-[6px] ml-[4px] my-auto">
                    React
                  </span>
                </button>
                <button className="flex rounded-2xl border pl-[4px] pr-[6px] py-[2px]">
                  <img
                    src={Tech.src}
                    alt="Tech"
                    height={20}
                    width={20}
                    className="my-auto"
                  />
                  <span className="text-gray-600 text-[6px] ml-[4px] my-auto">
                    Tech
                  </span>
                </button>
              </div>
              <div ref={content1Ref} className="mt-[16px]">
                <h2 className="text-[24px] font-bold">概要</h2>
                <hr />
                <p className="my-[16px] text-[12px]">
                  今回は模写コーディングについての記事を書きました。
                </p>
              </div>
              <div ref={content2Ref} className="mt-[72px]">
                <h2 className="text-[24px] font-bold">This is who I am.</h2>
                <hr />
                <p className="mt-[16px] text-[12px] mb-[20px]">
                  私の自己紹介をここでしておきたいと思います。
                  <br />
                  以下を参照してください。
                </p>
              </div>
              <div ref={content3Ref} className="mt-[72px]">
                <h2 className="text-[24px] font-bold">成果物</h2>
                <hr />
                <button
                  onClick={() => {
                    router.push("https://powerplant-f5557.web.app/");
                  }}
                  className="border rounded-md w-full flex justify-between mt-[24px]"
                >
                  <div className="pt-[20px] pl-[12px]">
                    <p className="font-bold text-[12px] text-left">
                      Powerplant App
                    </p>
                    <p className="text-[8px] text-left text-gray-400 my-[8px]">
                      忙しすぎて自分のやりたいことに時間を割けない学生に向けた完全履修攻略サイト
                    </p>
                    <p className="text-[8px] text-left text-gray-600 flex">
                      <span className="my-auto text-[12px] mr-[2px]">
                        <RiEarthLine />
                      </span>
                      https://powerplant-f5557.web.app/
                    </p>
                  </div>
                  <div className="w-[180px] h-[111px] bg-gray-800 rounded-r-md">
                    <img
                      src={PowerPlant.src}
                      alt="PowerPlant"
                      height={40}
                      width={40}
                      className="mx-auto mt-[30px] animate-pulse"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[220px] ml-[24px] h-[400px]">
              <div className="rounded-lg bg-white px-[16px] w-full h-[162px]">
                <div className="flex justify-between h-[40px]">
                  <div className="text-gray-500 flex">
                    <span className="my-auto text-gray-400 mr-[6px] text-[16px]">
                      <AiOutlineUser />
                    </span>
                    <p className="my-auto text-[10px]">著者</p>
                  </div>
                  <div className="flex">
                    <span className="text-[20px] my-auto mr-[4px] text-gray-300">
                      <AiTwotoneCheckCircle />
                    </span>
                    <p className="text-[10px] my-auto">Sho Ogawa</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between h-[40px]">
                  <div className="text-gray-500 flex">
                    <span className="my-auto text-gray-400 mr-[6px] text-[16px]">
                      <AiTwotoneCalendar />
                    </span>
                    <p className="my-auto text-[10px]">公開</p>
                  </div>
                  <div className="flex">
                    <p className="text-[10px] my-auto">2022/08/31</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between h-[40px]">
                  <div className="text-gray-500 flex">
                    <span className="my-auto text-gray-400 mr-[6px] text-[16px]">
                      <BsArrowRepeat />
                    </span>
                    <p className="my-auto text-[10px]">本文更新</p>
                  </div>
                  <div className="flex">
                    <span className="text-[14px] my-auto mr-[4px]">
                      <BsGithub />
                    </span>
                    <p className="text-[10px] my-auto">2022/08/31</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between h-[40px]">
                  <div className="text-gray-500 flex">
                    <span className="my-auto text-gray-400 mr-[6px] text-[16px]">
                      <AiOutlineFile />
                    </span>
                    <p className="my-auto text-[10px]">文章量</p>
                  </div>
                  <div className="flex">
                    <p className="text-[10px] my-auto">約200字</p>
                  </div>
                </div>
              </div>
              <div ref={rightContentsRef}>
                <ChangeViewRightContents
                  rightContentsViewportTop={rightContents.viewportTop}
                  content1ViewportTop={content1.viewportTop}
                  content2ViewportTop={content2.viewportTop}
                  content3ViewportTop={content3.viewportTop}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
