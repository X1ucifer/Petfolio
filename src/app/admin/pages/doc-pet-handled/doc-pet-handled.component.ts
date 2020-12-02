import { Component, OnInit, Inject,  ViewChild, AfterViewInit, ElementRef } from '@angular/core';import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-doc-pet-handled',
  templateUrl: './doc-pet-handled.component.html',
  styleUrls: ['./doc-pet-handled.component.css']
})
export class DocPetHandledComponent implements OnInit {
  rows = [];
  searchQR:any;
  value1:any;


  pet_type_title : string = '';
  user_type_value : string = '';
  date_and_time : string = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  pet_type_list : any = [];
  pet_type_id : string = '';

  update_button : boolean;
  selectedimgae : any;

  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.pet_type_title = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
  }



  listpettype() {
    this._api.pet_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.pet_type_list = response.Data;
        console.log(this.pet_type_list);
      }
    );
  }



  ////// Inserting Data

  Insert_pet_type_details() {


    if(this.pet_type_title == ''){
      alert("Please enter the pet type")
    }else{
    let a = {
      'pet_type_title' : this.pet_type_title,
      'user_type_value' : this.user_type_value,
      'date_and_time' : new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
      };
    console.log(a);
    this._api.pet_type_insert(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      if ( response.Code === 200 ) {
        alert('Added Successfully');
      }else {
        alert(response.Message);
      }
      this.ngOnInit();
    }
  );
    }
  }


  Edit_pet_type_details(){
    if(this.pet_type_title == ''){
      alert("Please enter the pet type")
    }else{
    let a = {
      '_id' : this.pet_type_id,
      'pet_type_title' : this.pet_type_title,
      'user_type_value' : this.user_type_value,
     };
    this._api.pet_type_edit(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert("Updated Successfully");
      this.ngOnInit();
    }
  );
    }
  }



  Deletecompanydetails(data) {
    let a = {
      '_id' : data
     };
    console.log(a);
    this._api.pet_type_delete(a).subscribe(
    (response: any) => {
      console.log(response.Data);
      alert('Deleted Successfully');
      this.ngOnInit();
    }
  );
  }


  Editcompanydetailsdata(data) {
    this.update_button = false;
    this.pet_type_id = data._id;
    this.user_type_value = data.user_type_value ;
    this.pet_type_title = data.pet_type_title ;
  }

















    // //////Additional Calling Funcation//////
    // fileupload(event) {
    //   console.log("this.width")
    //   this.selectedimgae = event.target.files[0];
    //   console.log(this.selectedimgae.size / 100000);
    //   let fr = new FileReader();
    //   fr.onload = () => { // when file has loaded
    //     var img = new Image();
    //     img.onload = () => {
    //       let width = img.width;
    //       let height = img.height;
    //       console.log(width,height);
    //       if(width !== 500 && height !== 500){
    //         let d = this.selectedimgae.size / 100000 ;
    //         if(d < 10){
    //         this.addfiles1();
    //        }else{
    //         alert('Please upload the file below 1 MB');
    //         this.imgType.nativeElement.value = "";
    //        }
    //       }
    //       else{
    //         alert('Please upload the file size 500 * 500');
    //         this.imgType.nativeElement.value = "";
    //       }
    //     };
    //     img.src = fr.result as string; // The data URL
    //   };
    //   fr.readAsDataURL(this.selectedimgae);
    //   // clear the value after upload
    // }


    // addfiles1() {
    // const fd = new FormData();
    // fd.append('sampleFile', this.selectedimgae, this.selectedimgae.name);
    // this.http.post('http://18.237.123.253:3000/upload', fd)
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     this.user_type_img = res.Data;
    //   });
    //  }






}
