import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  imgUrl = environment.imageURL;
  UploadedExcel: any;
  constructor(private http: HttpClient) { }


  Activity_create(data) {
    return this.http.post<any>(this.apiUrl + 'activity/create',data);
  }


  entity_create(data) {
    return this.http.post(this.apiUrl + 'entity_user/create', data);
  }
  entity_edit(data) {
    return this.http.post(this.apiUrl + 'entity_user/edit', data);
  }
  entity_list() {
    return this.http.get<any>(this.apiUrl + 'entity_user/getlist' );
  }
  entity_delete(data) {
    return this.http.post(this.apiUrl + 'entity_user/delete', data);
  }

  client_create(data) {
    return this.http.post(this.apiUrl + 'client_details/create', data);
  }
  client_edit(data) {
    return this.http.post(this.apiUrl + 'client_details/edit', data);
  }
  client_list() {
    return this.http.get<any>(this.apiUrl + 'client_details/getlist' );
  }
  client_delete(data) {
    return this.http.post(this.apiUrl + 'client_details/delete', data);
  }

  client_type_add(data) {
    return this.http.post(this.apiUrl + 'client_type/create', data);
  }
  client_type_edit(data) {
    return this.http.post(this.apiUrl + 'client_type/edit', data);
  }
  client_type_delete(data) {
    return this.http.post(this.apiUrl + 'client_type/delete', data);
  }
  client_type_list() {
    return this.http.get<any>(this.apiUrl + 'client_type/getlist' );
  }

  portfolio_type_add(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/create', data);
  }
  portfolio_type_edit(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/edit', data);
  }
  portfolio_type_delete(data) {
    return this.http.post(this.apiUrl + 'portfolio_type/delete', data);
  }
  portfolio_type_list(data) {
    return this.http.get<any>(this.apiUrl + 'portfolio_type/getlist', data );
  }
  product_type_add(data) {
    return this.http.post(this.apiUrl + 'product_type/create', data);
  }
  product_type_edit(data) {
    return this.http.post(this.apiUrl + 'product_type/edit', data);
  }
  product_type_delete(data) {
    return this.http.post(this.apiUrl + 'product_type/delete', data);
  }
  product_type_list(data) {
    return this.http.get<any>(this.apiUrl + 'product_type/getlist',data );
  }


  fields_add(data) {
    return this.http.post(this.apiUrl + 'fields/create', data);
  }
  fields_edit(data) {
    return this.http.post(this.apiUrl + 'fields/edit', data);
  }
  fields_delete(data) {
    return this.http.post(this.apiUrl + 'fields/delete', data);
  }
  fields_list() {
    return this.http.get<any>(this.apiUrl + 'fields/getlist' );
  }


  state_details_add(data) {
    return this.http.post(this.apiUrl + 'state_details/create', data);
  }
  state_details_edit(data) {
    return this.http.post(this.apiUrl + 'state_details/edit', data);
  }
  state_details_delete(data) {
    return this.http.post(this.apiUrl + 'state_details/delete', data);
  }
  state_details_list() {
    return this.http.get<any>(this.apiUrl + 'state_details/getlist' );
  }
  document_type_add(data) {
    return this.http.post(this.apiUrl + 'document_type/create', data);
  }
  document_type_edit(data) {
    return this.http.post(this.apiUrl + 'document_type/edit', data);
  }
  document_type_delete(data) {
    return this.http.post(this.apiUrl + 'document_type/delete', data);
  }
  document_type_list() {
    return this.http.get<any>(this.apiUrl + 'document_type/getlist' );
  }

  account_type_add(data) {
    return this.http.post(this.apiUrl + 'account_type/create', data);
  }
  account_type_edit(data) {
    return this.http.post(this.apiUrl + 'account_type/edit', data);
  }
  account_type_delete(data) {
    return this.http.post(this.apiUrl + 'account_type/delete', data);
  }
  account_type_list() {
    return this.http.get<any>(this.apiUrl + 'account_type/getlist' );
  }

  reportingto_type_add(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/create', data);
  }
  reportingto_type_edit(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/edit', data);
  }
  reportingto_type_delete(data) {
    return this.http.post(this.apiUrl + 'reportingto_type/delete', data);
  }
  reportingto_type_list() {
    return this.http.get<any>(this.apiUrl + 'reportingto_type/getlist' );
  }


  designation_type_add(data) {
    return this.http.post(this.apiUrl + 'designation_type/create', data);
  }
  designation_type_edit(data) {
    return this.http.post(this.apiUrl + 'designation_type/edit', data);
  }
  designation_type_delete(data) {
    return this.http.post(this.apiUrl + 'designation_type/delete', data);
  }
  designation_type_list() {
    return this.http.get<any>(this.apiUrl + 'designation_type/getlist' );
  }

  currency_type_add(data) {
    return this.http.post(this.apiUrl + 'currency_type/create', data);
  }
  currency_type_edit(data) {
    return this.http.post(this.apiUrl + 'currency_type/edit', data);
  }
  currency_type_delete(data) {
    return this.http.post(this.apiUrl + 'currency_type/delete', data);
  }
  currency_type_list() {
    return this.http.get<any>(this.apiUrl + 'currency_type/getlist' );
  }

  bucket_type_add(data) {
    return this.http.post(this.apiUrl + 'bucket_type/create', data);
  }
  bucket_type_edit(data) {
    return this.http.post(this.apiUrl + 'bucket_type/edit', data);
  }
  bucket_type_delete(data) {
    return this.http.post(this.apiUrl + 'bucket_type/delete', data);
  }
  bucket_type_list() {
    return this.http.get<any>(this.apiUrl + 'bucket_type/getlist' );
  }

  products_detatils_add(data) {
    return this.http.post(this.apiUrl + 'products_detatils/create', data);
  }
  products_detatils_edit(data) {
    return this.http.post(this.apiUrl + 'products_detatils/edit', data);
  }
  products_detatils_delete(data) {
    return this.http.post(this.apiUrl + 'products_detatils/delete', data);
  }
  products_detatils_list() {
    return this.http.get<any>(this.apiUrl + 'products_detatils/getlist' );
  }

  userrole_add(data) {
    return this.http.post(this.apiUrl + 'userrole/create', data);
  }
  userrole_edit(data) {
    return this.http.post(this.apiUrl + 'userrole/edit', data);
  }
  userrole_delete(data) {
    return this.http.post(this.apiUrl + 'userrole/delete', data);
  }
  userrole_list() {
    return this.http.get<any>(this.apiUrl + 'userrole/getlist' );
  }

  usertype_add(data) {
    return this.http.post(this.apiUrl + 'usertype/create', data);
  }
  usertype_edit(data) {
    return this.http.post(this.apiUrl + 'usertype/edit', data);
  }
  usertype_delete(data) {
    return this.http.post(this.apiUrl + 'usertype/delete', data);
  }
  usertype_list() {
    return this.http.get<any>(this.apiUrl + 'usertype/getlist' );
  }


  usergroup_add(data) {
    return this.http.post(this.apiUrl + 'usergroup/create', data);
  }
  usergroup_edit(data) {
    return this.http.post(this.apiUrl + 'usergroup/edit', data);
  }
  usergroup_delete(data) {
    return this.http.post(this.apiUrl + 'usergroup/delete', data);
  }
  usergroup_list() {
    return this.http.get<any>(this.apiUrl + 'usergroup/getlist' );
  }


  useradd_create(data) {
    return this.http.post(this.apiUrl + 'useradd/create', data);
  }
  useradd_edit(data) {
    return this.http.post(this.apiUrl + 'useradd/edit', data);
  }
  useradd_delete(data) {
    return this.http.post(this.apiUrl + 'useradd/delete', data);
  }
  useradd_list() {
    return this.http.get<any>(this.apiUrl + 'useradd/getlist' );
  }

  Code_checker(data) {
    return this.http.post(this.apiUrl + 'entity_user/find_code', data);
  }



  fields_mapping_adds(data) {
    return this.http.post(this.apiUrl + 'fields_mapping/create', data);
  }
  fields_mapping_edit(data) {
    return this.http.post(this.apiUrl + 'fields_mapping/edit', data);
  }
  fields_mapping_delete(data) {
    return this.http.post(this.apiUrl + 'fields_mapping/delete', data);
  }
  fields_mapping_list() {
    return this.http.get<any>(this.apiUrl + 'fields_mapping/getlist' );
  }

  fields_mapping_fetch(data) {
    return this.http.post(this.apiUrl + 'fields_mapping/fetch_field_list', data);
  }




  inserting_customer_details(data) {
    return this.http.post(this.apiUrl + 'customer_details/create', data);
  }


  inserting_excel_details(data) {
    return this.http.post(this.apiUrl + 'excel_datas/create', data);
  }


  inserting_bucket_details(data) {
    return this.http.post(this.apiUrl + 'bucket_detail/create', data);
  }



  listing_data_excel_details(data) {
    return this.http.post(this.apiUrl + 'excel_datas/create', data);
  }



  /////Comman Paeg API call/////

  login(data){
    return this.http.post(this.apiUrl + 'userdetails/login', data);
  }
  Forgot_password(data){
    return this.http.post(this.apiUrl + 'activity/forgotpassword', data);
  }




  //////User Details//////

  user_details_add(data) {
    return this.http.post(this.apiUrl + 'userdetails/create', data);
  }
  user_details_edit(data) {
    return this.http.post(this.apiUrl + 'userdetails/edit', data);
  }
  user_details_delete(data) {
    return this.http.post(this.apiUrl + 'userdetails/delete', data);
  }
  user_details_list() {
    return this.http.get<any>(this.apiUrl + 'userdetails/getlist' );
  }

  user_details_list_by_com(data) {
    return this.http.post(this.apiUrl + 'userdetails/userlist_by_com', data);
  }


  ////////Create Merge Data /////

  merge_details_add(data) {
    return this.http.post(this.apiUrl + 'mergedetails/create', data);
  }
  merge_details_edit(data) {
    return this.http.post(this.apiUrl + 'mergedetails/edit', data);
  }
  merge_details_delete(data) {
    return this.http.post(this.apiUrl + 'mergedetails/delete', data);
  }
  merge_details_list() {
    return this.http.get<any>(this.apiUrl + 'mergedetails/getlist' );
  }

  merge_details_list_by_com(data) {
    return this.http.post(this.apiUrl + 'mergedetails/userlist_by_com', data);
  }


  allocation_details_id(id){
    return this.http.get(this.apiUrl + 'allocationdata/getdetails?id='+id);
  }

  allocation_details_add(data) {
    return this.http.post(this.apiUrl + 'allocationdata/create', data);
  }

  allocation_details_update(data) {
    return this.http.post(this.apiUrl + 'allocationdata/update', data);
  }

  reallocation_details_add(data){
    return this.http.post(this.apiUrl + 'allocationdata/reallocate', data);
  }

  allocation_details_list(data) {
    console.log(data);
    return this.http.post(this.apiUrl + 'allocationdata/getlist_id', data);
  }
  allocation_details_getassignedfrom(id){
    return this.http.get(this.apiUrl + 'allocationdata/getassignedfrom?from='+id);
  }

  allocation_details_getassignedto(id){
    return this.http.get(this.apiUrl + 'allocationdata/getassignedto?to='+id);
  }

  allocation_details_getassignedto_id(id,pid){
    return this.http.get(this.apiUrl + 'allocationdata/getassignedlist?to='+id+'&portfolio_id='+pid);
  }

  newallocation_data(data){
    return this.http.post(this.apiUrl+'allocateto_tl/create',data);
  }

  newallocation_getlist_id(data){
    return this.http.post(this.apiUrl+'allocateto_tl/getlist_id',data);
  }


  // FOLLOWUP API //
  add_FollowUp_create(data){
    return this.http.post(this.apiUrl + 'followup/create', data);
  }

  edit_FollowUp_update(data){
    return this.http.post(this.apiUrl + 'followup/update', data);
  }

  list_FollowUp_getlist(id){
    return this.http.get(this.apiUrl + 'followup/getlist?id='+id);
  }

  view_FollowUp_get_id(id){
    return this.http.get(this.apiUrl + 'followup/get_id?id='+id);
  }

  delete_FollowUP_delete(id){
    return this.http.delete(this.apiUrl + 'followup/delete?id='+id);
  }



  // WORKFLOW API //
  add_WorkFlow_create(data){
    return this.http.post(this.apiUrl + 'workflow/create', data);
  }

  edit_WorkFlow_update(data){
    return this.http.post(this.apiUrl + 'workflow/update', data);
  }

  list_WorkFlow_getlist(id){
    return this.http.get(this.apiUrl + 'workflow/getlist?id='+id);
  }

  view_WorkFlow_get_id(id){
    return this.http.get(this.apiUrl + 'workflow/get_id?id='+id);
  }

  delete_WorkFlow_delete(id){
    return this.http.delete(this.apiUrl + 'workflow/delete?id='+id);
  }


  // COLLECTION DETAILS API //
  add_CollectionDetails_create(data){
    return this.http.post(this.apiUrl + 'collection/create', data);
  }

  edit_CollectionDetails_update(data){
    return this.http.post(this.apiUrl + 'collection/update', data);
  }

  list_CollectionDetails_getlist(){
    return this.http.get(this.apiUrl + 'collection/getlist');
  }

  view_CollectionDetails_get_id(id){
    return this.http.get(this.apiUrl + 'collection/get_id?id='+id);
  }

  delete_CollectionDetails_delete(id){
    return this.http.delete(this.apiUrl + 'collection/delete?id='+id);
  }


  // COLLECTION INFO API //
  add_CollectionInfo_create(data){
    return this.http.post(this.apiUrl + 'collection_info/create', data);
  }

  edit_CollectionInfo_update(data){
    return this.http.post(this.apiUrl + 'collection_info/update', data);
  }

  list_CollectionInfo_getlist(){
    return this.http.get(this.apiUrl + 'collection_info/getlist');
  }

  view_CollectionInfo_get_id(id){
    return this.http.get(this.apiUrl + 'collection_info/get_id?id='+id);
  }

  delete_CollectionInfo_delete(id){
    return this.http.delete(this.apiUrl + 'collection_info/delete?id='+id);
  }


  // SETTLEMENT DETAILS API //
  add_Settlement_create(data){
    return this.http.post(this.apiUrl + 'settlement/create', data);
  }

  edit_Settlement_update(data){
    return this.http.post(this.apiUrl + 'settlement/update', data);
  }

  list_Settlement_getlist(){
    return this.http.get(this.apiUrl + 'settlement/getlist');
  }

  view_Settlement_get_id(id){
    return this.http.get(this.apiUrl + 'settlement/get_id?id='+id);
  }

  delete_Settlement_delete(id){
    return this.http.delete(this.apiUrl + 'settlement/delete?id='+id);
  }


  // CASE FILLING DETAILS API //
  add_CaseFilling_create(data){
    return this.http.post(this.apiUrl + 'casefilling/create', data);
  }

  edit_CaseFilling_update(data){
    return this.http.post(this.apiUrl + 'casefilling/update', data);
  }

  list_CaseFilling_getlist(){
    return this.http.get(this.apiUrl + 'casefilling/getlist');
  }

  view_CaseFilling_get_id(id){
    return this.http.get(this.apiUrl + 'casefilling/get_id?id='+id);
  }

  delete_CaseFilling_delete(id){
    return this.http.delete(this.apiUrl + 'casefilling/delete?id='+id);
  }


  //create Bank CODE//

  create_bank_code(data){
    return this.http.post(this.apiUrl + 'bankcode/create', data);
  }

  update_bank_code(data){
    return this.http.post(this.apiUrl + 'bankcode/update', data);
  }

  getlist_bank_code(){
    return this.http.get(this.apiUrl + 'bankcode/getlist');
  }

  delete_bank_code(id){
    return this.http.delete(this.apiUrl+ 'bankcode/delete?id='+id);
  }


  //create AREA CODE//

  create_area_code(data){
    return this.http.post(this.apiUrl + 'areacode/create', data);
  }

  update_area_code(data){
    return this.http.post(this.apiUrl + 'areacode/update', data);
  }

  getlist_area_code(){
    return this.http.get(this.apiUrl + 'areacode/getlist');
  }

  delete_area_code(id){
    return this.http.delete(this.apiUrl+ 'areacode/delete?id='+id);
  }


  //create AREA CODE//

  create_fieldvisit_code(data){
    return this.http.post(this.apiUrl + 'fieldvisitcode/create', data);
  }

  update_fieldvisit_code(data){
    return this.http.post(this.apiUrl + 'fieldvisitcode/update', data);
  }

  getlist_fieldvisit_code(){
    return this.http.get(this.apiUrl + 'fieldvisitcode/getlist');
  }

  delete_fieldvisit_code(id){
    return this.http.delete(this.apiUrl+ 'fieldvisitcode/delete?id='+id);
  }


  //create Main Status CODE//

  create_mainStatus_code(data){
    return this.http.post(this.apiUrl + 'mainstatus/create', data);
  }

  update_mainStatus_code(data){
    return this.http.post(this.apiUrl + 'mainstatus/update', data);
  }

  getlist_mainStatus_code(){
    return this.http.get(this.apiUrl + 'mainstatus/getlist');
  }

  delete_mainStatus_code(id){
    return this.http.delete(this.apiUrl+ 'mainstatus/delete?id='+id);
  }

  //create Main Status CODE//

  create_subStatus_code(data){
    return this.http.post(this.apiUrl + 'substatus/create', data);
  }

  update_subStatus_code(data){
    return this.http.post(this.apiUrl + 'substatus/update', data);
  }

  getlist_subStatus_code(){
    return this.http.get(this.apiUrl + 'substatus/getlist');
  }

  delete_subStatus_code(id){
    return this.http.delete(this.apiUrl+ 'substatus/delete?id='+id);
  }


  //create Followup CODE//

  create_FollowUp(data){
    return this.http.post(this.apiUrl + 'followup/create', data);
  }

  update_FollowUp(data){
    return this.http.post(this.apiUrl + 'followup/update', data);
  }

  getlist_FollowUp(){
    return this.http.get(this.apiUrl + 'followup/getlist');
  }

  delete_FollowUp(id){
    return this.http.delete(this.apiUrl+ 'followup/delete?id='+id);
  }


    //create Followup CODE//

    create_new_FollowUp(data){
      return this.http.post(this.apiUrl + 'newfollowup/create', data);
    }

    update_new_FollowUp(data){
      return this.http.post(this.apiUrl + 'newfollowup/update', data);
    }


    getlist_new_FollowUp(id){
      return this.http.get(this.apiUrl + 'newfollowup/getlist?id='+id);
    }

    delete_new_FollowUp(id){
      return this.http.delete(this.apiUrl+ 'newfollowup/delete?id='+id);
    }


