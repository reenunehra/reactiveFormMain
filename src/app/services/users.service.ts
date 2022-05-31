import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl:string = "http://localhost:5000"

  constructor(private http: HttpClient) { }


  // -------------------------------------post data---------------------------

  postData(url: string, data: any, queryParams = {}) {
    let fullUrl = this.baseUrl + url
    let options  = {
      headers : {
        "Accept" : "application/json"
      },
     params: queryParams
    }

    return this.http.post(fullUrl,data,options)
  }
}
