import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-acc-accountlist',
  templateUrl: './acc-accountlist.component.html',
  styleUrls: ['./acc-accountlist.component.css']
})
export class AccAccountlistComponent implements OnInit {
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  buttons: any = [{ 'btn': 'Personal Loan' },
  { 'btn': 'Auto Loan' },
  { 'btn': 'Credit Cards' },
  { 'btn': 'Sales Finance' },
  { 'btn': 'Personal Loan' },
  { 'btn': 'Auto Loan' },
  { 'btn': 'Credit Cards' },
  { 'btn': 'Sales Finance' },
  { 'btn': 'Personal Loan' },
  { 'btn': 'Auto Loan' },
  { 'btn': 'Credit Cards' },
  { 'btn': 'Sales Finance' },];
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  typ: any = [
    { "y": "Account No" },
    { "y": "Customer No" },
    { "y": "Name" }];
  constructor(
    private router: Router
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.rows = [["Customer code / Account No--DUMMY", "Ageing", "Customer Name", "Ovedue Amount", "customer_group", "Segment", "nationality", "birthdate", "sms_no", "mobile", "contact_phone1", "Active No", "ccemail", "id_type", "id_number", "status", "activation_date", "Alloc_Dt", "Alloc End_Dt", "Last_Pmt_Dt", "Last_Contact_Dt", "Last_Contact_Event", "handset", "Priority", "Agent", "Current Date", "Events", "Sub Events", "Remarks", "Followup/PTP DATE", "Paid Amount", "Contacted Number", "Traced Number", "MOL", "FV", "FV done date", "Company  license", "Status", "Skip Trace"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],
    ["1.26401779458", "731+", "Wellage Mahesh Suranga Wijayarathna", 446.67, "Consumer", "Consumer", "Sri Lanka", "+9715xxxx5961", "maheaxxxrabga02@gmail.com", "Emirates ID", "7841xxx408479", "DEACTIVATED", "2013-07-06", "2020-10-01", "2020-12-31", "NULL", "P3", "Asmaa"],]



  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  showPositionDialog() {
    this.displayPosition = true;
  }
  cus360() {
    this.router.navigateByUrl('/admin_panel/user/createuser')
  }
}

