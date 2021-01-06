import { Component, OnInit, Inject, ViewChild, AfterViewInit, ElementRef } from '@angular/core'; import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  rows = [];
  searchQR: any;
  value1: any;


  specialzation: string = '';
  date_and_time: string = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  pet_type_list: any = [];
  pet_type_id: string = '';
  S_Date: any;
  E_Date: any;
  update_button: boolean;
  selectedimgae: any;
  specialzation_list: any;
  specialzation_f: any;
  Main_list: any;
  @ViewChild('imgType', { static: false }) imgType: ElementRef;

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
    private _api: ApiService,
    private routes: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {

    this.specialzation = '';
    // this.user_type_img = 'http://18.237.123.253:3000/api/uploads/template.jpg';
    this.pet_type_id = '';
    this.update_button = true;
    this.listpettype();
    this._api.doctor_spec_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.specialzation_list = response.Data;
        console.log(this.specialzation_list);
      }
    );
  }



  listpettype() {
    this._api.doctor_details_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.rows = response.Data;
        this.Main_list = response.Data;
        this.pet_type_list = response.Data;
        console.log(this.pet_type_list);
      }
    );
  }



  ////// Inserting Data

  Insert_pet_type_details() {


    if (this.specialzation == '') {
      alert("Please enter the pet type")
    } else {
      let a = {
        'specialzation': this.specialzation,
        'date_and_time': new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      };
      console.log(a);
      this._api.doctor_details_insert(a).subscribe(
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


  Edit_pet_type_details() {
    if (this.specialzation == '') {
      alert("Please enter the pet type")
    } else {
      let a = {
        '_id': this.pet_type_id,
        'profile_verification_status': 'Verifiyed',
      };
      this._api.doctor_details_edit(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          alert("Updated Successfully");
          this.ngOnInit();
        }
      );
    }
  }

  insert_live_doctor(item) {
    let a = {
      '_id': item._id,
      "first_name": item.first_name,
      "last_name": item.last_name,
      "user_email": item.user_email,
      "user_phone": item.user_phone,
      "user_type": item.user_type,
      "date_of_reg": item.date_of_reg,
      "mobile_type": item.mobile_type,
      "user_status": item.user_status,
      "user_id": item.user_id,
      "dr_title": item.dr_title,
      "dr_name": item.dr_name,
      "clinic_name": item.clinic_name,
      "clinic_loc": item.clinic_loc,
      "clinic_lat": item.clinic_lat,
      "clinic_long": item.clinic_long,
      "education_details": item.education_details,
      "experience_details": item.experience_details,
      "specialization": item.specialization,
      "pet_handled": item.pet_handled,
      "clinic_pic": item.clinic_pic,
      "certificate_pic": item.certificate_pic,
      "govt_id_pic": item.govt_id_pic,
      "photo_id_pic": item.photo_id_pic,
      "profile_status": item.profile_status,
      "profile_verification_status": item.profile_verification_status,
      "date_and_time": item.date_and_time,
      "live_by": "",
      "live_status": "Not Live"

    };
    this._api.doctor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert("Updated Successfully");
        this.ngOnInit();
      }
    );
  }

  verify(status, id,item) {
    this.insert_live_doctor(item);
    let a = {
      '_id': id,
      'profile_verification_status': status,
    };
    this._api.doctor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        // alert("Updated Successfully");
        // this.ngOnInit();
      }
    );
  }

  live_status_change(status, id) {
    let a = {
      '_id': id,
      "live_by": "Super Admin",
      "live_status": status
    };
    this._api.doctor_details_edit(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        alert("Updated Successfully");
        this.ngOnInit();
      }
    );
  }
  Deletecompanydetails(data) {
    let a = {
      '_id': data
    };
    console.log(a);
    this._api.doctor_details_delete(a).subscribe(
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
    this.specialzation = data.specialzation;
  }




  goToLink1(url: string) {
    window.open(url, "_blank");
  }

  view_details(item) {
    this.saveInLocal('view_detail', 'Doctor');
    this.saveInLocal('view_detail_data', item);
    this.router.navigateByUrl('/admin/View_details')
  }




  edit(item) {
    this.saveInLocal('view_detail_data', item);
    this.saveInLocal('fun_type', 'edit');
    this.router.navigateByUrl('/admin/Doctor_form')

  }

  spec_filter() {
    console.log(this.specialzation_f);
    this.rows = this.Main_list;

    this.rows = this.rows.filter((x: any) => x.specialization.some((y: any) => y.specialization == this.specialzation_f.specialzation));
    console.log(this.rows)

  }
  Refresh() {
    this.specialzation_f = undefined;
    this.rows = this.Main_list;
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



  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  doc_form() {
    this.router.navigateByUrl('/admin/Doctor_form')
    this.saveInLocal('fun_type', 'create');
  }

  filter_date() {
    if (this.E_Date != undefined && this.S_Date != undefined) {
      // let yourDate = new Date(this.E_Date.getTime() + (1000 * 60 * 60 * 24));
      let yourDate = this.E_Date.setDate(this.E_Date.getDate() + 1);

      let a = {
        "fromdate": this.datePipe.transform(new Date(this.S_Date), 'yyyy-MM-dd'),
        "todate": this.datePipe.transform(new Date(yourDate), 'yyyy-MM-dd')
      }
      console.log(a);
      this._api.doctor_detailsfilter_date(a).subscribe(
        (response: any) => {
          console.log(response.Data);
          this.rows = response.Data;
        }
      );
    }
    else {
      alert('Please select the startdate and enddate');
    }

  }
  refersh() {
    this.listpettype(); this.E_Date = undefined; this.S_Date = undefined;
  }
}
