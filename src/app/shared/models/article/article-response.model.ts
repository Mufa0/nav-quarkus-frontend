import { UserResponse } from "../user/user-response.model";

export class ArticleResponse{
    public id: number;

    public title: string;

    public content: string;

    public user: UserResponse;

    constructor(id: number, title: string, content: string, user: UserResponse){
        this.id = id;
        this.title = title;
        this.content = content;
        this.user = user;
    }
}