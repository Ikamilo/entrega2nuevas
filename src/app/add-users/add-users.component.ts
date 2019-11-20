import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';
import { Users } from '../users';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  public nombre:string;
  public email:string;
  public password:string;

  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearUsuarios(){

    this.servicio.postUser(this.nombre, this.email, this.password).subscribe( (data:any)=>{
      console.log(data);
    }, ( errorServicio )=> {
      console.log(errorServicio.error.error.message);
    });
  }
}