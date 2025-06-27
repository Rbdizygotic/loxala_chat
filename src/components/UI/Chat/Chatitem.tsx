import React from "react";
import type { ChatType, UserType } from "../../../type/Type";
import ChatReceived from "./ChatReceived";

const ChatItem: React.FC<{ item: ChatType, me: UserType | undefined, user: UserType | undefined }> = ({ item, me, user }) => {
    if (!me || !user) return null;

    return <div className={`flex items-end gap-3 mt-6 ${item.receiver === me.id ? "justify-end" : "justify-start"}`}>
        {
            item.receiver === me.id ?
                <div className="flex relative items-end gap-3">
                    <div className="flex text-left flex-col items-end md:w-[373px] w-[300px] rounded-l-[16px] rounded-tr-[16px] bg-[#F6F3FC] p-2 pb-4">
                        {item.content}
                    </div>
                    <img src={me.avatar} className="w-[32px] h-[32px] rounded-full" />
                    <div className="absolute bottom-0 right-[54px]"><ChatReceived time={item.time} read={item.read} /></div>
                </div> :
                <div className="flex relative items-end gap-3">
                    <img src={user.avatar} className="w-[32px] h-[32px] rounded-full" />
                    <div className="flex flex-col text-left items-end md:w-[373px] w-[300px] rounded-r-[16px] rounded-tl-[16px] bg-[#F5F5F5] p-2 pb-4">
                        {item.content}
                    </div>
                    <div className="absolute bottom-0 right-[8px] text-[#7C7C7C] text-[12px] font-normal leading-normal">
                        {item.time.getHours().toString().padStart(2, '0') + ':' + item.time.getMinutes().toString().padStart(2, '0')}</div>
                </div>
        }
    </div >
}

export default ChatItem;