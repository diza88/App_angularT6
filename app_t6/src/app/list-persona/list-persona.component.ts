import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IPersona } from '../persona/Ipersona';

@Component({
  selector: 'app-list-persona',
  templateUrl: './list-persona.component.html',
  styleUrls: ['./list-persona.component.css']
})


export class ListPersonaComponent implements OnInit {
  
  persona: IPersona [] =[
    {
      nombre: "Julia Lagrange",
      puesto: "Jefatura",
      fecha_ingreso: "Agregar fecha",
      estatus: "A",
      departamento: "Agregar depto"
    },
    {
      nombre: "Bibi Fulton",
      puesto: "Empleado",
      fecha_ingreso: "Agregar fecha",
      estatus: "C",
      departamento: "Agregar depto"
    },
    {
      nombre: "Zeta Jones",
      puesto: "Asistente",
      fecha_ingreso: "Agregar fecha",
      estatus: "B",
      departamento: "Agregar depto"
    },
    {
      nombre: "Alpha Centauri",
      puesto: "Empleado",
      fecha_ingreso: "Agregar fecha",
      estatus: "A",
      departamento: "Agregar depto"
    },
    {
      nombre: "Charles Crazy",
      puesto: "Empleado",
      fecha_ingreso: "Agregar fecha",
      estatus: "C",
      departamento: "Agregar depto"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
