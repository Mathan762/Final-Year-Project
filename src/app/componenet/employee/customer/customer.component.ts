import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload();
  }
  signOut(): void {
    this.router.navigateByUrl('/login');
  }

}