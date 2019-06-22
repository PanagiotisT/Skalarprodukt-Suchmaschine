import { Component, OnInit, ViewChild } from '@angular/core';
import { Vector } from '../vector';
import { ShowDetailsComponent } from '../show-details/show-details.component'

import { Seite } from '../seite';
import { SEITE } from '../seiten';
import { Key } from 'protractor';

@Component({
  selector: 'app-hauptteil',
  templateUrl: './hauptteil.component.html',
  styleUrls: ['./hauptteil.component.css']
})
export class HauptteilComponent implements OnInit {
  @ViewChild(ShowDetailsComponent) child: ShowDetailsComponent;

  // Beispielseiten
  seiten: Seite[] = SEITE
  // Seiten Sortiert nach Übereinstimmung
  byTreffer: Seite[]

  // Searchquery
  searchquery: string
  cleanSearchquery: string
  woerter: string[]
  woerterAnzeigen: {}[]
  isEmpty: boolean

  // Überprüfen ob searchquery symbole enthält wie z.b ?!,:; etc.. Falls ja Symbole entfernen
  symbole = ['\\?', '!', ',', ';', '  ', '\\.']

  // Suchanfrage Vektor
  suchanfragenVektor: Vector
  vector: Vector

  // Array mit allen Wörtern von jeder Seite
  // Wird später in einen Vektor umgewandelt und anschließend
  // mit dem Suchvektor verglichen
  indexArray: string[]

  // Enthält die Wörter jeder Seite Sortiert
  // Beispiel index 0 ist die Seite 0 dort sind alle Wörter enthalten die auf der Seite vorkommen 
  seitenInhalte: string[][]

  // Array mit Nummern Array um später daraus Vektoren zu erstellen
  vectorArray: number[][]

  constructor() { }

