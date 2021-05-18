import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core'; import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-pet-breed-type',
  templateUrl: './pet-breed-type.component.html',
  styleUrls: ['./pet-breed-type.component.css']
})
export class PetBreedTypeComponent implements OnInit {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  rows = [];
  rows1 = [];
  searchQR: any;
  value1: any;
  S_Date: any;
  E_Date: any;
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
    private toastr:ToastrManager,
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
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

  cancel() {
    this.update_button = true;
   this.pet_type_name._id= undefined;
   this.pet_breed= undefined;
  }

  listpettype() {
    this._api.pet_breed_list().subscribe(
      (response: any) => {
        console.log("response.Data");
        console.log(response.Data);
        this.rows = response.Data;
        this.rows1 = response.Data;
        this.pet_type_name = this.rows1[0];
      }
    );
  }

  listpetbreed() {
    this._api.pet_breed_list().subscribe(
      (response: any) => {
        console.log("breed list");
        console.log(response.Data);
        this.rows = response.Data;
      }
    );
  }



  ////// Inserting Data ///
  Insert_pet_breed_details() {
    if (this.pet_breed == '') {
      // alert("Please enter the pet breed");
      this.showWarning("Please enter the pet breed")
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
            // alert('Added Successfully');
            this.showSuccess("Added Successfully")
          } else {
            this.showError(response.Message)
            //alert(response.Message);
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
      //alert("Please enter the pet breed");
      this.showWarning("Please enter the pet breed")
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
          //alert("Updated Successfully");
          this.showSuccess("Updated Successfully")
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
        //alert('Deleted Successfully');
        this.showSuccess("Deleted Successfully")
        this.ngOnInit();
      }
    );
  }

  


  Editcompanydetailsdata(data) {
    this.update_button = false;
    this.pet_breed_id = data._id;
    this.pet_type_id = data.pet_type_id._id;
    console.log( this.pet_type_id)
    console.log( this.rows1)
    for (let a = 0; a < this.rows1.length; a++) {
      if ( this.pet_type_id == this.rows1[a].pet_type_id._id) {
        this.pet_type_name = this.rows1[a];
        console.log( this.rows1[a].pet_type_id._id)
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



  filter_date() {
    if ( this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate= this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate":this.datePipe.transform(new Date(this.S_Date),'yyyy-MM-dd'),
        "todate" : this.datePipe.transform(new Date(yourDate),'yyyy-MM-dd')
        }
      console.log(a);
      this._api.pet_breed_filter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.rows = response.Data;
        }
      );
    }
    else{
      //alert('Please select the startdate and enddate');
      this.showWarning("Please select the startdate and enddate")
    }
   
  }
  refersh(){
    this.listpettype();this.E_Date = undefined ; this.S_Date = undefined;
  }


  showSuccess(msg) {
    this.toastr.successToastr(msg);
  }

  showError(msg) {
      this.toastr.errorToastr(msg);
  }

  showWarning(msg) {
      this.toastr.warningToastr(msg);
  }



}
