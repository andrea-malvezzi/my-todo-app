export interface Item {
    title   : string;
    content : string;
    done    : boolean;
}

export interface Items {
    [key : number] : Item
}