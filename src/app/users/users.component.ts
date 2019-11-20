import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  datos: any[] = [];

  constructor(private servicio:PizzasServicesService) {
    this.User() }

  ngOnInit() {
  }

  User(){
    this.servicio.getUser().subscribe( (data:any)=>{
      this.datos = data;
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarUsuario(index:number){
    this.servicio.deleteUser(this.datos[index].id).subscribe((data:any)=>{
      this.User();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
    this.User();
  }

}