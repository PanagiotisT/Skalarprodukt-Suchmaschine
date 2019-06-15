import { Component, OnInit } from '@angular/core';
import { Vector } from '../vector';

@Component({
  selector: 'app-hauptteil',
  templateUrl: './hauptteil.component.html',
  styleUrls: ['./hauptteil.component.css']
})
export class HauptteilComponent implements OnInit {

  // Searchquery
  searchquery: string;
  cleanSearchquery: string;
  symbole: string[];

  // Später Vektor Suchanfrage und Vektor SeitenInhalte
  vektor1: Vector
  vektor2: Vector

  constructor() { }

  ngOnInit() {
  }

  searchqueryUpdate() {
    // Suchquery in einzelne Wörter aufteilen diese dann in einen Vektor umwandeln 
    // Später noch filter funktion hinzufügen, dass füllwörter weggelassen werden etc.
    // Oder mit gewichtungen arbeiten dass bestimmte Wörter einen höheren Wert haben.
    

    // Überprüfen ob searchquery symbole enthält z.b ?!,:; etc.. Falls ja Symbole entfernen
    let symbole = ['?' , '!' , ',' , ';']


    // Bug mit den Leerzeichen fixxen 
    //  -----------------------------------------------------------------------------
    console.log(`Vor der Überprüfung:  ${this.searchquery}`)

    this.cleanSearchquery = this.containsSymbol(this.searchquery, symbole)

    console.log(`Nach der Überprüfung:  ${this.cleanSearchquery}`)

    let woerter = this.cleanSearchquery.split(" ")

    console.log(`Wörter gesplittet: ${woerter}. Es gibt ${woerter.length} Wörter.`)
    // ---------------------------------------------------------------------------------------

  }

  containsSymbol(target: string, pattern: string[]) {

    // Führe die Funktion aus, wenn was im target string steht
    if(target != undefined){
      
      pattern.forEach( (element) => {
        // Wenn eins der Symbole ethalten ist entferne es
        if(target.includes(element)){
          target = target.replace(element, '')
          target = target.replace(' ', '')
        }           
      });

      return target
    }
  }

}
