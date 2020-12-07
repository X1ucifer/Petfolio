import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from '../../../../api.service';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  Pet_Name: any;
  Pet_Type: any;
  Pet_Breed: any;
  Pet_Gender: any;
  Pet_Color: any;
  Pet_Weight: any;
  Pet_Age: any;
  Vaccinated: any = [];
  Details: any;
  Vaccinated_date: any;
  vacinated_array: any = [
    { "y": "true" },
    { "y": "false" },
  ];
  gender_array: any = [
    { "y": "Male" },
    { "y": "Female" },
  ];
  breed_array: any = [];
  type_array: any = [];
  color_array: any = [];
  Detail: any;
  Validation: any;
  selectedimgae: any;
  img_path: string = undefined;

  @ViewChild('imgType', { static: false }) imgType: ElementRef;
  constructor(
    private router: Router,
    private location: Location,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private _api: ApiService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.Detail = this.getFromLocal('pet_list');
    this.listpetbreed();
    this.listpettype();
  }

  listpettype() {
    this._api.pet_type_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.type_array = response.Data;
      }
    );
  }

  listpetbreed() {
    this._api.pet_breed_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.breed_array = response.Data;
      }
    );
  }
  cancel() {
    window.scrollTo(0, 0);
    this.router.navigateByUrl('/admin/Pet_list')
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }

  validation() {
    if (this.Pet_Name == undefined || this.Pet_Name == '' || this.Pet_Weight == undefined || this.Pet_Weight == '' || this.Pet_Type == undefined || this.Pet_Breed == undefined || this.Pet_Gender == undefined || this.Pet_Color == undefined || this.Pet_Age == undefined || this.Pet_Age == '' || this.Vaccinated == undefined || this.Vaccinated_date == undefined) {
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
      let vac;
      if (this.Vaccinated.y == "true") {
        vac = true;
      }
      else {
        vac = false
      }
      let a = {
        "user_id": this.Detail.userdetailsModels[0]._id,
        "pet_img": this.img_path,
        "pet_name": this.Pet_Name,
        "pet_type": this.Pet_Type.pet_type_title,
        "pet_breed": this.Pet_Breed.pet_breed,
        "pet_gender": this.Pet_Gender.y,
        "pet_color": this.Pet_Color,
        "pet_weight": +this.Pet_Weight,
        "pet_age": +this.Pet_Age,
        "vaccinated": vac,
        "last_vaccination_date": "" + this.Vaccinated_date,
        "default_status": true,
        "date_and_time": "" + new Date(),
        "mobile_type": "Admin"
      };
      console.log(a);
      this._api.pet_create(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert('Added Successfully');
            this.pet_view();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }

  pet_view() {
    window.scrollTo(0, 0);
    let a = {
      'user_id': this.Detail.userdetailsModels[0]._id
    };
    console.log(a)
    this._api.single_user_detail(a).subscribe(
      (response: any) => {
        console.log(response.Data);
        this.saveInLocal('pet_list', response.Data);
        this.router.navigateByUrl('/admin/Pet_list')
      }
    );


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
        if (width == 100 && height == 100) {
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
}
