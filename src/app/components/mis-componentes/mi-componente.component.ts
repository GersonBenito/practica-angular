import { Component } from '@angular/core';

@Component({
    selector:'mi-componente',
    templateUrl: '/mi-componente.component.html'
})

export class MiComponente{

    //tipos de datos en typescript
    public titulo: string;
    public comentario: string;
    public year: any;
    public year2: number;
    public numero: number;
    public edad: string;
    public contador: number;
    public resultado: boolean;
    

    constructor(){

        this.titulo = 'Hola mundo de Angular';
        this.comentario = 'Estes es mi primer componente en angular';
        this.year = new Date();
        this.year2 = 2021;
        this.numero = 21;
        this.contador = 0;
        this.resultado = false;


        // prueba de logica
        this.numero === 21 ? (
            this.edad = 'Gerson tienes 21 años'
        ):(
            this.edad = 'no tienes 21 años'
        )

        //comando para generar un componente
        //ng g component nombreCarpeta/nombre del componente a crear
        console.log('mi componente cargado');
        console.log('valores en las variables declarados',this.titulo, this.comentario, this.year);
        
    }
    onClick(){
        this.contador = this.contador + 1;
        console.log('contador en =>',this.contador);
        this.resultado = false;
    }

    disminuir(){
        this.contador = this.contador - 1;
        console.log('contador en =>',this.contador);
        //this.resultado = false;

        if(this.contador === 0){
            console.log('el contador esta en =>',this.contador);
            this.resultado = true;
        }
    }
    
}