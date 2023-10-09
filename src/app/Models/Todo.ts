export class TodoItem {
    Title:string;
    isDone:boolean;


    constructor(title: string, isDone: boolean){
        this.Title = title;
        this.isDone = isDone
    }
}