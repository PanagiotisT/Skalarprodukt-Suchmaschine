import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  // Infos anzeigen
  anzeigen: boolean

  // Prüfen ob Wort im Vector ist
  isInVector: boolean

  @Input() woerter: string[]

  objectKeys = Object.keys

  constructor() { }

  ngOnInit() {
    this.anzeigen = false
    console.log(this.woerter)

  }

  switchAnzeigen() {
    this.anzeigen = !this.anzeigen
  }

}
