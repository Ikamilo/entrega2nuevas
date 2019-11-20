import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-add-flavors',
  templateUrl: './add-flavors.component.html',
  styleUrls: ['./add-flavors.component.css']
})
export class AddFlavorsComponent implements OnInit {

  public nombre:string;
  public precio:number;


  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearSabor(){
    this.servicio.postFlavor(this.nombre, this.precio).subscribe( (data:any)=>{
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
