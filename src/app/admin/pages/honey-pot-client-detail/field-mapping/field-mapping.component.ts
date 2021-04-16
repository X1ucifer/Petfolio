import { Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-field-mapping',
  templateUrl: './field-mapping.component.html',
  styleUrls: ['./field-mapping.component.css']
})
export class FieldMappingComponent implements OnInit {
  cli_type:any;
  booleans = false;
  Bank_list : any = [];
  product_list :  any = [];
  portfolio_list :  any = [];
  rows: any;
  selectedRows: any;
  selectedProducts: any[]= [];

  displayPosition2 : any;

  submit_button = false;

  Bank_list_gets : any;
  product_list_gets  : any;
  portfolio_list_gets  : any;


  final_data = [];

  types: any = [
    { "y": "Banks" },
    { "y": "Finance companies" }  ,
    { "y": "Real Estate" },
    { "y": "Telecom" },
    { "y": "Others" },
  ];
//  rows:any = [{ type: "Dog", name: "dog1" },
//     { type: "Cat", name: "cat1" },
//     { type: "Cat", name: "cat1" },
//     { type: "Cat", name: "cat1" },]
  constructor(
    private router: Router,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private http: HttpClient,
  ) {
    this.Bank_list_get();
    this.product_list_get();
    this.portfolio_list_get();
   }


