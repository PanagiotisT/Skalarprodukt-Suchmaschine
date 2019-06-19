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
  // Beispielseiten
  seiten: Seite[] = SEITE;
  byTreffer: Seite[];

  // Searchquery
  woerter: string[];
  searchquery: string;
  cleanSearchquery: string;

  // Infos anzeigen
  anzeigen: boolean;

  // Suchanfrage Vektor
  suchanfragenVektor: Vector
  vector: Vector;

  // Array mit allen Wörtern von jeder Seite
  // Wird später in einen Vektor umgewandelt und anschließend
  // mit dem Suchvektor verglichen
  indexArray: string[];

  // Enthält die Wörter jeder Seite Sortiert
  // Beispiel index 0 ist die Seite 0 dort sind alle Wörter enthalten die auf der Seite vorkommen 
  seitenInhalte: string[][]

  // Array mit Nummern Array um später daraus Vektoren zu erstellen
  vectorArray: number[][]

  constructor() { }

  ngOnInit() {

    // Variablen initialisieren damit mit push Inhalte reingespeichert werden können
    this.anzeigen = false;
    this.indexArray = [];
    this.seitenInhalte = []
    this.vectorArray = []
    this.vector = new Vector([0])
    this.byTreffer = []

    // copy array 
    this.seiten.forEach( (site) => {
      this.byTreffer.push(site)
    })

    // Alle Seiten durchgehen vorkommene Wörter in ein Array schreiben
    this.seiten.forEach( (seite) => {

      // Symbole aus den Wörtern entfernen in diesem Fall , und .
      let inhaltCleaned = this.containsSymbol(seite.inhalt.toLowerCase(), [',' , '\\.'])

      // Seiteninhalt in einzelne Wörter umwandeln und in array packen wenn sie noch nicht drin sind
      let inhaltSplitted = inhaltCleaned.trim().split(" ")
      // Seiteninhalte speichern für späteren zugriff
      this.seitenInhalte.push(inhaltSplitted)

      // --------------------------
      // Später nur Wörter im index speichern die Aussagekraft haben 
      // also wörter wie z.b ist was und weglassen
      // --------------------------

      // Hier werden alle Wörter gespeichert die vorkommen aber nur einmal.
      // Wenn das wort "Java" auf mehreren Seiten vorkommt, dann wird es nur einmal gespeichert im Index
      inhaltSplitted.forEach( (wort) => {
        // Wenn das Wort noch nicht im Indexarray ist schreib es rein ansonsten mache nichts
        if(!this.indexArray.includes(wort)){
          this.indexArray.push(wort)
        }
      })

    })

    // Alle Seiten nochmal durchgehen um einen Vektor für jede Seite zu erstellen.
    this.seiten.forEach( (seite) => {
      let vektorParameter = []

      // Wenn das wort aus dem indexArray enthalten ist schreibe eine 1 an der stelle für den Vektor ansonsten 0
      this.indexArray.forEach((wort) => {
        if(this.seitenInhalte[seite.id].includes(wort)) {
          vektorParameter.push(1)
        }else {
          vektorParameter.push(0)
        }
      })

      // Vektor erstellen und dem Array hinzufügen
      this.vectorArray.push(vektorParameter)
    })

    // Vektoren aller Seiten
    console.log(this.vectorArray)

    // Alle vorkommenden Wörter
    console.log(this.indexArray)
  }

  // Wird aufgerufen sobald eine neue Usereingabe stattfindet
  searchqueryUpdate() {

    // Überprüfen ob searchquery symbole enthält wie z.b ?!,:; etc.. Falls ja Symbole entfernen
    let symbole = ['\\?' , '!' , ',' , ';', "  "]

    // Speichere "sauberen" searchquery in eine neue variable
    this.cleanSearchquery = this.containsSymbol(this.searchquery.toLowerCase(), symbole)

    // Alle eingegebenen Wörter werden in einem string array gespeichert
    this.woerter = this.cleanSearchquery.trim().split(" ")
 
    // Vektor für die Suchanfrage erstellen
    let vektroparameter = []

    // Überprüfe Ob eingegebene Wörter im IndexArray stehen
    // Wenn ja schreibe eine 1 an die Stelle ansonsten eine 0
    this.indexArray.forEach((wort) => {
      if(this.woerter.includes(wort)){
        vektroparameter.push(1)
      }else{
        vektroparameter.push(0)
      }
    })

    this.suchanfragenVektor = new Vector(vektroparameter)
    console.log(this.suchanfragenVektor)

    let numbers = []
    this.vectorArray[1].forEach ( (el) => {
      numbers.push(el);
    })

    // Test
    // ----------------------------------- 
    // console.log(numbers)

    // let erg = this.vector.getAngle(this.suchanfragenVektor, new Vector(numbers))
    // console.log(erg)

    // ----------------------------------- 
    
    //Winkel zwischen Suchvektor rund Seitenvektoren berechnen und Seiten sortieren
    this.sortSites()
    
  }

  sortSites() {

    console.log("aufgerufen")

    // Alle Seitenvektoren durchgehen
    this.vectorArray.forEach((vektor, i) => {
      // Winkel zwischen Suchvektor und Seitenvektor ausrechnen
      // Destso kleiner der Winkel destso höher die Übereinstimmung
      let uebereinstimung = this.vector.getAngle(this.suchanfragenVektor, new Vector(vektor))
      console.log(uebereinstimung)

      // Wenn Suchvektor 0 ist also kein Wort in de nSeiten enthalten ist dann gebe 0 zurück
      // Ansonsten schreibe die übreinstimmung in die jeweilige Seite
      if (Number.isNaN(uebereinstimung)) {
        this.seiten[i].uebereinstimumng = 0
        console.log(this.seiten[i].uebereinstimumng)
      } else {
        this.seiten[i].uebereinstimumng = Number(uebereinstimung.toFixed(2))
      }
    })

    // Sortiere die Seiten nach der Übereinstimmung
    // Je höher die Übereinstimmung destso höher ist die Seite
    //this.byTreffer = this.seiten.slice(0)
    this.byTreffer.sort((a, b) => {
      return a.uebereinstimumng > b.uebereinstimumng ? -1 : b.uebereinstimumng > a.uebereinstimumng ? 1 : 0;
    })

    // Überschreibe die Seiten mit dem Sortierten Seiten
    console.log(this.byTreffer)
  }

  // Diese Funktion entfernt Symbole wie z.B ?, !, . , ; usw. aus dem searchquery 
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

  switchAnzeigen(){
    this.anzeigen = !this.anzeigen;
  }

}
