import { Component, OnInit, ViewChild } from '@angular/core';
import { Vector } from '../vector';
import { ShowDetailsComponent } from '../show-details/show-details.component'

import { Seite } from '../seite';
import { SEITEN } from '../seiten';

@Component({
  selector: 'app-hauptteil',
  templateUrl: './hauptteil.component.html',
  styleUrls: ['./hauptteil.component.css']
})
export class HauptteilComponent implements OnInit {
  @ViewChild(ShowDetailsComponent) child: ShowDetailsComponent;

  // Beispielseiten
  seiten: Seite[] = SEITEN
  // Seiten Sortiert nach Übereinstimmung
  byTreffer: Seite[]

  // Searchquery
  searchquery: string
  cleanSearchquery: string
  woerter: string[]
  woerterAnzeigen: {}[]
  isEmpty: boolean

  // Überprüfen ob searchquery symbole enthält wie z.b ?!,:; etc.. Falls ja Symbole entfernen
  symbole = ['\\?', '!', ',', ';', '  ', '\\.', '\\(', '\\)', '\\/', '\\-']
  filterWoerter: string[]

  // Suchanfrage Vektor
  suchanfragenVektor: Vector
  vector: Vector

  // Array mit allen Wörtern von jeder Seite
  // Wird später in einen Vektor umgewandelt und anschließend
  // mit dem Suchvektor verglichen
  indexArray: string[]
  indexString: string

  // Enthält die Wörter jeder Seite Sortiert
  // Beispiel index 0 ist die Seite 0 dort sind alle Wörter enthalten die auf der Seite vorkommen 
  seitenInhalte: string[][]

  // Array mit Nummern Array um später daraus Vektoren zu erstellen
  vectorArray: number[][]

  constructor() { }

