import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core'; import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-pet-breed-type',
  templateUrl: './pet-breed-type.component.html',
  styleUrls: ['./pet-breed-type.component.css']
})
export class PetBreedTypeComponent implements OnInit {
  rows = [];
  rows1 = [];
  searchQR: any;
  value1: any;

  pet_type_name: any;
  pet_type_id: string = '';
  pet_breed: string = '';
  user_type_value: string = '';
  date_and_time: string = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  pet_breed_list: any = [];
  pet_breed_id: string = '';


  update_button: boolean;
  selectedimgae: any;

  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.pet_type_id = '';
    this.pet_breed = '';
    this.user_type_value = '0';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
    this.listpetbreed();
  }



  listpettype() {
    this._api.pet_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows1 = response.Data;
        this.pet_type_name = this.rows1[0];
      }
    );
  }

  listpetbreed() {
    this._api.pet_breed_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
      }
    );
  }



  ////// Inserting Data ///
  Insert_pet_breed_details() {
    if (this.pet_breed == '') {
      alert("Please enter the pet breed")
    } else {
      let a = {
        'pet_type_id': this.pet_type_name._id,
        'pet_breed': this.pet_breed,
        'user_type_value': this.user_type_value,
        'date_and_time': new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      };
      console.log(a);
      this._api.pet_breed_insert(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          if (response.Code === 200) {
            alert('Added Successfully');
          } else {
            alert(response.Message);
          }
          this.ngOnInit();
        }
      );
    }
  }


  saverange() {
    console.log(this.pet_type_name);
  }

  Edit_pet_breed_details() {
    if (this.pet_breed == '') {
      alert("Please enter the pet breed")
    } else {
      let a = {
        '_id': this.pet_breed_id,
        'pet_type_id': this.pet_type_name._id,
        'pet_breed': this.pet_breed,
        'user_type_value': this.user_type_value,
      };
      this._api.pet_breed_edit(a).subscribe(
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
      '_id': data
    };
    console.log(a);
    this._api.pet_breed_delete(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert('Deleted Successfully');
        this.ngOnInit();
      }
    );
  }


  Editcompanydetailsdata(data) {
    this.update_button = false;
    this.pet_breed_id = data._id;
    this.pet_type_id = data.pet_type_id._id;
    for (let a = 0; a < this.rows1.length; a++) {
      if (data.pet_type_id._id === this.rows1[a]._id) {
        this.pet_type_name = this.rows1[a];
      }
    }
    this.user_type_value = data.user_type_value;
    this.pet_breed = data.pet_breed;
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
