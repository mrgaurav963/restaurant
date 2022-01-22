import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurentDataInterface } from './restuarent.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-restuarent-dash',
  templateUrl: './restuarent-dash.component.html',
  styleUrls: ['./restuarent-dash.component.scss']
})
export class RestuarentDashComponent implements OnInit {
  formValue!:FormGroup
  restaurentDataInterfaceObject : RestaurentDataInterface = new RestaurentDataInterface;
  allRestuarentData : any;
  showAddBtn! : boolean
  showUpdateBtn! : boolean 
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      services:['']
    })
    this.getRestuarentsData()
  }
  clickAddRestro(){
    this.formValue.reset();
    this.showAddBtn = true;
    this.showUpdateBtn = false;
  }

  //Now subscribing our data which is mapped via Services.
  addRestuarent(){
    this.restaurentDataInterfaceObject.name = this.formValue.value.name;
    this.restaurentDataInterfaceObject.email = this.formValue.value.email;
    this.restaurentDataInterfaceObject.mobile = this.formValue.value.mobile;
    this.restaurentDataInterfaceObject.address = this.formValue.value.address;
    this.restaurentDataInterfaceObject.services = this.formValue.value.services;

    this.api.postRestaurent(this.restaurentDataInterfaceObject).subscribe(res=>{
      console.log(res);
      alert("Restuarent Added Successfully");

      let ref = document.getElementById("clear");
      ref?.click();

      // It reset all the form value after submit
      this.formValue.reset();

      //It refresh table data after posting
      this.getRestuarentsData();
    },
    
    err => {
      alert("Something is wrong");
    })
  }


  // Get Restaurent Data from DB

  getRestuarentsData(){
    this.api.getRestaurent().subscribe(res=>{
      this.allRestuarentData = res;
    })
  }


  // Delete Restaurent Record
  deleteRestaurentRecord(data:any){
    this.api.deleteRestuarent(data.id).subscribe(res=> {
      alert("Record Deleted Successfully")
      this.getRestuarentsData();
    })
  }

  //Edit Restaurent Record
  editRestaurent(data:any) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.restaurentDataInterfaceObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services); 
  }


  // Update Restaurent Record
  updateRestuarentRecord(){
    this.restaurentDataInterfaceObject.name = this.formValue.value.name;
    this.restaurentDataInterfaceObject.email = this.formValue.value.email;
    this.restaurentDataInterfaceObject.mobile = this.formValue.value.mobile;
    this.restaurentDataInterfaceObject.address = this.formValue.value.address;
    this.restaurentDataInterfaceObject.services = this.formValue.value.services;

    this.api.updateRestuarent(this.restaurentDataInterfaceObject, this.restaurentDataInterfaceObject.id).subscribe(res => {
      alert("Restaurant Record Updated")
      let ref = document.getElementById("clear");
      ref?.click();

      // It reset all the form value after submit
      this.formValue.reset();

      //It refresh table data after posting
      this.getRestuarentsData();
    })
  }
 

}
