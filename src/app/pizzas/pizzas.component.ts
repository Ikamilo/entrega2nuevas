import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  datos: any[] = [];

  constructor(private servicio:PizzasServicesService) { this.pizzas()}

  ngOnInit() {
  }

  pizzas(){
    this.servicio.getPizza().subscribe( (data:any)=>{
      this.datos = data;
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarPizza(index:number){
    this.servicio.deletePizza(this.datos[index].id).subscribe((data:any)=>{
      this.pizzas();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
