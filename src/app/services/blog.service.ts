import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl:string = 'http://localhost:6643/api/';

  constructor(private http:HttpClient) { }

  listBlogs(){
    return this.http.get(this.baseUrl+'Posts');
  }
  addPost(blogObj:any){
    return this.http.post(this.baseUrl+'Posts',blogObj);
  }
  editPost(id:any, blogObj:any){
    return this.http.put(this.baseUrl+'Posts/'+id, blogObj);
  }
  deletePost(id:any){
    return this.http.delete(this.baseUrl+'Posts/'+id)
  }
  viewPost(id:string){
    return this.http.get(this.baseUrl+'Posts/'+id)
  }

}
