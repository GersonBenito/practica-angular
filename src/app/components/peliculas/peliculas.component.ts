import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public datos: number;
  public bandera: boolean;

  constructor() { 
    this.datos = 1;


    if(this.datos > 0){
      this.bandera = true;
    }else{
      this.bandera = false;
    }
  }

  ngOnInit(): void {
  }


}
