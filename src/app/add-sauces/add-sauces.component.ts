import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-add-sauces',
  templateUrl: './add-sauces.component.html',
  styleUrls: ['./add-sauces.component.css']
})
export class AddSaucesComponent implements OnInit {

  public nombre:string;
  public precio:number;


  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearSalsa(){
    this.servicio.postSauce(this.nombre, this.precio).subscribe( (data:any)=>{
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }
}
