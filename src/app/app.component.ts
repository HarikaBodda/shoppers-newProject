import { Component, OnInit } from '@angular/core';
import { user } from './models/user';
import { FilesUploadService } from './files-upload.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppers';
  User = new user(0, "", "", "", "");
  file!: any
  fileToUpload: File | null = null;


  uploadedFiles: any;

  constructor(private http: HttpClient, private service: FilesUploadService) {}

  ngOnInit() {

  }

  // fileChange(element:any) {
  //   this.uploadedFiles = element.target.files;
  // }

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {
  //     formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  //   }
  //   this.http.post('http://localhost:8000/users', formData)
  //     .subscribe((response) => {
  //       console.log('response receved is ', response);
  //     })
  // }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  // uploadFileToActivity() {
  //   this.service.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  onChangeFileField(event:any){
    //console.log(event.target.files[0])
    this.file = event.target.files[0];
    this.User.imageName = this.file.name;
    console.log(this.file);
  }

  doRegister(){
    this.service.postUserData(this.User, this.file).subscribe({
      next:(response)=>{
        console.log(response)
        alert("done")
      },
      error:(error)=>{
        console.log(error)
        alert("error")
      },
      complete:()=>{
        console.log("request completed")
      }
    })
  }
}
