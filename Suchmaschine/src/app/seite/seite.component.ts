import { Component, OnInit, Input } from '@angular/core';
import { Seite } from '../seite';

@Component({
  selector: 'app-seite',
  templateUrl: './seite.component.html',
  styleUrls: ['./seite.component.css']
})
export class SeiteComponent implements OnInit {

  @Input() seitenInfos: Seite;


  constructor() { }

  ngOnInit() {
  }

}
