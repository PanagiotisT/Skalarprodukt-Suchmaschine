import { Component, OnInit } from '@angular/core';
import { Vector } from '../vector';

@Component({
  selector: 'app-hauptteil',
  templateUrl: './hauptteil.component.html',
  styleUrls: ['./hauptteil.component.css']
})
export class HauptteilComponent implements OnInit {

  // Später Vektor Suchanfrage und Vektor SeitenInhalte
  vektor1: Vector
  vektor2: Vector


  constructor() { }

  ngOnInit() {
  }

}
