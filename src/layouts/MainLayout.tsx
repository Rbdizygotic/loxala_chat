import React from "react";
import Vector from "@/assets/Vector.svg";
import Back from "@/assets/Group.svg";
import SearchInput from "../components/UI/Common/SearchInput";
import { NavigationItems } from "../data/navigation";
import NavigationItem from "../components/UI/Navigation/NavigationItem";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="w-full h-[100vh] flex">
            <div className="w-[300px] hidden sm:block p-4 border-r border-[#EbEBEB]">
                <div className="flex items-center justify-between py-[9px] mb-4">
                    <img src={Vector} className="w-[76px] h-[16px]" />
                    <img src={Back} className="w-[16px] h-[16px]" />
                </div>
                <SearchInput placeholder="Serach"/>
                <div className="flex flex-col gap-1 my-[6px]">
                    {
                        NavigationItems.map((item, key) => (
                            <NavigationItem key={key} item={item} />
                        ))
                    }
                </div>
            </div>
            <div className="h-full sm:w-[calc(100%-300px)] w-full">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;