import { Seite } from './seite';

export const SEITEN: Seite[] = [
    {
        "id": 0,
        "inhalt": `In diesem Abschnitt geht es um die Funktionalität der Suchmaschine. Jede Karte stellt eine Internetseite dar.
        Im ersten Schritt werden alle Seiten durchsucht und jedes Wort welches gefunden wird gespeichert. Nach diesem Schritt hat man ein
        Array mit allen auftretenden Wörter. Wörter/Begriffe die mehrmals vorkommen werden nur einmal gespeichert. Anhand des Arrays wird 
        für jede Seite ein Vektor erstellt. Ist das Wort enthalten wir an die jeweilige Stelle eine 1 gesetzt ansonsten eine 0. 
        Wenn ein Benutzer eine Suchanfrage in das Input field eingibt, dann wird die Anfrage gefiltert, sodass Soderzeichen nicht berücksichtig werden bei der Suche und anschließen in einzelne Wörter aufgeteilt.
        Jetzt werden die eingegebenen Wörter mit dem InhaltsArray verglichen. Existiert das eingegebene Wort im Array dann wird an dieser Stelle 
        eine 1 geschrieben ansonsten eine 0. Jetzt wird der Suchvektor mit dem Vektor jeder Seite verglichen ( Kosinus-Ähnlichkeit berechnen Ergebnis von 0 - 1. 1 = Identisch, 0 = keine Verbindung). 
        Die Seiten werden nach dieser Übereinstimmung sortiert und angezeigt.`,
        "uebereinstimumng": 0,
        "url": "Funktionalität der Suchmaschine"
    },
    {
        "id": 1,
        "inhalt": ` Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. 
        Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert. [...] Angular wurde als 
        Nachfolger von AngularJS von Grund auf neu geschrieben und unterscheidet sich von diesem in vielerlei Hinsicht: Angular kennt keine "scopes" oder Controller, sondern 
        verwendet eine Hierarchie von Komponenten als zentrales Architekturkonzept. Angular hat eine einfachere Syntax für Ausdrücke: Mit "[ ]" werden Bindings für Eigenschaften und mit "( )" werden Bindings für Events erzeugt.
        Mobile-First-Ansatz: Die Anforderungen von mobilen Plattformen haben besondere Priorität.
        Modularität: Ein Teil der Kernfunktionalität wurde in Module verschoben, so dass der Kern leichtgewichtiger und schneller wird. [...]`,
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/Angular"
    },
    {
        "id": 2,
        "inhalt": `TypeScript ist eine von Microsoft entwickelte Programmiersprache, die auf den Vorschlägen 
        zum ECMAScript-6-Standard basiert. Sprachkonstrukte von TypeScript, wie Klassen, Vererbung, Module, anonyme 
        Funktionen und Generics wurden auch in ECMAScript 6 übernommen. [...] peScript unterstützt mit Modulen das Kapseln von Klassen, 
        Interfaces, Funktionen und Variablen in eigene Namensräume. Dabei wird zwischen internen und externen Modulen unterschieden. Interne 
        Module lehnen sich an die Modul-Spezifikation aus ECMAScript 6 an, wohingegen externe Module eine JavaScript-Bibliothek (AMD oder CommonJS) nutzen. [...]`,
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/TypeScript"
    },
    {
        "id": 3,
        "inhalt": `JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für 
        dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, 
        nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern. Heute findet JavaScript auch außerhalb 
        von Browsern Anwendung, so etwa auf Servern und in Microcontrollern. Der heutige Name der ursprünglich LiveScript genannten Sprache entstand 1996 aus einer 
        Kooperation von Netscape mit Sun Microsystems. Deren Java-Applets, erstellt mit der gleichfalls 1995 
        veröffentlichten Programmiersprache Java, wurden mithilfe von LiveScript in den Netscape Navigator integriert.`,
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/JavaScript"
    },
    {
        "id": 4,
        "inhalt": `Im Allgemeinen ist ein Vektor ein Element von einem Vektorraum. 
        In der Schule werden in der Regel nur zwei- und dreidimensionale Räume (Vektorräume, also Koordinatensysteme mit x- und y-Achse 
            beziehungsweise x-, y- und z-Achse) behandelt, weshalb diese hier auch vorrangig behandelt werden sollen. In diesen Räumen können 
            Vektoren als Pfeil dargestellt werden. [...] Für x, y, z werden später meistens Werte stehen. Dieser „Vektor x“ ist ein Beispiel 
            für ein Vektor aus dem dreidimensionalen Raum. Die drei Werte geben praktisch an wie viel man in x-Richtung, y-Richtung und z-Richtung „gehen“ muss.`,
        "uebereinstimumng": 0,
        "url": "https://www.mathematik-wissen.de/definition_von_vektoren.htm"
    },
    {
        "id": 5,
        "inhalt": `Das Skalarprodukt zweier Vektoren ergibt einen skalare Größe und ist definiert durch: 
        Dabei ist a der Winkel zwischen den beiden Vektoren und . Ein Beispiel dafür ist: Wie man sieht ist das Ergebnis eine Zahl (22), kein Vektor.
        Zwei vom Nullvektor verschiedene Vektoren   und  stehen genau dann senkrecht aufeinander, sind also orthogonal, wenn ihr Skalarprodukt verschwindet: `,
        "uebereinstimumng": 0,
        "url": "https://www.mathe-online.at/materialien/Andreas.Pester/files/Vectors/skalarprodukt_zweier_vektoren.htm"
    },
    {
        "id": 6,
        "inhalt": `Winkel zwischen zwei Vektoren. In der linearen Algebra und der analytischen Geometrie ist häufig nach dem Winkel 
        zwischen zwei Vektoren gefragt. Seien u und v zwei Vektoren in , dann ist der Kosinus des Winkels θ zwischen den beiden Vektoren 
        definiert als: [...] Bei der Berechnung wird immer der kleinere Winkel θ berechnet.`,
        "uebereinstimumng": 0,
        "url": "https://matheguru.com/lineare-algebra/winkel-zwischen-zwei-vektoren.html"
    },
    {
        "id": 7,
        "inhalt": `Die Programmierung, also die Erstellung oder auch Implementierung von Computerprogrammen, ist ein Teilbereich der Softwareentwicklung. Beim Programmieren 
        wird der Softwareentwurf in Quelltext umgesetzt. Bei einigen Programmiersprachen fällt auch das Übersetzen des Quelltextes in die Maschinensprache, zu Deutsch Kompilieren,
        in diesen Aufgabenbereich. Man verwendet zum Programmieren bestimmte Sprachen. Mit Hilfe dieser Programmiersprachen werden die im Pflichtenheft formulierten 
        Anforderungen in eine für den Computer verständliche Sprache übersetzt. Programmierer werden bei ihrer Arbeit inzwischen häufig von sogenannten Code-Generatoren 
        unterstützt. Diese sind in der Lage, den Programmcode zumindest teilweise auf Grundlage von Modellen automatisch zu erzeugen. Das Programmieren besteht weiterhin aus 
        dem Testen des erstellten Codes (Entwicklertest) sowie aus dem Anfertigen einer Softwaredokumentation.`,
        "uebereinstimumng": 0,
        "url": "https://www.dev-insider.de/was-ist-programmierung-a-606763/"
    },
    {
        "id": 8,
        "inhalt": `Visual Studio Code (kurz VS Code) ist ein freier Quelltext-Editor von Microsoft. Visual Studio Code ist plattformübergreifend für die Betriebssysteme Windows, 
        macOS und Linux verfügbar. Visual Studio Code basiert auf dem Framework Electron und ermöglicht u. a. Syntaxhervorhebung, Code-Faltung, Debugging, 
        Autovervollständigung und Versionsverwaltung. Bis auf den Namen, das Logo und einige Funktionen wie IntelliSense hat Visual Studio Code nichts mit Visual Studio gemeinsam. Im Unterschied zu Visual Studio arbeitet Visual Studio Code nicht mit 
        Projektdateien, sondern auf Basis von Quelltextdateien und Ordnern.`,
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/Visual_Studio_Code"
    },
    {
        "id": 9,
        "inhalt": `Sinn und Funktion von GitHub stecken schon im zweiteiligen Namen: Git ist nämlich auch der Name einer Software zur Versionsverwaltung. 
        Und was ist das schon wieder? Ganz einfach: An einem Software-Projekt arbeiten heutzutage oftmals mehrere, teilweise sogar Hunderte oder Tausende 
        Entwickler mit. Von denen widmet sich jeder einem anderen Teil des Programms, und deren Arbeitsergebnisse müssen irgendwo zusammengeführt werden. 
        Natürlich könnte jeder Entwickler seine Änderungen und Neuerungen an eine zentrale Person schicken, und diese kümmert sich dann ausschließlich darum, 
        den erhaltenen Code immer zu aktualisieren. Genau diese Tätigkeit lässt sich aber mithilfe einer Versionsverwaltung wie Git automatisieren. Und weil das 
        so praktisch ist und gut funktioniert, finden sich inzwischen viele bekannte Open-Source-Projekte auf GitHub wieder (zum Beispiel der Linux-Kernel, das 
            Web-App-Framework Ruby on Rails oder die JavaScript-Bibliothek jQuery).`,
        "uebereinstimumng": 0,
        "url": "https://t3n.de/news/eigentlich-github-472886/"
    }
]