//create Actions Taken CODE//

  create_actionstaken(data){
    return this.http.post(this.apiUrl + 'actiontaken/create', data);
  }

  update_actionstaken(data){
    return this.http.post(this.apiUrl + 'actiontaken/update', data);
  }

  getlist_actionstaken(){
    return this.http.get(this.apiUrl + 'actiontaken/getlist');
  }

  delete_actionstaken(id){
    return this.http.delete(this.apiUrl+ 'actiontaken/delete?id='+id);
  }


//create Tracing Tools CODE//

create_tracingtools(data){
  return this.http.post(this.apiUrl + 'tracingtools/create', data);
}

update_tracingtools(data){
  return this.http.post(this.apiUrl + 'tracingtools/update', data);
}

getlist_tracingtools(){
  return this.http.get(this.apiUrl + 'tracingtools/getlist');
}

delete_tracingtools(id){
  return this.http.delete(this.apiUrl+ 'tracingtools/delete?id='+id);
}


//create Approval Status CODE//

create_approvalstatus(data){
  return this.http.post(this.apiUrl + 'approval_status/create', data);
}

update_approvalstatus(data){
  return this.http.post(this.apiUrl + 'approval_status/update', data);
}

getlist_approvalstatus(){
  return this.http.get(this.apiUrl + 'approval_status/getlist');
}

