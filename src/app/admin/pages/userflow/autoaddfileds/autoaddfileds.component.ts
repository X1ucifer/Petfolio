import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-autoaddfileds',
  templateUrl: './autoaddfileds.component.html',
  styleUrls: ['./autoaddfileds.component.css']
})
export class AutoaddfiledsComponent implements OnInit {
  type: any;

  fields_detail: any;
  data_type: any;
  length: any;

  final_not_match : any;
  fields_mapping_fetch : any;
  converted : any = [];

  converted1 : any = [];

  loading_show : boolean = false;



  rows: any;
  searchQR: any;
  id: any;
  edit_f:boolean = false;

  timeLeft: number = 60;
  interval;

  profolio_list: any = [
    { 'y': "Text" },
    { 'y': "Number" },
    { 'y': "Boolean" }
  ];

  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.fields_list().subscribe(
      (response: any) => {
        console.log(response);
        this.rows = response.Data.reverse();
        console.log(this.rows);
      }
    );
    this.final_not_match = this.getFromLocal("final_not_match");
    this.fields_mapping_fetch = this.getFromLocal("fields_mapping_fetch");
    console.log("dfadsfasdfasdf",this.fields_mapping_fetch);
    console.log("final not match",this.final_not_match);
    this.converted = [];
    for(let a = 0 ; a < this.final_not_match.length; a++){
       let c = {
        "fields": this.final_not_match[a].final_not_match,
        "fields_detail" : 'Test datas',
        "data_type" : { 'y': "Text" },
        "length" : 1,
        "addedby": "Admin"
      }
      this.converted.push(c);
    }
    console.log("converted data", this.converted);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }



  add() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid inputs")
    } else {
      let a = {
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type.y,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);

      this._api.fields_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.type = undefined;
            this.fields_detail = undefined;
            this.data_type = undefined;
            this.length = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  show_edit(item) {
    this.id = item._id;
    this.edit_f = true;
    this.type = item.fields;
    this.fields_detail = item.fields_detail;
    this.data_type = item.data_type;
    this.length = item.length;
  }
  edit() {
    if (this.type == undefined || this.type == '') {
      alert("Please enter valid input")
    } else {
      let a = {
        "_id": this.id,
        "fields": this.type,
        "fields_detail" : this.fields_detail,
        "data_type" : this.data_type,
        "length" : this.length,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.fields_edit(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            alert(response.Message);
            this.edit_f = false;
            this.type = undefined;
            this.fields_detail = undefined;
    this.data_type = undefined;
    this.length = undefined;
            this.ngOnInit();
          } else {
            alert(response.Message);
          }
        }
      );
    }
  }
  delete(id) {
    let a = {
      "_id": id
    }
    this._api.fields_delete(a).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          alert(response.Message);
          this.ngOnInit();
        } else {
          alert(response.Message);
        }
      }
    );
  }
  cancel(){
    this.type = undefined;
    this.edit_f = false;
  }

  before_save_fields() {
    var check_status = 0;
    for(let a = 0 ; a < this.converted.length; a ++){
      if(this.converted[a].fields_detail == '' || this.converted[a].length == 0){
        check_status = 1;
      }
      if(a == this.converted.length - 1){
           if(check_status == 1){
             Swal.fire('Fields should not empty or length should not be 0');
           }else{
            this.save_fields();
            // alert("all are ok");
           }
      }
    }
  }
  save_fields(){
    console.log(this.converted);
    this.loading_show = true;
    this.timeLeft = this.converted.length;
    if(this.loading_show == true) {
      let timerInterval;
      let timeSecond: any = `${this.timeLeft}`;
      Swal.fire({
        // text: `Uploading Data Please Dont close the session + ${this.timeLeft}`,
        title: 'Auto close alert!',
        html: `Uploading Data Please Dont close the session for <b> ${timeSecond} </b>seconds`,
        allowOutsideClick: false,
        timer: this.timeLeft * 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                // b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          // console.log('I was closed by the timer')
        }
      })
    }
    this.interval = setInterval(() => {
    if(this.timeLeft > 0) {
      this.timeLeft--;
      console.log(this.timeLeft);
      // if(this.loading_show == true) {
      //   Swal.fire({
      //     // text: `Uploading Data Please Dont close the session + ${this.timeLeft}`,
      //     showLoaderOnConfirm: true,
      //     allowOutsideClick: false,
      //   });
      //  }
      let a = {
        "fields": this.converted[this.timeLeft].fields,
        "fields_detail" : this.converted[this.timeLeft].fields_detail,
        "data_type" : this.converted[this.timeLeft].data_type.y,
        "length" : this.converted[this.timeLeft].length,
        "addedby": "Admin"
      };
      console.log(a);
      this._api.fields_add(a).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code === 200) {
            // alert(response.Message);
            console.log(response.Message);
            let x = {
               "addedby":response.Data.addedby,
               "check_status":false,
               "createdAt":response.Data.createdAt,
               "data_type":response.Data.data_type,
               "fields":response.Data.fields,
               "fields_detail":response.Data.fields_detail,
               "index":0,
               "length":response.Data.length,
               "updatedAt" : response.Data.updatedAt,
               "__v" : response.Data.__v,
               "_id" : response.Data._id
            }
            this.converted1.push(x);
          } else {
            let x = {
               "addedby":response.Data.addedby,
               "check_status":false,
               "createdAt":response.Data.createdAt,
               "data_type":response.Data.data_type,
               "fields":response.Data.fields,
               "fields_detail":response.Data.fields_detail,
               "index":0,
               "length":response.Data.length,
               "updatedAt" : response.Data.updatedAt,
               "__v" : response.Data.__v,
               "_id" : response.Data._id
            }
            this.converted1.push(x);
            console.log(response.Message);
          }
        }
      );
    } else {
      clearInterval(this.interval);
      this.loading_show = false;
      Swal.fire('uploaded Successfully');
      console.log(this.converted1);
      this.save_fields1();
    }
  },2000)
  }



  save_fields1(){

   console.log(this.fields_mapping_fetch);
    this._api.fields_mapping_fetch(this.fields_mapping_fetch).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code === 200) {
          // alert(response.Message);
          console.log(response.Message);
          console.log(response.Data);
          for(let v = 0 ; v < this.converted1.length; v ++){
            response.Data[0].fields_details.push(this.converted1[v]);
            if(v == this.converted1.length - 1){
              this.update_fields(this.fields_mapping_fetch.bank,this.fields_mapping_fetch.product,this.fields_mapping_fetch.portfolio,this.converted1);
            }
          }
          // this.converted1.push(response.Data);
        } else {
          console.log(response.Message);
          this.add_fields(this.fields_mapping_fetch.bank,this.fields_mapping_fetch.product,this.fields_mapping_fetch.portfolio,this.converted1);
        }
      }
    );







    // console.log(this.converted1);
    // this.timeLeft = this.converted1.length;
    // this.interval = setInterval(() => {
    //   if(this.timeLeft > 0) {
    //     this.timeLeft--;
    //     console.log(this.timeLeft);
    //     let a = {
    //     "fields_details": this.converted1,
    //     // "_id": "60018dd27d01261ddab1e5ee",
    //     "bank": "Hari",
    //     "product": "Business Vehicle",
    //     "portfolio": "PreDue-Collections"
    //     };
    //     console.log(a);
    //     this._api.fields_add(a).subscribe(
    //       (response: any) => {
    //         console.log(response);
    //         if (response.Code === 200) {
    //           // alert(response.Message);
    //           console.log(response.Message);
    //           this.converted1.push(response.Data);
    //         } else {
    //           console.log(response.Message);
    //         }
    //       }
    //     );
    //   } else {
    //     clearInterval(this.interval);
    //     // this.save_fields1();

    //   }
    // },2000)
  }



  update_fields(bank,product,portfolio,fields_details){
    let a = {
      bank : bank,
      product : product,
      portfolio : portfolio,
      fields_details : fields_details
    }
    console.log(a);
    this._api.fields_mapping_edit(a).subscribe(
      (response: any) => {
        Swal.fire('All datas Update successfully');
       }
    );
  }

  add_fields(bank,product,portfolio,fields_details){
      let a = {
        bank : bank,
        product : product,
        portfolio : portfolio,
        fields_details : fields_details
      }
      console.log(a);
      this._api.fields_mapping_adds(a).subscribe(
        (response: any) => {
          Swal.fire('All datas added successfully');
        }
        );
  }

  openworklist(){
    Swal.fire({
      // title: 'Are you sure?',
      text: 'Enter all the fields in the table',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {

    })

  }





}
