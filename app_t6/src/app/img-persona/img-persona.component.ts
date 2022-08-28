import { Component, OnInit} from '@angular/core';
import { IImg } from './IImg';

@Component({
  selector: 'app-img-persona',
  templateUrl: './img-persona.component.html',
  styleUrls: ['./img-persona.component.css']
})
export class ImgPersonaComponent implements OnInit {
  //@Input () imagen?: IImg

  imagen: IImg = {
    src: "https://picsum.photos/200",
    text: "Thumbnail",
  }
  constructor() { }

  ngOnInit(): void {
  }

}
