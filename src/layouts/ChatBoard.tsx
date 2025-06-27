import React from "react";
import ChatMemberInfo from "../components/UI/Chat/ChatMemberInfo";
import { userData } from "../data/usermockdb";
import ChatBoardContent from "../components/UI/Chat/ChatBoardContent";
import ChatBox from "../components/UI/Chat/ChatBox";

const ChatBoard: React.FC<{selectedChat: string | null}> = ({selectedChat}) => {
    const user = userData.find(user => user.id === selectedChat);
    if (!user) return null;

    return <div className="w-full relative h-full">
        <ChatMemberInfo user={user}/>
        <ChatBoardContent selectedChat={selectedChat}/>
        <ChatBox />
    </div>
}
export default ChatBoard;