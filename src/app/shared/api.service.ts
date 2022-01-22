import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  //Now here i will define the POST, GET, PUT, DELETE
  // Create Restaurent using POST method
  postRestaurent(data:any){
    return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res:any) => {
      return res;
    }))
  }

  // Get Restaurent data using GET method
  getRestaurent(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any) => {
      return res;
    }))
  }

  // Update Restaurent using PUT method
  updateRestuarent(data:any, id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id, data).pipe(map((res:any) => {
      return res;
    }))
  }  

  //Delete Restaurent using DELETE method
  deleteRestuarent(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any) => {
      return res;
    }))
  }


  //User Signup form
  usersSignup(data:any){
    return this._http.post<any>("http://localhost:3000/signup", data).pipe(map((res) => {
      return res;
    }))
  }

  loginUser(){
    return this._http.get<any>("http://localhost:3000/signup").pipe(map((res => {
      return res;
    })))
  }
  
}