  ngOnInit() {

    // Variablen initialisieren
    this.isEmpty = true
    this.indexArray = []
    this.seitenInhalte = []
    this.vectorArray = []
    this.vector = new Vector([0])
    this.byTreffer = []

    // copy array 
    this.seiten.forEach((site) => {
      this.byTreffer.push(site)
    })

    // Alle Seiten durchgehen vorkommene Wörter in ein Array schreiben
    this.seiten.forEach((seite) => {

      // Symbole aus den Wörtern entfernen in diesem Fall , und .
      let inhaltCleaned = this.containsSymbol(seite.inhalt.toLowerCase(), this.symbole)

      // Seiteninhalt in einzelne Wörter umwandeln und in array packen wenn sie noch nicht drin sind
      let inhaltSplitted = inhaltCleaned.trim().replace("/"," ").split(" ")
      // Seiteninhalte speichern für späteren zugriff
      this.seitenInhalte.push(inhaltSplitted)

      // --------------------------
      // Später nur Wörter im index speichern die Aussagekraft haben 
      // also wörter wie z.b ist, was, und usw. weglassen
      // --------------------------


      // Hier werden alle Wörter gespeichert die vorkommen aber nur einmal.
      // Wenn das wort "Java" auf mehreren Seiten vorkommt, dann wird es nur einmal gespeichert im Index
      inhaltSplitted.forEach((wort) => {
        // Wenn das Wort noch nicht im Indexarray ist schreib es rein ansonsten mache nichts
        if (!this.indexArray.includes(wort)) {
          this.indexArray.push(wort)
        }
      })

    })

    // Alle Seiten nochmal durchgehen um einen Vektor für jede Seite zu erstellen.
    this.seiten.forEach((seite) => {
      let vektorParameter = []

      // Wenn das wort aus dem indexArray enthalten ist schreibe eine 1 an der stelle für den Vektor ansonsten 0
      this.indexArray.forEach((wort) => {
        if (this.seitenInhalte[seite.id].includes(wort)) {
          vektorParameter.push(1)
        } else {
          vektorParameter.push(0)
        }
      })

      vektorParameter.push(0)
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

      // Speichere "sauberen" searchquery in eine neue variable
      this.cleanSearchquery = this.containsSymbol(this.searchquery.toLowerCase(), this.symbole)

      // Alle eingegebenen Wörter werden in einem string array gespeichert
      this.woerter = this.cleanSearchquery.trim().split(" ")

      console.log(this.woerter)

      // Vektor für die Suchanfrage erstellen
      let vektorparameter = []

      // Überprüfe Ob eingegebene Wörter im IndexArray stehen
      // Wenn ja schreibe eine 1 an die Stelle ansonsten eine 0
      this.indexArray.forEach((wort) => {
        if (this.woerter.includes(wort)) {
          vektorparameter.push(1)
        } else {
          vektorparameter.push(0)
        }
      })
      vektorparameter.push(0)

      if(this.woerter.length >= 3){
        console.log("Mehr als drei suche ob worter hintereinander auftreten")

        // Überprüfe ob die Sucheingabe 1 zu 1 auf einer Seite enthalten ist
        let satz = ""
        this.woerter.forEach((wort) => {
          satz += wort + " ";
        })

        this.seiten.forEach ( (seite) => {
          if(seite.inhalt.toLowerCase().includes(satz)){
            console.log(seite.id + " enthält den satz " + satz)
            this.vectorArray[seite.id][this.vectorArray[seite.id].length-1] = 5
            vektorparameter[vektorparameter.length-1] = 5
          }else{
            this.vectorArray[seite.id][this.vectorArray[seite.id].length-1] = 0
          }
        })

        console.log(vektorparameter)

        console.log(this.vectorArray)
      }

      //Erstelle einen Vektor für die Suchanfrage
      this.suchanfragenVektor = new Vector(vektorparameter)
      console.log(this.suchanfragenVektor)

      // Falls alle Wörter gelöscht wurden losche das "" aus dem array
      if(this.woerter.includes("")){
        this.woerter.pop();
      }

      // Überprüfe welches eingegebene wort im index existiert
      let test = []
      this.woerter.forEach((wort) => {
        if (this.indexArray.includes(wort)) {
          test[wort] = true
        } else if(!this.indexArray.includes(wort)){
          test[wort] = false
        }
      })
      this.woerterAnzeigen = test

      console.log(this.woerterAnzeigen)
      
      //Winkel zwischen Suchvektor und Seitenvektoren berechnen und Seiten sortieren


      // Wenn nichts in der Sucheingabe steht zeig auch keine woerter an in der detail komponente
      // isEmpty wid übergeben an showDetails. 
      // Sonst zeigt er ein roten/Grünen Pixel an wenn man seine eingabe löscht weil "" im array noch steht
      if(Object.keys(this.woerterAnzeigen).length != 0){
        this.isEmpty = false;
        this.sortSites()
      }else{
        this.isEmpty = true;
        this.seiten.forEach( (seite) => {
            seite.uebereinstimumng = 0;
        })
      }
  }

  sortSites() {
    console.log("Sort Sites aufgerufen")

    // Alle Seitenvektoren durchgehen
    this.vectorArray.forEach((vektor, i) => {
      // let without = []
      // without = [...vektor]
      // without.pop();
      // Winkel zwischen Suchvektor und Seitenvektor ausrechnen
      // Destso kleiner der Winkel destso höher die Übereinstimmung
      let uebereinstimung = this.vector.getAngle(this.suchanfragenVektor, new Vector(vektor))
      console.log(uebereinstimung)

      console.log("Seite" + i)

      // Wenn Suchvektor 0 ist dann schreibe null in die Übreinstimmung
      // Ansonsten schreibe die übreinstimmung in die jeweilige Seite
      if (Number.isNaN(uebereinstimung)) {
        //this.seiten[i].uebereinstimumng = 0
      } else {
        this.seiten[i].uebereinstimumng = Number(uebereinstimung.toFixed(2))
      }
    })

    // Sortiere die Seiten nach der Übereinstimmung
    // Je höher die Übereinstimmung destso höher ist die Seite
    this.byTreffer.sort((a, b) => {
      return a.uebereinstimumng > b.uebereinstimumng ? -1 : b.uebereinstimumng > a.uebereinstimumng ? 1 : 0;
    })

    // Überschreibe die Seiten mit dem Sortierten Seiten
    console.log(this.byTreffer)
  }

  // Diese Funktion entfernt Symbole wie z.B ?, !, . , ; usw. aus dem searchquery 
  containsSymbol(target: string, pattern: string[]) {

    // Führe die Funktion aus, wenn was im target string steht
    if (target != undefined) {

      pattern.forEach((element) => {
        // Wenn eins der Symbole ethalten ist entferne es
        target = target.replace(new RegExp(element, 'g'), '')
      });
      return target
    }
  }
}