delete_approvalstatus(id){
  return this.http.delete(this.apiUrl+ 'approval_status/delete?id='+id);
}


//create Payment CODE//

create_new_payment(data){
  return this.http.post(this.apiUrl + 'newpayments/create', data);
}

update_new_payment(data){
  return this.http.post(this.apiUrl + 'newpayments/update', data);
}

getlist_new_payment(id){
  return this.http.get(this.apiUrl + 'newpayments/getlist?id='+id);
}

delete_new_payment(id){
  return this.http.delete(this.apiUrl+ 'newpayments/delete?id='+id);
}



//create Settlement CODE//

create_new_settlement(data){
  return this.http.post(this.apiUrl + 'newsettlements/create', data);
}

update_new_settlement(data){
  return this.http.post(this.apiUrl + 'newsettlements/update', data);
}

getlist_new_settlement(id){
  return this.http.get(this.apiUrl + 'newsettlements/getlist?id='+id);
}

delete_new_settlement(id){
  return this.http.delete(this.apiUrl+ 'newsettlements/delete?id='+id);
}


  /////Imthiyas/////

  create_bank_details(data){
    return this.http.post(this.apiUrl + 'bank_detail/create', data);
  }

  update_bank_details(data){
    return this.http.post(this.apiUrl + 'bank_detail/edit', data);
  }

  delete_bank_details(id){
    return this.http.get(this.apiUrl + 'bank_detail/delete');
  }

  getlist_bank_details(data){
    return this.http.post(this.apiUrl+ 'bank_detail/getlist',data);
  }


