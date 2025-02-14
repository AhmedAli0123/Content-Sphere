export type commentSection = {
    _id:string
    _createdAt:number;
    name:string;
    email:string
    comment:string
}
export type fetchComment = {
    id: string;
    text: string;
    author: string;
    createdAt: string;
  };