export type NavigationItemType = {
    img: string;
    name: string;
    notifcation: number;
    path?: string;
}

export type ChatType = {
    receiver: string;
    responder: string;
    time: Date;
    content: string;
    read: boolean;
};

export type UserType = {
    id: string;
    name: string;
    verified: boolean;
    online: boolean;
    headline: string;
    avatar: string;
}