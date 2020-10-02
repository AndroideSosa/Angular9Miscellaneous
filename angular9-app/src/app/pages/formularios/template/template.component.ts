//Importaciones generales
import { Component, OnInit } from '@angular/core';
//Importación módulos
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
//Importación clase Servicios
import { GeneralServicesService } from '../../../services/general-services.service';
//Importación interfaces
import { Countries } from '../../../interfaces/countries.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  //Declaración de variables globales
  
  public persona = {
    nombre: null,
    paterno: null,
    materno: null,
    pais: {
      id: null,
      name: null
    },
    fecha: null,
    curp: null,
    rfc: null,
    email: null,
    familiares: null,
    estado: null,
    deportes: null
  };

  public paises: Countries[]=[];
  public maritalStatus: any[] = [];
  public diseases: any[] = [];
  public showInput: boolean = false;
  //Variable para definir la máscara del input
  public dateMask = [/\d/, /\d/,'/',/\d/, /\d/,'/',/\d/,/\d/,/\d/,/\d/];

  constructor(private generalService: GeneralServicesService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    //Llamada al método para cargar listas de paises
    this.getCountries();
  }


  //Método para obtener lista de paises
  public getCountries():void {
    this.spinner.show();
    this.generalService.getCountriesTemplate().subscribe(
      countries =>{
        console.log(countries);
        this.paises = countries;
        this.getMaritalStatus();
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  //Método para obtener imágenes del Slider principal
  private getMaritalStatus():void{
    this.maritalStatus = this.generalService.getMaritalStatus();
    this.getDiseases();
    this.spinner.hide();
  }
  
  //Método paara obtener listado de enfermedades
  private getDiseases():void{
    this.diseases = this.generalService.getDiseases();
  }

  //Método para obtener pais seleccionado
  public getPais( event: any):void{

  }

  //Método para mostrar campo de deporte
  public showSportsInput(value:string):void{
    if(value == 'Si'){
      this.showInput = true;
    }else{
      this.showInput = false;
    }
  }

  //Método para almacenar información
  public saveData( form: NgForm ):void{
    if(form.valid){
      console.log( form.value );
    }else{
      return
    }
  }


}
