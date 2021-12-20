import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  public submitted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validate(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted=true; // successfull page
    }
    form.classList.add('was-validated');
  }
  onClickSubmit(data:any) {
    this.validate();
    console.log("EmployeeId : " + data.employeeId);
    console.log("Password : "+data.password);
    if(this.submitted === true)
      this.router.navigateByUrl('/employee/product');
    //this.reload();
    //alert("login successful");
  }
  reload(){
    window.location.reload();
  }

}
