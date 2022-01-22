import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup
  constructor(private formbuilder:FormBuilder, private router:Router, private api:ApiService ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  }

  login(){
    this.api.loginUser().subscribe(res => { 
      const user = res.find((x:any) => {
        return x.email === this.loginForm.value.email && x.password === this.loginForm.value.password

      })
      if(user){
        alert("User Login Successfull");
        this.loginForm.reset();
        this.router.navigate(['restaurent'])
      }else {
        alert("Login Failed");
      }
    }, err => {
      alert("Server Side error")
    })
  }
}
