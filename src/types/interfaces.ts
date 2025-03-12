export interface Item {
    title: string;
    content: string;
}

export interface Items {
    [key : number] : Item
}