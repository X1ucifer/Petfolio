import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
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
    return this.http.post(this.apiUrl + 'usertype/admin_delete', data);
  }
  user_type_filter_date(data) {
    return this.http.post(this.apiUrl + 'usertype/filter_date', data);
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
  pet_type_filter_date(data) {
    return this.http.post(this.apiUrl + 'pettype/filter_date', data);
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
  pet_breed_filter_date(data) {
    return this.http.post(this.apiUrl + 'breedtype/filter_date', data);
  }
  //////////////


  //PET HEALTH CHECKUP TYPE///

  pet_add_checkup_type(data){
    return this.http.post(this.apiUrl+ 'changeupdated',data);
  }

  pet_list_checkup_type(){
    return this.http.get(this.apiUrl + '');
  }

  pet_view_checkup_type(id){
    return this.http.get(this.apiUrl + '?id='+id);
  }

  pet_update_checkup_type(data){
    return this.http.post(this.apiUrl + '',data);
  }

  pet_delete_checkup_type(id){
    return this.http.delete(this.apiUrl + '?id='+id);
  }


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
  homebanner_filter_date(data) {
    return this.http.post(this.apiUrl + 'homebanner/filter_date', data);
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
  doctor_spec_filter_date(data) {
    return this.http.post(this.apiUrl + 'doctor_spec/filter_date', data);
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
    return this.http.post(this.apiUrl + 'doctordetails/adminedit', data);
  }
  doctor_details_create(data) {
    return this.http.post(this.apiUrl + 'doctordetails/create', data);
  }
  doctor_details_delete(data) {
    return this.http.post(this.apiUrl + 'doctordetails/delete', data);
  }
  doctor_detailsfilter_date(data) {
    return this.http.post(this.apiUrl + 'doctordetails/filter_date', data);
  }

  userlivedetails_delete(data) {
    return this.http.post(this.apiUrl + 'livedoctordetails/admin_delete', data);
  }
  vendor_details_list() {
    return this.http.get(this.apiUrl + 'product_vendor/getlist');
  }
  vendor_details_edit(data) {
    return this.http.post(this.apiUrl + 'product_vendor/edit', data);
  }
  vendor_detailsfilter_date(data) {
    return this.http.post(this.apiUrl + 'product_vendor/filter_date', data);
  }
  vendor_delete(data) {
    return this.http.post(this.apiUrl + 'product_vendor/delete', data);
  }
  //////////////
  service_provider_list() {
    return this.http.get(this.apiUrl + 'service_provider/getlist');
  }
  service_provider_insert(data) {
    return this.http.post(this.apiUrl + 'service_provider/create', data);
  }
  service_provider_edit(data) {
    return this.http.post(this.apiUrl + 'service_provider/edit', data);
  }
  service_provider_create(data) {
    return this.http.post(this.apiUrl + 'service_provider/create', data);
  }
  service_provider_delete(data) {
    return this.http.post(this.apiUrl + 'service_provider/admin_delete', data);
  }
  service_providerfilter_date(data) {
    return this.http.post(this.apiUrl + 'service_provider/filter_date', data);
  }



  dashboard_count() {
    return this.http.get(this.apiUrl + 'userdetails/adminpanel/Dashboard/count');
  }


  prices_count() {
    return this.http.get(this.apiUrl + 'appointments/gettotalprice');
  }
  user_list() {
    return this.http.get(this.apiUrl + 'userdetails/getlist');
  }
  user_filter_date(data) {
    return this.http.post(this.apiUrl + 'userdetails/filter_date', data);
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
  user_edit(data) {
    return this.http.post(this.apiUrl + 'userdetails/edit', data);
  }
  appointment_list() {
    return this.http.get(this.apiUrl + 'appointments/getlist');
  }
  appointment_filter_date(data) {
    return this.http.post(this.apiUrl + 'appointments/filter_date', data);
  }
  appointment_delete(data) {
    return this.http.post(this.apiUrl + 'appointments/delete', data);
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
  pet_edit(data) {
    return this.http.post(this.apiUrl + 'petdetails/edit', data);
  }
  demoscreen_create(data) {
    return this.http.post(this.apiUrl + 'demoscreen/create', data);
  }
  demoscreen_edit(data) {
    return this.http.post(this.apiUrl + 'demoscreen/edit', data);
  }
  demoscreen_delete(data) {
    return this.http.post(this.apiUrl + 'demoscreen/delete', data);
  }
  demoscreen_list() {
    return this.http.get(this.apiUrl + 'demoscreen/getlist');
  }
  demoscreen_filter_date(data) {
    return this.http.post(this.apiUrl + 'demoscreen/filter_date', data);
  }


  payment_managements() {
    return this.http.get(this.apiUrl + 'userdetails/fetch_payment_Details');
  }




  splashscreen_create(data) {
    return this.http.post(this.apiUrl + 'splashscreen/create', data);
  }
  splashscreen_edit(data) {
    return this.http.post(this.apiUrl + 'splashscreen/edit', data);
  }
  splashscreen_delete(data) {
    return this.http.post(this.apiUrl + 'splashscreen/delete', data);
  }
  splashscreen_list() {
    return this.http.get(this.apiUrl + 'splashscreen/getlist');
  }
  splashscreen_filter_date(data) {
    return this.http.post(this.apiUrl + 'splashscreen/filter_date', data);
  }


  SP_services_create(data) {
    return this.http.post(this.apiUrl + 'SP_services/create', data);
  }
  SP_services_edit(data) {
    return this.http.post(this.apiUrl + 'SP_services/edit', data);
  }
  SP_services_delete(data) {
    return this.http.post(this.apiUrl + 'SP_services/delete', data);
  }
  SP_services_list() {
    return this.http.get(this.apiUrl + 'SP_services/getlist');
  }
  SP_services_filter_date(data) {
    return this.http.post(this.apiUrl + 'SP_services/filter_date', data);
  }

//  cancel appointment
  cancel_appointment() {
    return this.http.get(this.apiUrl + 'appointments/listing_cancelled');
  }

//  payment
  pay_filter_date(data) {
    return this.http.post(this.apiUrl + 'userdetails/fetch_payment_Details', data);
  }
  payment_management () { return this.http.get(this.apiUrl + 'userdetails/fetch_payment_Details');}
  pay_list () { return this.http.get(this.apiUrl + 'userdetails/fetch_payment_Details');}

  sp_total_price() {
    return this.http.get(this.apiUrl + 'userdetails/fetch_payment_Details');
  }
  payment_management_list() {
    return this.http.get(this.apiUrl + 'userdetails/fetch_payment_Details');
  }

  product_cate_create(data) {
    return this.http.post(this.apiUrl + 'product_cate/create', data);
  }
  product_cate_edit(data) {
    return this.http.post(this.apiUrl + 'product_cate/edit', data);
  }
  product_cate_delete(data) {
    return this.http.post(this.apiUrl + 'product_cate/delete', data);
  }
  product_cate_list() {
    return this.http.get(this.apiUrl + 'product_cate/getlist');
  }
  product_cate_filter_date(data) {
    return this.http.post(this.apiUrl + 'product_cate/filter_date', data);
  }


  product_subcat_create(data) {
    return this.http.post(this.apiUrl + 'product_subcat/create', data);
  }
  product_subcat_edit(data) {
    return this.http.post(this.apiUrl + 'product_subcat/edit', data);
  }
  product_subcat_delete(data) {
    return this.http.post(this.apiUrl + 'product_subcat/delete', data);
  }
  product_subcat_list() {
    return this.http.get(this.apiUrl + 'product_subcat/getlist');
  }
  product_subcat_filter_date(data) {
    return this.http.post(this.apiUrl + 'product_subcat/filter_date', data);
  }
  product_subcat_by_id(data) {
    return this.http.post(this.apiUrl + 'product_subcat/getlist_id', data);
  }

  product_details_create(data) {
    return this.http.post(this.apiUrl + 'product_details/create', data);
  }
  product_details_edit(data) {
    return this.http.post(this.apiUrl + 'product_details/edit', data);
  }
  product_details_delete(data) {
    return this.http.post(this.apiUrl + 'product_details/delete', data);
  }
  product_details_list() {
    return this.http.get(this.apiUrl + 'product_details/getlist');
  }
  product_details_filter_date(data) {
    return this.http.post(this.apiUrl + 'product_details/filter_date', data);
  }

notification_send(data){
  return this.http.post(this.apiUrl + 'notification/admin_send_notification', data);

}
live_check(data){
  return this.http.post(this.apiUrl + 'livedoctordetails/fetch_by_user_id', data);
}
livedoctordetails_create(data){
  return this.http.post(this.apiUrl + 'livedoctordetails/create', data);
}
livedoctordetails_edit(data){
  return this.http.post(this.apiUrl + 'livedoctordetails/edit', data);
}
livedoctordetails_getlist(){
  return this.http.get(this.apiUrl + 'livedoctordetails/getlist');
}
sp_appointments_getlist(){
  return this.http.get(this.apiUrl + 'sp_appointments/getlist');
}
petdetails_dropdownslist(){
  return this.http.get(this.apiUrl + 'petdetails/mobile/dropdownslist');
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


  location_details(lat,lng){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyD9sxe06VnCg13SIyxJjTxq0gd4vj4bA48');
  }

}
