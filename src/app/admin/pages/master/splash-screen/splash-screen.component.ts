import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  rows = [];
  searchQR: any;
  Tittle: any;
  Description: any;
  selectedtype: any;
  type: any = [];

  Validation: any;
  selectedimgae: any;
  img_path: string = undefined;
  list: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.listpettype();
  }
  listpettype() {
    console.log("list");
    this._api.splashscreen_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.list = response.Data;
      }
    );
  }
  validation() {
    if (this.Tittle == undefined || this.Tittle == '' || this.img_path == undefined) {
      this.Validation = false;
      console.log(this.Validation)
    }
    else {
      this.Validation = true;
      console.log(this.Validation)
    }
  }


  create() {
    this.validation();
    if (this.Validation == false) {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "img_path": this.img_path,
        "img_title": this.Tittle,
        "img_describ": this.Description,
        "img_index": 4,
        "show_status": true,
        "date_and_time": "" + new Date(),

      }
      console.log(a);
      this._api.splashscreen_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert('Added Successfully');
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  //////Additional Calling Funcation//////
  fileupload(event) {
    console.log("this.width")
    this.selectedimgae = event.target.files[0];
    console.log(this.selectedimgae.size / 100000);
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
      var img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        console.log(width, height);
        if (width > 100 && height > 100) {
          let d = this.selectedimgae.size / 100000;
          if (d < 10) {
            this.addfiles1();
          } else {
            alert('Please upload the file below 1 MB');
            this.imgType.nativeElement.value = "";
          }
        }
        else {
          alert('Please upload the file size 100 * 100');
          this.imgType.nativeElement.value = "";
        }
      };
      img.src = fr.result as string; // The data URL
    };
    fr.readAsDataURL(this.selectedimgae);
    // clear the value after upload
  }


  addfiles1() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    this.http.post('http://52.25.163.13:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.img_path = res.Data;
      });
  }


  delete(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.splashscreen_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert('Deleted Successfully');
        this.ngOnInit();
      }
    );
  }
}