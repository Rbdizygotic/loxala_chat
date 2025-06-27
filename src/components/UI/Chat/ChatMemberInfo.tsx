import React from "react";
import type { UserType } from "../../../type/Type";
import NamePresenter from "../Common/NamePresenter";
import DotsThreeVertical from "@/assets/DotsThreeVertical.svg";
import Search from "@/assets/search.svg";
import Document from "@/assets/document.svg";
import Clock from "@/assets/Clock.svg";

const ChatMemberInfo: React.FC<{ user: UserType }> = ({ user }) => {
    return <div className="w-full flex md:flex-row flex-col  md:justify-between justify-start items-center gap-3 border-b border-[#EBEBEB] p-4">
        <div className="flex flex-row w-full justify-between">
            <div className="flex items-center gap-3">
                <div className="relative w-[48px]">
                    <img src={user.avatar} className="rounded-full w-[48px] h-[48px]" />
                    {user.online && <div className="absolute bottom-[2px] right-[2px] w-[12px] h-[12px] bg-[#26B05D] border border-white rounded-full"></div>}
                </div>
                <div className="flex  flex-col gap-[2px]">
                    <div className="flex justify-between items-start">
                        <NamePresenter name={user.name} verified={user.verified} />
                    </div>
                    <div className="w-full font-openSans text-[14px] text-left text-[#7C7C7C] self-stretch leading-normal font-normal line-clamp-2">
                        {user.headline}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="md:flex items-center hidden p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                    <img src={Document} className="w-4 h-4" />
                    <span className="font-openSans text-[14px] text-[#282529] font-normal">Active Contracts <b>2</b></span>
                </div>
                <div className="md:flex items-center hidden p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                    <img src={Clock} className="w-4 h-4" />
                    <span className="font-openSans text-[14px] text-[#282529] font-normal">05:00pm <span className="text-[#7C7C7C]">(From you +1 hr)</span></span>
                </div>
                <img src={Search} className="w-5 h-5 cursor-pointer" />
                <img src={DotsThreeVertical} className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
        <div className="flex w-full md:hidden justify-start gap-3">
            <div className="flex items-center p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                <img src={Document} className="w-4 h-4" />
                <span className="font-openSans text-[14px] text-[#282529] font-normal">Active Contracts <b>2</b></span>
            </div>
            <div className="flex items-center p-2 gap-[6px] cursor-pointer text-[#282529] rounded-[8px] bg-[#F6F3FC]">
                <img src={Clock} className="w-4 h-4" />
                <span className="font-openSans text-[14px] text-[#282529] font-normal">05:00pm <span className="text-[#7C7C7C]">(From you +1 hr)</span></span>
            </div>

        </div>
    </div>
}

export default ChatMemberInfo;