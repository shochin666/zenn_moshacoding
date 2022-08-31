import { useRouter } from "next/router";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { CgShapeCircle } from "react-icons/cg";
import { VscCircleFilled } from "react-icons/vsc";

type Props = {
  rightContentsViewportTop: number | undefined;
  content1ViewportTop: number | undefined;
  content2ViewportTop: number | undefined;
  content3ViewportTop: number | undefined;
};

export const ChangeViewRightContents = (props: Props) => {
  const router = useRouter();
  const {
    rightContentsViewportTop,
    content1ViewportTop,
    content2ViewportTop,
    content3ViewportTop,
  } = props;

  const isCurrentContent = () => {
    return (
      <>
        <span className="relative top-[2px] left-0">
          <CgShapeCircle className="absolute text-[14px] text-sky-200 left-[0px] -top-[1.8px]" />
          <VscCircleFilled className="absolute text-[12px] text-blue-400 left-[0.75px] -top-[1px]" />
        </span>
      </>
    );
  };
  const isNotCurrentContent = () => {
    return (
      <span className="relative top-[2px] left-0">
        <VscCircleFilled className="absolute text-[12px] text-blue-400 opacity-40 left-[0.75px] -top-[1px]" />
      </span>
    );
  };
  if (rightContentsViewportTop) {
    if (rightContentsViewportTop <= 15) {
      return (
        <>
          <div className="fixed top-0">
            <div className="rounded-lg bg-white px-[16px] w-[220px] h-[165px] flex flex-col pt-[12px] mt-[16px]">
              <div className="flex">
                <div className="h-[44px] w-[44px] bg-gray-400 rounded-full"></div>
                <div className="flex flex-col mt-[2px] ml-[8px]">
                  <div>
                    <p className="text-[12px] font-bold">Sho Ogawa</p>
                  </div>
                  <div className="flex mt-[2px] justify-between w-[110px]">
                    <button className="border border-gray-500 py-[3px] px-[12px] rounded-2xl text-gray-500 text-[8px] hover:bg-gray-100">
                      フォロー
                    </button>
                    <button
                      onClick={() => {
                        router.push("https://github.com/shochin666");
                      }}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <BsGithub />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <BsTwitter />
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-[12px]">
                <p className="text-[12px]">常に暇。と見せかけて実は多忙。</p>
              </div>
              <button className="w-full bg-blue-400 text-[12px] font-bold text-white py-[8px] shadow-md rounded-md hover:bg-blue-500">
                バッジを贈る
              </button>
              <a
                href="#"
                className="text-gray-400 text-[4px] hover:underline text-center my-[8px]"
              >
                バッジを贈るとは？
              </a>
            </div>
            <div className="rounded-lg bg-white px-[16px] w-full h-[165px] flex flex-col pt-[20px] mt-[16px]">
              <p className="text-[13px] font-bold mb-[12px]">目次</p>
              <ol>
                <li className="my-auto leading-none -mb-[3px]">
                  {(0 >= content1ViewportTop! && isNotCurrentContent()) ||
                    (content1ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content1ViewportTop! &&
                    content1ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] align-top font-bold">
                    概要
                  </span>
                </li>
                <div className="bg-blue-400 ml-[6px] w-[1.5px] h-[16px] opacity-20"></div>
                <li className="leading-none -mb-[3px]">
                  {(0 >= content2ViewportTop! && isNotCurrentContent()) ||
                    (content2ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content2ViewportTop! &&
                    content2ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] font-bold align-top">
                    This is who I am.
                  </span>
                </li>
                <div className="bg-blue-400 ml-[6px] w-[1.5px] h-[16px] opacity-20"></div>
                <li className="leading-none -mb-[3px]">
                  {(0 >= content3ViewportTop! && isNotCurrentContent()) ||
                    (content3ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content3ViewportTop! &&
                    content3ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] font-bold align-top">
                    成果物
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <div className="rounded-lg bg-white px-[16px] w-full h-[165px] flex flex-col pt-[12px] mt-[16px]">
              <div className="flex">
                <div className="h-[44px] w-[44px] bg-gray-400 rounded-full"></div>
                <div className="flex flex-col mt-[2px] ml-[8px]">
                  <div>
                    <p className="text-[12px] font-bold">Sho Ogawa</p>
                  </div>
                  <div className="flex mt-[2px] justify-between w-[110px]">
                    <button className="border border-gray-500 py-[3px] px-[12px] rounded-2xl text-gray-500 text-[8px] hover:bg-gray-100">
                      フォロー
                    </button>
                    <button
                      onClick={() => {
                        router.push("https://github.com/shochin666");
                      }}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <BsGithub />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <BsTwitter />
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-[12px]">
                <p className="text-[12px]">常に暇。と見せかけて実は多忙。</p>
              </div>
              <button className="w-full bg-blue-400 text-[12px] font-bold text-white py-[8px] shadow-md rounded-md hover:bg-blue-500">
                バッジを贈る
              </button>
              <a
                href="#"
                className="text-gray-400 text-[4px] hover:underline text-center my-[8px]"
              >
                バッジを贈るとは？
              </a>
            </div>
            <div className="rounded-lg bg-white px-[16px] w-full h-[165px] flex flex-col pt-[20px] mt-[16px]">
              <p className="text-[13px] font-bold mb-[12px]">目次</p>
              <ol>
                <li className="my-auto leading-none -mb-[3px]">
                  {(0 >= content1ViewportTop! && isNotCurrentContent()) ||
                    (content1ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content1ViewportTop! &&
                    content1ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] align-top font-bold">
                    概要
                  </span>
                </li>
                <div className="bg-blue-400 ml-[6px] w-[1.5px] h-[16px] opacity-20"></div>
                <li className="leading-none -mb-[3px]">
                  {(0 >= content2ViewportTop! && isNotCurrentContent()) ||
                    (content2ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content2ViewportTop! &&
                    content2ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] font-bold align-top">
                    This is who I am.
                  </span>
                </li>
                <div className="bg-blue-400 ml-[6px] w-[1.5px] h-[16px] opacity-20"></div>
                <li className="leading-none -mb-[3px]">
                  {(0 >= content3ViewportTop! && isNotCurrentContent()) ||
                    (content3ViewportTop! >= 180 && isNotCurrentContent())}
                  {0 <= content3ViewportTop! &&
                    content3ViewportTop! <= 180 &&
                    isCurrentContent()}
                  <span className="ml-[16px] text-[12px] font-bold align-top">
                    成果物
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </>
      );
    }
  }
  return <></>;
};
