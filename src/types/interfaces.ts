export interface Item {
    id      : number,
    title   : string;
    content : string;
    done    : boolean;
}

export interface Items {
    [key : number] : Item
}