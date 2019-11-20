import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-flavors',
  templateUrl: './flavors.component.html',
  styleUrls: ['./flavors.component.css']
})
export class FlavorsComponent implements OnInit {

  datos: any[] = [];

  constructor(private servicio:PizzasServicesService) {this.Flavors()}

  ngOnInit() {
  }

  Flavors(){
    this.servicio.getFlavor().subscribe( (data:any)=>{
      this.datos = data;
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarSabor(index:number){
    this.servicio.deleteFlavor(this.datos[index].id).subscribe((data:any)=>{
      this.Flavors();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
