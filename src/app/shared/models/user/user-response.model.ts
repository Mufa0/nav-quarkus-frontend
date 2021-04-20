
export class UserResponse{
    public id: number;

    public name: string;

    public lastname: string;

    public email: string;

    public articles: number[];

    public role: string;

    public likedArticles: number[];

    constructor(id:number, name:string, lastname: string, email: string, articles: number[], role: string, likedArticles: number[]){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.articles = articles;
        this.role = role;
        this.likedArticles = likedArticles;
    } 

}