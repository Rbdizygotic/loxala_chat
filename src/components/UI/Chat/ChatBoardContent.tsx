import React from "react";
import { chatData } from "../../../data/chatmockdb";
import type { ChatType } from "../../../type/Type";
import ChatItem from "./Chatitem";
import { userData } from "../../../data/usermockdb";

const ChatBoardContent: React.FC<{selectedChat: string | null}> = ({selectedChat}) => {
    if (!selectedChat) return null;

    const filteredChats: ChatType[] = chatData.filter(
        chat => chat.receiver === selectedChat || chat.responder === selectedChat
    );
    const me = userData.find(user => user.id === "user_1");
    const user = userData.find(user => user.id === selectedChat);
    return <div className="w-full md:h-[calc(100%-161px)] h-[calc(100%-211px)] relative px-4 overflow-y-auto">
        {filteredChats.map((item, key) => (
            <ChatItem key={key} item={item} me={me} user={user}/>
        ))}
    </div>
}

export default ChatBoardContent;