  refresh (){
   this.ngOnInit();
   }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this._api.fields_list().subscribe(
        (response: any) => {
          console.log(response);
          this.final_data = [];
          for(let a = 0 ; a < response.Data.length; a ++){
            let c = {
              index : a,
              check_status : false,
              addedby: response.Data[a].addedby,
              createdAt: response.Data[a].createdAt,
              data_type: response.Data[a].data_type,
              fields: response.Data[a].fields,
              fields_detail: response.Data[a].fields_detail,
              length: response.Data[a].length,
              updatedAt: response.Data[a].updatedAt,
              __v: response.Data[a].__v,
              _id: response.Data[a]._id,
            }
            this.final_data.push(c);
           if(a == response.Data.length - 1){
            this.rows = this.final_data.reverse();
            console.log(this.rows);
           }
          }
        }
      );
  }

  Bank_list_get() {

    // this._api.client_list().subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     let list = response.Data.reverse();
    //     for (let i = 0; i < list.length; i++) {
    //       let obj = { "y": list[i].Clinet_name};
    //       this.Bank_list.push(obj);
    //     }
    //     console.log(this.Bank_list);
    //   }
    // );


    this._api.user_details_list().subscribe(
      (response: any) => {
        console.log(response);
        this.Bank_list = [];
       var hash = response.Data.reduce((p,c) => (p[c.bankname] ? p[c.bankname].push(c) : p[c.bankname] = [c],p) ,{});
       var  newData = Object.keys(hash).map(k => ({color: k, car: hash[k]}));
       console.log(newData);
        for(let a = 0 ; a < newData.length; a ++){
          let x =  { 'y': newData[a].color}
          this.Bank_list.push(x);
        }
        // this.rows = response.Data.reverse();
        // console.log(this.rows);
      }
    );



  }


  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }

  product_list_get() {


    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }


    this._api.product_type_list(a).subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].product_type};
          this.product_list.push(obj);
        }
        console.log(this.product_list);
      }
    );
  }

  fetch_field_list() {
    this.ngOnInit();
    let a = {
      bank : this.Bank_list_gets.y,
      product : this.product_list_gets.y,
      portfolio : this.portfolio_list_gets.y,
    }
    console.log(a);
    this._api.fields_mapping_fetch(a).subscribe(
      (response: any) => {
        if(response.Code === 404){
          alert("No Data Found");
          this.selectedProducts = [];
          this.submit_button = false;
          this.ngOnInit();
        }else{
          console.log(response.Data);
          this.selectedProducts = response.Data[0].fields_details;
          this.submit_button = true;
          for(let c = 0 ; c < this.selectedProducts.length ; c ++){
            for(let d = 0 ; d < this.rows.length ; d ++ ){
              if(this.rows[d]._id == this.selectedProducts[c]._id){
                this.rows[d].check_status = true;
              }
            }
          }
        }
      }
    );
  }


  field_mapping_add() {
    let a = {
      bank : this.Bank_list_gets.y,
      product : this.product_list_gets.y,
      portfolio : this.portfolio_list_gets.y,
      fields_details : this.selectedProducts
    }
    console.log(a);
    this._api.fields_mapping_adds(a).subscribe(
      (response: any) => {
        if(response.Code == 200){
          alert("Added Successfully");
          let c = {
            bank : this.Bank_list_gets.y,
            product : this.product_list_gets.y,
            portfolio : this.portfolio_list_gets.y,
          }
          console.log(c);
          this._api.fields_mapping_fetch(c).subscribe(
            (response: any) => {
              if(response.Code === 404){
                alert("No Data Found");
                this.selectedProducts = [];
                this.submit_button = false;
                this.ngOnInit();
              }else{
                console.log(response.Data);
                this.selectedProducts = response.Data[0].fields_details
                this.submit_button = true;
                for(let c = 0 ; c < this.selectedProducts.length ; c ++){
                  for(let d = 0 ; d < this.rows.length ; d ++ ){
                    if(this.rows[d]._id == this.selectedProducts[c]._id){
                      this.rows[d].check_status = true;
                    }
                  }
                }
              }
            }
          );
        }
      }
    );
  }


  bulk_upload() {
    this.displayPosition2 = true;
  }

  field_mapping_edits() {
    let a = {
      bank : this.Bank_list_gets.y,
      product : this.product_list_gets.y,
      portfolio : this.portfolio_list_gets.y,
      fields_details : this.selectedProducts
    }
    console.log(a);
    this._api.fields_mapping_edit(a).subscribe(
      (response: any) => {
        if(response.Code == 200){
          alert("Added Successfully");
          let c = {
            bank : this.Bank_list_gets.y,
            product : this.product_list_gets.y,
            portfolio : this.portfolio_list_gets.y,
          }
          console.log(c);
          this._api.fields_mapping_fetch(c).subscribe(
            (response: any) => {
              if(response.Code === 404){
                alert("No Data Found");
                this.selectedProducts = [];
                this.submit_button = false;
                this.ngOnInit();
              }else{
                console.log(response.Data);
                this.selectedProducts = response.Data[0].fields_details
                this.submit_button = true;
                for(let c = 0 ; c < this.selectedProducts.length ; c ++){
                  for(let d = 0 ; d < this.rows.length ; d ++ ){
                    if(this.rows[d]._id == this.selectedProducts[c]._id){
                      this.rows[d].check_status = true;
                    }
                  }
                }
              }
            }
          );
        }
      }
    );
  }


  portfolio_list_get() {

    console.log("Client Id Detail",this.getFromLocal("Client_ID"))
    let a = {
      client_id : this.getFromLocal("Client_ID")
    }

    this._api.portfolio_type_list(a).subscribe(
      (response: any) => {
        console.log(response);
        let list = response.Data.reverse();
        for (let i = 0; i < list.length; i++) {
          let obj = { "y": list[i].portfolio_type};
          this.portfolio_list.push(obj);
        }
        console.log(this.portfolio_list);
        this.booleans = true;
      }
    );
  }



  changeStatus(index,status){
    console.log(index,status);
    this.rows[index].check_status = status;
    console.log(this.rows[index]);
    if(status === true){
      console.log("True");
      this.selectedProducts.push(this.rows[index]);
    }
    else if(status === false)
    {
      console.log("False");
      for(let a = 0 ; a < this.selectedProducts.length; a++){
            if(this.selectedProducts[a]._id == this.rows[index]._id){
              this.selectedProducts.splice(a, 1);
            }
      }
    }

  }



  removeSelected(item,index) {
     console.log(item);
     for(let a = 0 ; a < this.rows.length; a ++){
      if(this.rows[a]._id == item._id){
        this.rows[a].check_status = false;
        this.selectedProducts.splice(index, 1);
      }
     }
  }

}