//create LogType CODE//

create_new_logtype(data){
  return this.http.post(this.apiUrl + 'logtype/create', data);
}

update_new_logtype(data){
  return this.http.post(this.apiUrl + 'logtype/update', data);
}

getlist_new_logtype(){
  return this.http.get(this.apiUrl + 'logtype/getlist');
}

delete_new_logtype(id){
  return this.http.delete(this.apiUrl+ 'logtype/delete?id='+id);
}


  //create Field Visit CODE//

  create_new_fieldvisit(data){
    return this.http.post(this.apiUrl + 'addfieldvisit/create', data);
  }

  update_new_fieldvisit(data){
    return this.http.post(this.apiUrl + 'addfieldvisit/update', data);
  }

  getlist_new_fieldvisit(id){
    return this.http.get(this.apiUrl + 'addfieldvisit/getlist?id='+id);
  }

  delete_new_fieldvisit(id){
    return this.http.delete(this.apiUrl+ 'addfieldvisit/delete?id='+id);
  }



    //create Teams//

    create_new_team(data){
      return this.http.post(this.apiUrl + 'addteam/create', data);
    }

    update_new_team(data){
      return this.http.post(this.apiUrl + 'addteam/update', data);
    }

    getlist_new_team(){
      return this.http.get(this.apiUrl + 'addteam/getlist');
    }

    delete_new_team(id){
      return this.http.delete(this.apiUrl+ 'addteam/delete?id='+id);
    }

