import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {

  //Se contruyen objetos de consulta
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
    },
    
  ]

  constructor(private _http: HttpClient) { 
  }

  //Servicio que regresa el arreglo de imagenes para el slide
  public getSlidesImages(): Array<any> {
    return this.imagenesSlider;
  }
  
}
