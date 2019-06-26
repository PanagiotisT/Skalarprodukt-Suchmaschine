import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  // Infos anzeigen
  anzeigen: boolean

  // Woerte rdie eingegeben wurden entgegen nehmen
  @Input() woerter: string[]

  //Steht was im Suchquery drin?
  @Input() isEmpty: boolean

  objectKeys = Object.keys

  constructor() { }

  ngOnInit() {
    this.anzeigen = false
  }

  switchAnzeigen() {
    this.anzeigen = !this.anzeigen
  }

}
