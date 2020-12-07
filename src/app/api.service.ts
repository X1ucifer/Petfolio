import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  constructor(private http: HttpClient) { }


  CreateDoctor(data) {
    return this.http.post(this.apiUrl + 'user/register', data);
  }

  CreateDoctor1(data) {
    return this.http.post(this.apiUrl + 'doctor/edit', data);
  }


  /////Petfolio Admin API Start///////

  ////User type API//////
  user_type_list() {
    return this.http.get(this.apiUrl + 'usertype/admin/getlist');
  }
  user_type_insert(data) {
    return this.http.post(this.apiUrl + 'usertype/create', data);
  }
  user_type_edit(data) {
    return this.http.post(this.apiUrl + 'usertype/edit', data);
  }
  user_type_delete(data) {
    return this.http.post(this.apiUrl + 'usertype/delete', data);
  }
  //////////////


  ////Pet type API//////
  pet_type_list() {
    return this.http.get(this.apiUrl + 'pettype/getlist');
  }
  pet_type_insert(data) {
    return this.http.post(this.apiUrl + 'pettype/create', data);
  }
  pet_type_edit(data) {
    return this.http.post(this.apiUrl + 'pettype/edit', data);
  }
  pet_type_delete(data) {
    return this.http.post(this.apiUrl + 'pettype/delete', data);
  }
  //////////////


  ////Pet breed API//////
  pet_breed_list() {
    return this.http.get(this.apiUrl + 'breedtype/admin/getlist_id');
  }
  pet_breed_insert(data) {
    return this.http.post(this.apiUrl + 'breedtype/create', data);
  }
  pet_breed_edit(data) {
    return this.http.post(this.apiUrl + 'breedtype/edit', data);
  }
  pet_breed_delete(data) {
    return this.http.post(this.apiUrl + 'breedtype/delete', data);
  }
  //////////////


  ////pet lover home banner API//////
  homebanner_list() {
    return this.http.get(this.apiUrl + 'homebanner/getlist');
  }
  homebanner_insert(data) {
    return this.http.post(this.apiUrl + 'homebanner/create', data);
  }
  homebanner_edit(data) {
    return this.http.post(this.apiUrl + 'homebanner/edit', data);
  }
  homebanner_delete(data) {
    return this.http.post(this.apiUrl + 'homebanner/delete', data);
  }
  //////////////


  ////doctor_spec_API//////
  doctor_spec_list() {
    return this.http.get(this.apiUrl + 'doctor_spec/getlist');
  }
  doctor_spec_insert(data) {
    return this.http.post(this.apiUrl + 'doctor_spec/create', data);
  }
  doctor_spec_edit(data) {
    return this.http.post(this.apiUrl + 'doctor_spec/edit', data);
  }
  doctor_spec_delete(data) {
    return this.http.post(this.apiUrl + 'doctor_spec/delete', data);
  }
  //////////////



  ////doctor_spec_API//////
  doctor_details_list() {
    return this.http.get(this.apiUrl + 'doctordetails/admin/getlist');
  }
  doctor_details_insert(data) {
    return this.http.post(this.apiUrl + 'doctordetails/create', data);
  }
  doctor_details_edit(data) {
    return this.http.post(this.apiUrl + 'doctordetails/edit', data);
  }
  doctor_details_delete(data) {
    return this.http.post(this.apiUrl + 'doctordetails/delete', data);
  }
  //////////////

  dashboard_count() {
    return this.http.get(this.apiUrl + 'userdetails/adminpanel/Dashboard/count');
  }
  user_list() {
    return this.http.get(this.apiUrl + 'userdetails/getlist');
  }
  single_user_detail(data) {
    return this.http.post(this.apiUrl + 'userdetails/fetch_all_details', data);
  }
  user_delete(data) {
    return this.http.post(this.apiUrl + 'userdetails/delete', data);
  }
  user_create(data) {
    return this.http.post(this.apiUrl + 'userdetails/create', data);
  }
  appointment_list() {
    return this.http.get(this.apiUrl + 'appointments/getlist');
  }
  pet_detail_delete(data) {
    return this.http.post(this.apiUrl + 'petdetails/delete', data);
  }
  customer_location_delete(data) {
    return this.http.post(this.apiUrl + 'locationdetails/delete', data);
  }

  pet_create(data) {
    return this.http.post(this.apiUrl + 'petdetails/create', data);
  }

  demoscreen_create(data) {
    return this.http.post(this.apiUrl + 'demoscreen/create', data);
  }
  demoscreen_delete(data) {
    return this.http.post(this.apiUrl + 'demoscreen/delete', data);
  }
  demoscreen_list() {
    return this.http.get(this.apiUrl + 'demoscreen/getlist');
  }

  splashscreen_create(data) {
    return this.http.post(this.apiUrl + 'splashscreen/create', data);
  }
  splashscreen_delete(data) {
    return this.http.post(this.apiUrl + 'splashscreen/delete', data);
  }
  splashscreen_list() {
    return this.http.get(this.apiUrl + 'splashscreen/getlist');
  }









  // DoctorList() {
  //   return this.http.get(this.apiUrl + 'doctor/getlist');
  // }

  // EditDoctor(data){
  //   return this.http.post(this.apiUrl + 'doctor/edit', data);
  // }

  // CreateLiveDoctor(data) {
  //   return this.http.post(this.apiUrl + 'livedoctors/signup', data);
  // }

  // EditLiveDoctor(data) {
  //   return this.http.post(this.apiUrl + 'livedoctors/liveedits', data);
  // }




  // LiveDoctorList() {
  //   return this.http.get(this.apiUrl + 'livedoctors/getlist');
  // }

  // LiveDeleteDoctor(data) {
  //   return this.http.delete(this.apiUrl + 'livedoctors/delete/' + data);
  // }

  // DeleteDoctor(data) {
  //   return this.http.delete(this.apiUrl + 'doctor/delete/' + data);
  // }


  // UserList() {
  //   return this.http.get(this.apiUrl + 'user/getlist');
  // }

  // DeleteUser(data) {
  //   return this.http.delete(this.apiUrl + 'user/delete/' + data);
  // }



  // PatientList() {
  //   return this.http.get(this.apiUrl + 'getlist');
  // }

  // DeletePatient(data) {
  //   return this.http.delete(this.apiUrl + 'delete/' + data);
  // }



  // GetFamilyList(data) {
  //   return this.http.post(this.apiUrl + 'family/getlist', data);
  // }



  // DeleteMembers(data) {
  //   return this.http.post(this.apiUrl + 'family/delete', data);
  // }






  // specializationList() {
  //   return this.http.get<any>(this.apiUrl + 'specialization/getlist');
  // }

  // Createspecialization(data) {
  //   return this.http.post(this.apiUrl + 'specialization/create', data);
  // }
  // Editspecialization(data) {
  //   return this.http.post(this.apiUrl + 'specialization/edit', data);
  // }
  // DeleteSpecialisation(data) {
  //   return this.http.post(this.apiUrl + 'specialization/delete', data);
  // }




  // Banner_List() {
  //   return this.http.get(this.apiUrl + 'homebanner/getlist');
  // }


  // CreateBanner(data) {
  //   return this.http.post(this.apiUrl + 'homebanner/create', data);
  // }


  // DeleteBanner(data) {
  //   return this.http.delete(this.apiUrl + 'homebanner/delete/' + data);
  // }


  // Symptoms_list() {
  //   return this.http.get(this.apiUrl + 'symptoms/getlist');
  // }


  // CreateSymptoms(data) {
  //   return this.http.post(this.apiUrl + 'symptoms/create', data);
  // }
  // EditSymptoms(data) {
  //   return this.http.post(this.apiUrl + 'symptoms/edit', data);
  // }
  // deleteSymptoms(data) {
  //   return this.http.post(this.apiUrl + 'symptoms/delete', data);
  // }



  // editSymptoms(data) {
  //   return this.http.post(this.apiUrl + 'symptoms/edit', data);
  // }

  // languageList() {
  //   return this.http.get<any>(this.apiUrl + 'languages/getlist');
  // }
  // doctor_title_lists(){
  //   return this.http.get<any>(this.apiUrl + 'doctor/getdoclist_title');
  // }
  // createcompany(data) {
  //   return this.http.post(this.apiUrl + 'company/create', data);
  // }
  // companylist() {
  //   return this.http.get<any>(this.apiUrl + 'company/getlist');
  // }
  // Deletecompany(data) {
  //   return this.http.post(this.apiUrl + 'company/delete', data);
  // }

  // Editcompany(data) {
  //   return this.http.post(this.apiUrl + 'company/edit', data);
  // }

  // appointment() {
  //   return this.http.get<any>(this.apiUrl + 'appointment/getlist');
  // }
  // companyget() {
  //   return this.http.get<any>(this.apiUrl + 'company/getlist');
  // }
  // forunlive1(data) {
  //   return this.http.post(this.apiUrl + 'livedoctors/edits', data);
  // }
  // forunlive2(data) {
  //   return this.http.post(this.apiUrl + 'livedoctors/liveedits', data);
  // }
  // doctor_calendar(data) {
  //   return this.http.post(this.apiUrl + 'doctortime/doctor_ava_all', data);
  // }

}