//create Team Members//

create_new_teammembers(data){
  return this.http.post(this.apiUrl + 'team_management/create', data);
}

update_new_teammembers(data){
  return this.http.post(this.apiUrl + 'team_management/update', data);
}

getlist_new_teammembers(){
  const data ={
    client_id:"1"
  }
  return this.http.post(this.apiUrl + 'team_management/getlist_by_client',data);
}

getlist_new_teamgroup(){
  const data ={
    client_id:"1"
  }
  return this.http.post(this.apiUrl + 'team_management/groupby_team',data);
}

getMemberID(id){
  return this.http.get(this.apiUrl+'userdetails/getby_id?id='+id);
}

delete_new_teammembers(id){
  return this.http.delete(this.apiUrl+ 'team_management/delete?id='+id);
}

// FIND REPORTING TO //

findReportTo(id){
  const data = {
    member_user_id: id
  };
  return this.http.post(this.apiUrl+ 'team_management/finding_reporting_to',data)
}


// FILE UPLOAD SERVICE //

uploadFile(file){
  const fd = new FormData();
  fd.append('sampleFile', file, file.name);
  return this.http.post('http://10.0.237.178:3000/upload', fd);
}

// APPROVAL LIST //

getlist_approval_request(data){
  return this.http.post(this.apiUrl+'addfieldvisit/assigned_list',data)
  // return this.http.post(this.apiUrl+'addfieldvisit/fetch_approval_list',data);
}

