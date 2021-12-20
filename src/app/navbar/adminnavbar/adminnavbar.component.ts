import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  public submitted1: boolean = false;
  public submitted2: boolean = false;
  public submitted3: boolean = false;

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
  validate3(){ //validation function
    var form = document.getElementsByClassName('needs-validation')[2] as HTMLFormElement;
    if (form.checkValidity() === false) {
      console.log("Please fill all the fields !!!");
    }
    else{
      this.submitted3=true; // successfull page
    }
    form.classList.add('was-validated');
  }

  productdetails(productdetails:any) {
    this.validate3();
    if(this.submitted3 === true){
      //this.router.navigateByUrl('/admin');
      //this.reload();
      //this.reload();
      //alert("login successful");
    }
  }

  addpackagedetails(packagedetails:any) {
    this.validate1();
    if(this.submitted1 === true){
      //this.router.navigateByUrl('/admin');
      //this.reload();
      //this.reload();
      //alert("login successful");
    }
  }
  updatepackagedetails(packagedetails:any) {
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
