import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {
  Name: any;
  Education: any;
  Specialization: any;
  completion: any;
  Experience: any;
  handled: any;
  Specializationarray: any = [];
  years: any = [];
  address: any;
  Exp: any = [
    { "y": "1+ years" },
    { "y": "5+ years" },
    { "y": "10+ years" },
    { "y": "15+ years" },
    { "y": "20+ years" },
    { "y": "25+ years" },
    { "y": "30+ years" },
  ];
  Experiencearray:any=[];
  Completionarray:any=[];
  handledarray:any=[];
  uploadedFiles: any[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    for (let i = 1980; i < 2020; i++) {
      this.years.push({ "y": i + 1 })
    }
  }
  cancel() {
    this.router.navigateByUrl('/admin_panel/Doctor')
  }
  addSpecialization() {

    if (this.Specialization != undefined && this.Specialization != '') {
      let obj = { "Specialization": this.Specialization }
      this.Specializationarray.push(obj);
      this.Specialization = undefined;
    }
  }
  remove_Specialization(i) {
    this.Specializationarray.splice(i, 1);

  }
  addcompletion() {

    if (this.completion != undefined && this.completion != '') {
      let obj = { "completion": this.completion }
      this.Completionarray.push(obj);
      this.completion = undefined;
    }
  }
  remove_completion(i) {
    this.Completionarray.splice(i, 1);

  }
  addExperience() {

    if (this.Experience != undefined && this.Experience != '') {
      let obj = { "Experience": this.Experience }
      this.Experiencearray.push(obj);
      this.Experience = undefined;
    }
  }
  remove_Experience(i) {
    this.Experiencearray.splice(i, 1);

  }
  addhandled() {

    if (this.handled != undefined && this.handled != '') {
      let obj = { "handled": this.handled }
      this.handledarray.push(obj);
      this.handled = undefined;
    }
  }
  remove_handled(i) {
    this.handledarray.splice(i, 1);

  }
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(this.uploadedFiles)
    }

  }

}
