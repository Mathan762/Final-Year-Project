import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeenavbar',
  templateUrl: './employeenavbar.component.html',
  styleUrls: ['./employeenavbar.component.css']
})
export class EmployeenavbarComponent implements OnInit {

  public submitted1: boolean = false;
  public submitted2: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  validate1(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted1=true; // successfull page
    }
    form.classList.add('was-validated');
  }
  validate2(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[1] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted2=true; // successfull page
    }
    form.classList.add('was-validated');
  }

  addpackagedetails(packagedeatails:any) {
    this.validate1();
    if(this.submitted1 === true){
      //this.router.navigateByUrl('/admin');
      //this.reload();
      //this.reload();
      //alert("login successful");
    }
  }
  updatepackagedetails(packagedeatails:any) {
    this.validate2();
    if(this.submitted2 === true){
      //this.router.navigateByUrl('/admin');
      //this.reload();
      //this.reload();
      //alert("login successful");
    }
  }
  reload(){
    window.location.reload();
  }
  signOut(): void {
    this.router.navigateByUrl('/login');
  }
}
