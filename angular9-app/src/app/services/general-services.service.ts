//Importaciones generales
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importacion de operadores rxjs
import { Observable } from 'rxjs';
import { tap,catchError,map } from 'rxjs/operators';
//Importacion de operadores para promesas
import { resolve } from 'url';
import { reject } from 'q';
//Importacion interfaces
import { Countries } from '../interfaces/countries.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {

  //Definicion de endpoints
  private endPointCountries: string = "https://restcountries.eu/rest/v2/lang/es";

  //Se contruyen objetos de consulta para imagenes de home
  private imagenesSlider: any[] = [
    {
      id: 1,
      name: "Slider 1",
      image : '/assets/imgs/slider-1.jpg',
      description: "Esta es la imagen que corresponde al slider 1"
    },
    {
      id: 2,
      name: "Slider 2",
      image : '/assets/imgs/slider-2.jpg',
      description: "Esta es la imagen que corresponde al slider 2"
    },
    {
      id: 3,
      name: "Slider 3",
      image : '/assets/imgs/slider-3.jpg',
      description: "Esta es la imagen que corresponde al slider 3"
    },
    {
      id: 4,
      name: "Slider 4",
      image : '/assets/imgs/slider-4.jpg',
      description: "Esta es la imagen que corresponde al slider 4"
    },
    {
      id: 5,
      name: "Slider 5",
      image : '/assets/imgs/slider-5.jpg',
      description: "Esta es la imagen que corresponde al slider 5"
    }
  ]

  //Se contruyen objetos de consulta para estado civil
  private estadosCivil: any[] = [
    {
      id: 1,
      name: "Soltero",
      value: "Soltero",
      description: "Estado civil Soltero"
    },
    {
      id: 2,
      name: "Casado",
      value: "Casado",
      description: "Estado civil Casado"
    },
    {
      id: 3,
      name: "Divorciado",
      value: "Divorciado",
      description: "Estado civil Divorciado"
    },
    {
      id: 4,
      name: "Viudo",
      value: "Viudo",
      description: "Estado civil Viudo"
    }
  ]

  //Se contruyen objetos de consulta para estado civil
  private enfermedades: any[] = [
    {
      id: 1,
      name: "Diabetes",
      value: "Diab",
      description: "Enfermedades del grupo de la diabetes"
    },
    {
      id: 2,
      name: "Respiratorias",
      value: "Resp",
      description: "Enfermedades respiratorias"
    },
    {
      id: 3,
      name: "Cáncer",
      value: "Can",
      description: "Enfermedades del grupo de cáncer"
    },
    {
      id: 4,
      name: "Ninguna",
      value: "Null",
      description: "Enfermedades del grupo de cáncer"
    }
  ]

  constructor(private _http: HttpClient) { 
  }

  //Servicio que regresa el arreglo de imagenes para el slide
  public getSlidesImages(): Array<any> {
    return this.imagenesSlider;
  }

  //Servicio que regresa el arreglo de estado civiles
  public getMaritalStatus(): Array<any> {
    return this.estadosCivil;
  }

  //Servicio que regresa el arreglo de enfermedades
  public getDiseases(): Array<any> {
    return this.enfermedades;
  }

   //Servicio para obtener el arreglo de paises utilizando operador map (filtrando resultados)
   public getCountriesReactive(){
    return this._http.get(this.endPointCountries).pipe(
      map((countries: Countries[]) =>{
        return countries.map ( country => {
          return {
            name: country.name,
            code: country.alpha3Code
          }
        })
      })
      );
  }

  //Servicio para obtener el arreglo de paises utilizando observables
  public getCountriesTemplate(): Observable<Countries[]>{
    return this._http.get<Countries[]>(this.endPointCountries).pipe(
      tap(
        (response) => {
          console.log('.......................................... En el response de la clase servicios'); 
        },
        (error) => {
          console.log('........................................... En el Error de la clase servicios');
        }
        )
      );
  }

}