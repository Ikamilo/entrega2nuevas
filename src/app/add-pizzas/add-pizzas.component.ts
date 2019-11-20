import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-add-pizzas',
  templateUrl: './add-pizzas.component.html',
  styleUrls: ['./add-pizzas.component.css']
})
export class AddPizzasComponent implements OnInit {

 
  public shape_id:number;
  public sauce_id:number;
  public flavor_id:number;
  public size_id:number;
  public user_id:number;
  public total_prices:number;


  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearPizzas(){
    this.servicio.postPizza(this.shape_id,this.sauce_id,this.flavor_id,this.size_id,
      this.user_id,this.total_prices).subscribe( (data:any)=>{
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
