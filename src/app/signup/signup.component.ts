import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup
  constructor(private formbuilder:FormBuilder, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name : [''],
      email : [''],
      mobile : [''],
      password : ['']
    })
  }

  //Function to create User
 /* signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("User Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("User Registration Failed");
    }
    
    )
  }*/

  signUp() {
    this.api.usersSignup(this.signupForm.value).subscribe(res => {
      alert("User Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("User Registration Failed");
    }
    
    )
  }
  
}
