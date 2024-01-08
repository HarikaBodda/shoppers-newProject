import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class FilesUploadService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  postUserData(user: user, file: Blob){
    //console.log("API CALL SERVICE: " + user);
    let formData = new FormData();
    console.log(formData)
    formData.append("file", file)
    formData.append("userData", JSON.stringify(user))
    return this.http.post('http://localhost:8000/users', formData)
  }

//   postFile(fileToUpload: File): Observable<boolean> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     return this.http
//       .post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }

}
