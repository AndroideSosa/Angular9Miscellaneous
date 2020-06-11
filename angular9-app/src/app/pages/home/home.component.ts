import { Component, OnInit } from '@angular/core';
import { GeneralServicesService } from '../../services/general-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Declaracion de variables globales
  public imagesSlider : any[] = []

  constructor(private generalService: GeneralServicesService) { }

  ngOnInit(): void {
    this.getImageSlides();
  }

  //Método para obtener imágenes del Slider principal
  private getImageSlides():void{
    this.imagesSlider = this.generalService.getSlidesImages();
    console.log(this.imagesSlider);
  }
}
