import { Component, OnInit, Input} from '@angular/core';
import { IPersona } from './Ipersona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input () persona?: IPersona
  constructor() { }

  ngOnInit(): void {
  }

}
