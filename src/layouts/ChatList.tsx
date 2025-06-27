import React from "react";
import Setting from "@/assets/settings.svg";
import SearchInput from "../components/UI/Common/SearchInput";
import ContactItem from "../components/UI/Chat/ContactItem";
import { chatData } from "../data/chatmockdb";
import type { ChatType } from "../type/Type";

const ChatList: React.FC<{selectedChat: string | null, setSelectedChat: (chat: string | null) => void}> = ({selectedChat, setSelectedChat}) => {

    const latestChatsForUser1: Record<string, ChatType> = {};

    chatData
        .filter(chat => chat.receiver === "user_1")
        .forEach(chat => {
            const existing = latestChatsForUser1[chat.responder];
            if (!existing || chat.time > existing.time) {
                latestChatsForUser1[chat.responder] = chat;
            }
        });

    const result = Object.values(latestChatsForUser1);
    console.log(result);

    return <div className='w-full h-full py-4'>
        <div className="flex items-center justify-between mb-3 px-4">
            <span className='font-mulish text-[24px] font-bold leading-normal text-[#282529]'>Chats</span>
            <img src={Setting} className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="px-4 mb-2">
            <SearchInput placeholder="Search for a contact..." />
        </div>
        <div className="w-full h-[calc(100%-90px)] py-4 overflow-y-auto">
        {result.map((item, key)=>(
            <ContactItem key={key} item={item} selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
        ))}
        </div>
    </div>
}

export default ChatList;