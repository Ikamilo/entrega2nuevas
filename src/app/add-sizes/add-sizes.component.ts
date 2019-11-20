import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-add-sizes',
  templateUrl: './add-sizes.component.html',
  styleUrls: ['./add-sizes.component.css']
})
export class AddSizesComponent implements OnInit {

  public nombre:string;
  public precio:number;


  constructor(private servicio:PizzasServicesService) {}

  ngOnInit() {
  }
  
  crearTamano(){
    this.servicio.postSize(this.nombre, this.precio).subscribe( (data:any)=>{
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
