import { Component, OnInit } from '@angular/core';
import { Vector } from '../vector';
import { createRendererV1 } from '@angular/core/src/view/refs';


@Component({
  selector: 'app-kopfbereich',
  templateUrl: './kopfbereich.component.html',
  styleUrls: ['./kopfbereich.component.css']
})
export class KopfbereichComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let vektoren = new Vector([0,0,0]);

    let test = new Vector([1,2,5])
    let test2 = new Vector([1,2,1])

    console.log(test.laenge())

    // console.log(vektoren.skalarprodukt(test,test2))

  }

}