  ngOnInit() {

    // Variablen initialisieren
    this.filterWoerter = ['was', 'eine', 'ein', 'ist', 'wie', 'gut', 'kleinere', 'geht', 'es', 'um', 'diesem', 'in', 'um', 'der', 'die', 'das', 'es', 'aber', 'abermals', 'ähnlich', 'allein', 'allem Anschein nach', 'allemal', 'allenfalls', 'allenthalben', 'allerdings', 'allesamt', 'allgemein', 'allmählich', 'allzu', 'also', 'alt', 'an sich', 'andauernd', 'andererseits', 'andernfalls', 'anscheinend', 'auch', 'auffallend', 'aufgrund', 'aufs Neue', 'augenscheinlich', 'ausdrücklich', 'außerdem', 'ausgerechnet', 'ausnahmslos', 'bald', 'bei Weitem', 'beide', 'beiden', 'beiderlei', 'beides', 'beinahe', 'bekanntlich', 'bereits', 'besonders', 'besser', 'bestenfalls', 'bestimmt', 'beträchtlich', 'bevor', 'bezüglich', 'bisher', 'bislang', 'bloß', 'da', 'dabei', 'dadurch', 'dafür', 'dagegen', 'daher', 'dahin', 'damals', 'damit', 'danach', 'daneben', 'dank', 'dann', 'dann', 'und', 'wann', 'daran', 'darauf', 'daraus', 'darin', 'darum', 'davon', 'davor', 'dazu', 'demgegenüber', 'demgemäß', 'demnach', 'demselben', 'denn', 'dennoch', 'derart', 'derartig', 'des Öfteren', 'deshalb', 'desto', 'desungeachtet', 'deswegen', 'diesmal', 'direkt', 'direkte', 'direkten', 'direkter', 'doch', 'durchaus', 'durchweg', 'eben', 'ebenfalls', 'ebenso', 'ehe', 'eher', 'eigenen', 'eigenes', 'eigentlich', 'ein bisschen', 'ein wenig', 'einerseits', 'einfach', 'einige', 'einigermaßen', 'einmal', 'entsprechend', 'erst', 'etliche', 'etwa', 'etwas', 'fast', 'förmlich', 'freilich', 'ganz', 'ganz und gar', 'gänzlich', 'gar', 'gar nicht', 'gefälligst', 'gelegentlich', 'gemeinhin', 'genau', 'genug', 'geradezu', 'gern', 'gewiss', 'gewisse', 'gewissermaßen', 'glatt', 'gleich', 'gleichsam', 'gleichwohl', 'gleichzeitig', 'glücklicherweise', 'größtenteils', 'halt', 'hätte', 'häufig', 'herein', 'hier und da', 'hiermit', 'hiesige', 'hingegen', 'hinlänglich', 'hinterher', 'höchst', 'höchstens', 'im Allgemeinen', 'im Grunde', 'genommen', 'im', 'Prinzip', 'immer', 'immerhin', 'immerzu', 'in der Tat', 'in diesem Zusammenhang', 'indessen', 'infolge', 'infolgedessen', 'innen', 'innerhalb', 'insbesondere', 'insofern', 'inzwischen', 'irgend', 'irgendein', 'irgendeine', 'irgendjemand', 'irgendwann', 'irgendwas', 'irgendwen', 'irgendwer', 'irgendwie', 'irgendwo', 'ja', 'je', 'jedenfalls', 'jedoch', 'jemals', 'jetzt', 'kaum', 'keinesfalls', 'keineswegs', 'konkret', 'konkrete', 'konkreten', 'konkreter', 'konkretes', 'künftig', 'könnte', 'längst', 'längstens', 'lassen', 'lediglich', 'leider', 'letztendlich', 'letztlich', 'mal', 'mancherorts', 'manches', 'manchmal', 'mehr oder weniger', 'mehrfach', 'meines Erachtens', 'meinetwegen', 'meist', 'meistens', 'meistenteils', 'mindestens', 'mithin', 'mitunter', 'möglich', 'mögliche', 'möglichen', 'möglicher', 'möglicherweise', 'möglichst', 'nämlich', 'naturgemäß', 'natürlich', 'neuerdings', 'neuerlich', 'neulich', 'nichtsdestotrotz', 'nichtsdestoweniger', 'nötigenfalls', 'nun', 'nunmehr', 'oder', 'offenbar', 'offenkundig', 'offensichtlich', 'oft', 'ohne Weiteres', 'ohne Zweifel', 'ohnedies', 'partout', 'persönlich', 'plötzlich', 'praktisch', 'quasi', 'recht', 'reichlich', 'reiflich', 'relativ', 'restlos', 'richtiggehend', 'riesig', 'rundheraus', 'rundum', 'samt', 'samt und sonders', 'sämtliche', 'sattsam', 'schlicht', 'schlichtweg', 'schließlich', 'schlussendlich', 'schon', 'schwerlich', 'sehr', 'selber', 'selbst', 'selbstredend', 'selbstverständlich', 'selten', 'seltsamerweise', 'sicher', 'sicherlich', 'so', 'sogar', 'sonst', 'sowieso', 'sowohl als auch', 'sozusagen', 'stellenweise', 'stets', 'tatsächlich', 'tatsächlichen', 'tatsächlicher', 'tatsächliches', 'total', 'trotzdem', 'überaus', 'überdies', 'überhaupt', 'übrigens', 'umständehalber', 'unbedingt', 'ungemein', 'vergleichsweise', 'vermutlich', 'vielfach', 'vielleicht', 'voll', 'voll und ganz', 'vollends', 'völlig', 'vollkommen', 'vollständig', 'von Neuem', 'wahrscheinlich', 'weitem', 'weiter', 'weitere', 'weiterem', 'weiteren', 'weiterer', 'weiteres', 'weiterhin', 'weitgehend', 'welche', 'welchem', 'welchen', 'welcher', 'wenig', 'wenige', 'weniger', 'wenigstens', 'wenn', 'wenngleich', 'weshalb', 'wieder', 'wiederum', 'wiewohl', 'wirklich', 'wodurch', 'wogegen', 'woher', 'wohin', 'wohingegen', 'wohl', 'wohlgemerkt', 'wohlweislich', 'wollen', 'wollt', 'wollte', 'wollten', 'wolltest', 'wolltet', 'womit', 'womöglich', 'woraufhin', 'woraus', 'worin', 'wurde', 'würden', 'zahlreich', 'zeitweise', 'ziemlich', 'zudem', 'zugegeben', 'zumeist', 'zusehends', 'zusehens', 'zuweilen', 'zwar', 'zweifellos', 'zweifelsfrei', 'zweifelsohne']

    this.isEmpty = true
    this.indexArray = []
    this.indexString = ""
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
      let inhaltSplitted = inhaltCleaned.trim().split(' ')

      //Seiteninhalet filtern von füllwörtern
      this.filterWoerter.forEach((wort) => {
        inhaltSplitted = inhaltSplitted.filter(e => e !== wort);
      })

      // console.log(inhaltSplitted)

      // Seiteninhalte speichern für späteren zugriff
      this.seitenInhalte.push(inhaltSplitted)

      // Hier werden alle Wörter gespeichert die vorkommen aber nur einmal.
      // Wenn das wort 'Java' auf mehreren Seiten vorkommt, dann wird es nur einmal gespeichert im Index
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

    // Index Array in string
    this.indexString = this.indexArray.join(' ')
    // console.log(this.indexString)

  }

