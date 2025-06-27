import React from 'react';
import ChatList from '../layouts/ChatList';
import ChatBoard from '../layouts/ChatBoard';
import { useState } from 'react';

const Chat: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<string | null>(null);
    return <div className='p-6 bg-[#f5f5f5] h-full'>
        <div className='flex bg-white border border-[#EBEBEB] rounded-[16px] h-full'>
            <div className='w-[365px] w-[300px] border-r border-[#EBEBEB] rounded-l-[16px]'>
                <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
            </div>
            <div className='w-[calc(100%-350px)] rounded-r-[16px]'>
                <ChatBoard selectedChat={selectedChat}/>
            </div>
        </div>
    </div>
};

export default Chat;