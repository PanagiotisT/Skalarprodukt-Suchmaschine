import { Component, OnInit } from '@angular/core';
import { Vector } from '../vector';

import { Seite } from '../seite';
import { SEITE } from '../seiten';

@Component({
  selector: 'app-hauptteil',
  templateUrl: './hauptteil.component.html',
  styleUrls: ['./hauptteil.component.css']
})
export class HauptteilComponent implements OnInit {

  // Searchquery
  searchquery: string;
  cleanSearchquery: string;

  // Später Vektor Suchanfrage und Vektor SeitenInhalte
  suchanfragenVektor: Vector
  seitenVektoren: Vector

  // Beispielseiten
  seiten: Seite[] = SEITE;

  // Array mit allen Wörtern von jeder Seite
  indexArray: string[];

  // Array mit Arrays lel
  seitenInhalte: string[][]

  // Map mit index der Seiten und Vektor der jeweiligen Seite
  vectorMap = new Map(); 

  constructor() { }

  ngOnInit() {

    this.indexArray = [];
    this.seitenInhalte = []

    //OnInit Vektoren erstellen für jede Seite

    // Seiten durchgehen vorkommene Wörter in ein Array schreiben
    this.seiten.forEach( (seite) => {

      // Symbole aus den Wörtern entfernen
      let inhaltCleaned = this.containsSymbol(seite.inhalt, [',' , '\\.'])

      // Seiteninhalt in einzelne Wörter umwandeln und in array packen wenn sie noch nicht drin sind
      let inhaltSplitted = inhaltCleaned.trim().split(" ")
      // Seiteninhalte speichern für späteren zugriff
      this.seitenInhalte.push(inhaltSplitted)

      // ------------------------------------------------------------------------------------------------------------------------
      // Hier später die Wörter Filtern oder Weiter oben also Wörter wie z.B ist, mit usw. entfernen nur Wörter mit Aussagekraft inkludieren

      inhaltSplitted.forEach( (wort) => {
        if(!this.indexArray.includes(wort)){
          this.indexArray.push(wort)
        }
      })
    })

    this.seiten.forEach( (seite) => {
      let vektorParameter = []

      // Vektor für die Seiten erstellen | Wenn wort enthalten ist schreibe eine 1 an der stelle für den Vektor ansonsten 0
      // Map erstellen index der Seite und den Vektor um später darauf zuzugreifen
      this.indexArray.forEach((wort) => {
        if(this.seitenInhalte[seite.id].includes(wort)) {
          vektorParameter.push(1)
        }else {
          vektorParameter.push(0)
        }
      })

      // Vektor erstellen und der Map hinzufügen
      let vektor = new Vector(vektorParameter)
      this.vectorMap.set(seite.id, vektor)
    })

    // Hier stehen alle Wörter die auf jeder Seite vorkommen hierdraus werden die Vektoren erstellt.
    console.log(this.vectorMap)
    console.log(this.indexArray)

    // Seitentrefferquote hier Anpassen
    // Wie kann ich die Sortieren? Am besten hier Sortieren und dann eine Kopie übergeben, welche schon sortiert ist dann kann das nacheinander angezeigt werden
    this.seiten[0].treffer = 20;
  }

  searchqueryUpdate() {
    // Überprüfen ob searchquery symbole enthält wie z.b ?!,:; etc.. Falls ja Symbole entfernen
    let symbole = ['\\?' , '!' , ',' , ';', "  "]

    //console.log(`Vor der Überprüfung:  ${this.searchquery}`)
    this.cleanSearchquery = this.containsSymbol(this.searchquery, symbole)
    // console.log(`Nach der Überprüfung:  ${this.cleanSearchquery}`)
    let woerter = this.cleanSearchquery.trim().split(" ")
    // console.log(woerter)
    // console.log(`Wörter gesplittet: ${woerter}. Es gibt ${woerter.length} Wörter.`)

    // Vektor für die Suchanfrage erstellen | Wenn wort enthalten ist schreiobe eine 1 an der stelle für den Vektor ansonsten 0
    let vektroparameter = []

    this.indexArray.forEach((wort) => {
      if(woerter.includes(wort)){
        vektroparameter.push(1)
      }else{
        vektroparameter.push(0)
      }
    })

    this.suchanfragenVektor = new Vector(vektroparameter)

    console.log(this.suchanfragenVektor)

    // Für Jeden Eintrag in der Map den Winkel zwischen Map eintrag und Suchanfrage ausrechnen und sortieren nach Trefferquote
  }

  containsSymbol(target: string, pattern: string[]) {

    // Führe die Funktion aus, wenn was im target string steht
    if(target != undefined){
      
      pattern.forEach( (element) => {
        // Wenn eins der Symbole ethalten ist entferne es
        target = target.replace(new RegExp(element, 'g'), '')       
      });
      return target
    }
  }

}
