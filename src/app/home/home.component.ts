import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {
      image: 'assets/imagens/slide1.jpg', 
      alt: 'Descrição da imagem 1',
      title: 'Título Slide 1',
      description: 'Descrição do slide 1'
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Slide+2',
      alt: 'Descrição da imagem 2',
      title: 'Título Slide 2',
      description: 'Descrição do slide 2'
    }
  ];

}
