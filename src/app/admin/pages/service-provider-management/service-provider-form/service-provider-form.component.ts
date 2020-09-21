import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-service-provider-form',
  templateUrl: './service-provider-form.component.html',
  styleUrls: ['./service-provider-form.component.css']
})
export class ServiceProviderFormComponent implements OnInit {

  service_type:any;
  Education:any;
  Specialization:any;
  completion:any;
  Experience:any;
  handled:any;
  Specializationarray:any =[];
  years:any=[];
  address:any;
  Exp:any=[
    {"y":"1+ years"},
    {"y":"5+ years"},
    {"y":"10+ years"},
    {"y":"15+ years"},
    {"y":"20+ years"},
    {"y":"25+ years"},
    {"y":"30+ years"},
  ];
  tpyearray:any=[
    {"y":"Doctor"},
    {"y":"Vendor"},
    {"y":"Customer"},
  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    for(let i=1980; i< 2020; i++){
      this.years.push({"y": i+1})
    }
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Service_Provider_Management')
  }
  addSpecialization(){
    
    if(this.Specialization != undefined && this.Specialization !=''){
      let obj={"Specialization":this.Specialization}
      this.Specializationarray.push(obj);
      this.Specialization = undefined;
    }
  }
  remove_Specialization(i){
      this.Specializationarray.splice(i, 1); 
    
  }

}
