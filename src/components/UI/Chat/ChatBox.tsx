import React from "react";
import Attachment from "@/assets/plus.svg";
import Emoji from "@/assets/Smiley.svg";
import Microphone from "@/assets/microphone.svg";
import Send from "@/assets/send.svg";

const ChatBox: React.FC = (
) => {
    return <div className="absolute bottom-4 left-4 right-4 w-[calc(100%-32px)] flex py-3 px-[10px] border border-[#EBEBEB] rounded-[16px] gap-2">
        <div className="w-6 p-1 flex justify-center items-center gap-10px rounded-full h-6 cursor-pointer bg-[#F5F5F5]" >
            <img src={Attachment} className="w-6 h-6" />
        </div>
        <img src={Emoji} className="w-5 h-5 cursor-pointer" />
        <img src={Microphone} className="w-5 h-5 cursor-pointer" />
        <input type="text" className="w-full outline-none px-2 border-l border-[#EBEBEB]" placeholder="Write a message..." />
        <img src={Send} className="w-5 h-5 cursor-pointer" />
    </div>
}

export default ChatBox;