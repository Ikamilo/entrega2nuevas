import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  datos: any[] = [];
  
  constructor(private servicio:PizzasServicesService) { this.shapes()}

  ngOnInit() {
  }

  shapes(){
    this.servicio.getShape().subscribe( (data:any)=>{
      this.datos = data;
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarForma(index:number){
    this.servicio.deleteShape(this.datos[index].id).subscribe((data:any)=>{
      this.shapes();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
