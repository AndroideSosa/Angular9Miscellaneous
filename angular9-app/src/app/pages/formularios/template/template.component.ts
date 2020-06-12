import { Component, OnInit } from '@angular/core';
import { GeneralServicesService } from '../../../services/general-services.service';
import { Countries } from '../../../interfaces/countries.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  //Declaración de variables globales
  
  private persona = {
    nombre: null,
    apellidoP: null,
    apellidoM: null
  };

  public paises: Countries;

  constructor(private generalService: GeneralServicesService) { }

  ngOnInit(): void {
    //Llamada al método para cargar listas de paises
    this.getCountries();
  }


  //Método para obtener lista de paises
  public getCountries():void {
    this.generalService.getCountriesTemplate().subscribe(
      countries =>{
        console.log(countries);
        this.paises = countries;
      },
      error => {
        console.log(error);
      }
    )
  }  
}
