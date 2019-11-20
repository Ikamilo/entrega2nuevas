import { Component, OnInit } from '@angular/core';
import { PizzasServicesService } from '../pizzas-services.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.css']
})
export class SizesComponent implements OnInit {

  datos: any[] = [];

  constructor(private servicio:PizzasServicesService) {  this.Size()}

  ngOnInit() {
  }

  Size(){
    this.servicio.getSize().subscribe( (data:any)=>{
      this.datos = data;
      console.log(this.datos[0].id);
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

  eliminarTamano(index:number){
    this.servicio.deleteSize(this.datos[index].id).subscribe((data:any)=>{
      this.Size();
    }, ( errorServicio )=> {
      console.log(errorServicio);
    });
  }

}
