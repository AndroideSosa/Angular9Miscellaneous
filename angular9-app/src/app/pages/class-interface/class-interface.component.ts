import { Component, OnInit } from '@angular/core';
//Importación módulos
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
//Importación clase Servicios
import { GeneralServicesService } from '../../services/general-services.service';
//Importación interfaces
import { Countries } from '../../interfaces/countries.model';
import { Usuario } from '../../interfaces/usuario.model';

@Component({
  selector: 'app-class-interface',
  templateUrl: './class-interface.component.html',
  styleUrls: ['./class-interface.component.css']
})
export class ClassInterfaceComponent implements OnInit {

  //Declaracion de variables
  public paises: Countries[]=[];
  public userForm: FormGroup;
  public usuario: Usuario[]= [];

  constructor(private generalService: GeneralServicesService,
              private spinner: NgxSpinnerService,
              private fb: FormBuilder) { }


  ngOnInit(): void {
    //Llamada al método para cargar listas de paises
    this.getCountries();
    //Se define Formbuilder
    this.userForm = this.fb.group({
        nombre: [''],
        paterno: [''],
        materno: [''],
        pais:[null],
        nacimiento: ['']
    });
  }

   //Método para obtener lista de paises
   public getCountries():void {
    this.spinner.show();
    this.generalService.getCountriesTemplate().subscribe(
      countries =>{
        console.log(countries);
        this.paises = countries;
      },
      error => {
        this.spinner.hide();
        console.log(error);
      }
    )
  }

  //Método para agregar usuarios 
  public onSubmit():void{
    console.log(this.userForm.value);
    console.log(this.usuario);
   // this.userForm.get('').value;
  }

}
