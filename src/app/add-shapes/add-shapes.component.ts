import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-add-shapes',
  templateUrl: './add-shapes.component.html',
  styleUrls: ['./add-shapes.component.css']
})
export class AddShapesComponent implements OnInit {

  public nombre:string;
  public precio:number;


  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearForma(){
    this.servicio.postShape(this.nombre, this.precio).subscribe( (data:any)=>{
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }
}