getlist_fvapproval_request(data){
  return this.http.post(this.apiUrl+'addfieldvisit/agent_list',data)
  // return this.http.post(this.apiUrl+'addfieldvisit/fetch_approval_list',data);
}

getlist_sem_approval_request(data){
  return this.http.post(this.apiUrl+'newsettlements/fetch_approval_list',data);
}

get_bucket_details(data){
  return this.http.post(this.apiUrl+'bucket_detail/getlist_id',data);
}



get_excel_records(data){
  return this.http.post(this.apiUrl+'excel_datas/fetch_records_by_buckets',data);
}


allocation_details_adds(data){
  return this.http.post(this.apiUrl+'allocation_detail/create',data);
}


// FIELD VISIT COORDINATORS LIST //

getFieldVisitagents(data){
  return this.http.post(this.apiUrl+'userdetails/fetch_user_territory',data)
}

excel_details_update(data){
  return this.http.post(this.apiUrl+'excel_datas/update_allocation_status',data);
}

fetch_data_using_user_id(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_data_using_user_id',data);
}


fetch_data_using_allocated_list_by_bucket(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_data_using_allocated_list_by_bucket',data);
}


fetch_records_by_buckets_and_allocation(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_records_by_buckets_and_allocation',data);
}


fetch_data_using_allocated_list(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_data_using_allocated_list',data);
}




fetch_bucket_details(data){
  return this.http.post(this.apiUrl+'bucket_detail/getlist_details',data);
}


fetch_bank_list_by_client_id(data){
  return this.http.post(this.apiUrl+'bank_detail/getlist',data);
}


allocation_details_updates(data){
  return this.http.post(this.apiUrl+'allocation_detail/edit',data);
}


// LINKED ACCOUNTS //

getLinkedaccounts(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_data_linked_account',data);
}

// MAPPED ACCOUNTS //

getMappedaccounts(data){
  return this.http.post(this.apiUrl+'allocation_detail/fetch_data_mapped_account',data);
}

//SET EXCEL DATA //

setExcelData(data){
 this.UploadedExcel = data;
}

//GET EXCEL DATA //

getExcelData(){
  return this.UploadedExcel;
 }



 getAccountStatus(data){
  return this.http.post(this.apiUrl+'customer_details/check_status',data);
 }

 setAccountStatus(data){
  return this.http.post(this.apiUrl+'customer_details/update_status',data);
 }


// Dashboard API //

getDashboardCount(data){
  return this.http.post(this.apiUrl+'allocation_detail/allocation_dashboard',data);
}



}