  // Wird aufgerufen sobald eine neue Usereingabe stattfindet
  searchqueryUpdate() {

    // Speichere 'sauberen' searchquery in eine neue variable
    this.cleanSearchquery = this.containsSymbol(this.searchquery.toLowerCase(), this.symbole)

    // Alle eingegebenen Wörter werden in einem string array gespeichert
    this.woerter = this.cleanSearchquery.trim().toLowerCase().split(' ')

    //Suchquery filtern
    // this.filterWoerter.forEach((wort) => {
    //   this.woerter = this.woerter.filter(e => e !== wort);
    // })

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

    if (this.woerter.length >= 3) {
      console.log('Mehr als drei suche ob worter hintereinander auftreten')

      // Überprüfe ob die Sucheingabe 1 zu 1 auf einer Seite enthalten ist
      // KOMBIS wenn ein Wort dazu kommt gibt es auch ein Kombi mehr
      //3 Wörter 1 Kombi
      // / 4 Wörter 2 Kmbis 
      // 5 Wörter 3 Kombis also anzahl wörter minus 2 = anzahl kombinationen
      let kombinationen = []

      //Anzahl an durchgänge
      let anzahl = this.woerter.length - 2;

      for (let i = 0; i < anzahl; i++) {
        let satz = ''

        for (let j = 0; j < 3; j++) {
          satz += this.woerter[j + i] + ' '
        }

        // Leerzeichen am Ende entfernen
        let ohneSpace = satz.trim();
        kombinationen.push(ohneSpace)
      }

      console.log(kombinationen)

      this.seitenInhalte.forEach((seite, i) => {
        let inhaltAlsString = ''

        seite.forEach((wort) => {
          inhaltAlsString += wort + ' ';
        })

        let kombiVorhanden = false

        // Wenn eine Kombination auf einer Seite vorkommt dann pushe die Übereinstimmung 
        kombinationen.forEach((kombi) => {
          if (inhaltAlsString.toLowerCase().includes(kombi.toLowerCase())) {
            kombiVorhanden = true
          }

          if (kombiVorhanden) {
            this.vectorArray[i][this.vectorArray[i].length - 1] = 5
            vektorparameter[vektorparameter.length - 1] = 5
          } else {
            this.vectorArray[i][this.vectorArray[i].length - 1] = 0
          }
        })
      })

      console.log(vektorparameter)
      console.log(this.vectorArray)
    }

    //Erstelle einen Vektor für die Suchanfrage
    this.suchanfragenVektor = new Vector(vektorparameter)
    console.log(this.suchanfragenVektor)

    // Falls alle Wörter gelöscht wurden losche das '' aus dem array
    if (this.woerter.includes('')) {
      this.woerter.pop();
    }

    // Überprüfe welches eingegebene wort im index existiert
    let test = []

    console.log(this.indexArray)

    this.woerter.forEach((wort) => {
      if (this.indexArray.includes(wort)) {
        test[wort] = true
      } else if (!this.indexArray.includes(wort)) {
        test[wort] = false
      }
    })
    this.woerterAnzeigen = test

    console.log(this.woerterAnzeigen)

    //Winkel zwischen Suchvektor und Seitenvektoren berechnen und Seiten sortieren

    // Wenn nichts in der Sucheingabe steht zeig auch keine woerter an in der detail komponente
    // isEmpty wid übergeben an showDetails. 
    // Sonst zeigt er ein roten/Grünen Pixel an wenn man seine eingabe löscht weil '' im array noch steht
    if (Object.keys(this.woerterAnzeigen).length != 0) {
      this.isEmpty = false
      this.sortSites()
    } else {
      this.isEmpty = true
      this.seiten.forEach((seite) => {
        seite.uebereinstimumng = 0
      })

      // sortSites nach index
      this.sortSitesIndex()
    }
  }

  sortSites() {
    console.log('Sort Sites aufgerufen')

    // Alle Seitenvektoren durchgehen
    this.vectorArray.forEach((vektor, i) => {
      // Winkel zwischen Suchvektor und Seitenvektor ausrechnen
      // Destso kleiner der Winkel destso höher die Übereinstimmung
      let uebereinstimung = this.vector.getAngle(this.suchanfragenVektor, new Vector(vektor))

      console.log(uebereinstimung)
      console.log('Seite' + i)

      // Wenn Suchvektor 0 ist dann schreibe null in die Übreinstimmung
      // Ansonsten schreibe die übereinstimmung in die jeweilige Seite
      if (Number.isNaN(uebereinstimung)) {
        this.seiten[i].uebereinstimumng = 0
      } else {
        this.seiten[i].uebereinstimumng = Number(uebereinstimung.toFixed(2))
      }
    })

    // Sortiere die Seiten nach der Übereinstimmung
    // Je höher die Übereinstimmung destso höher ist die Seite
    this.byTreffer.sort((a, b) => {
      return a.uebereinstimumng > b.uebereinstimumng ? -1 : b.uebereinstimumng > a.uebereinstimumng ? 1 : 0
    })

    console.log(this.byTreffer)
  }

  // SOrtiert die Seiten nach dem Index Zuerst Seite1, Seite2 usw.
  sortSitesIndex() {
    this.byTreffer.sort((a, b) => {
      return a.id < b.id ? -1 : b.id > a.id ? 1 : 0
    })
  }

  // Diese Funktion entfernt Symbole wie z.B ?, !, . , ; usw. aus dem searchquery 
  containsSymbol(target: string, pattern: string[]) {

    // Führe die Funktion nur aus, wenn was im target string steht
    if (target != undefined) {

      pattern.forEach((element) => {
        // Wenn eins der Symbole ethalten ist entferne es
        target = target.replace(new RegExp(element, 'g'), ' ')
      });
      return target
    }
  }
}
