import { Seite } from './seite';

export const SEITEN: Seite[] = [
    {
        "id": 0,
        "inhalt": "In diesem Abschnitt geht es um die Funktionalität der Suchmaschine. Die Karten stellen verschiedene Seiten dar. Im ersten Schritt werden alle Seiten durchsucht und jedes Wort welches gefunden wird gespeichert. Nach diesem Schritt hat man ein Array mit allen auftretenden Wörter. Wörter/Begriffe die mehrmals vorkommen werden nur einmal gespeichert. Anhand des Arrays wird für jede Seite ein Vektor erstellt. Ist das Wort enthalten wir an die jeweilige Stelle eine 1 gesetzt ansonsten eine 0. Wenn ein Benutzer eine Suchanfrage in das Input field eingibt, dann wird diese in einzelne Wörter aufgeteilt und Sonderzeichen werden herausgefiltert gefiltert. Jetzt werden die eingegebenen Wörter mit dem InhaltsArray verglichen. Existiert das eingegebene Wort im Array dann wird an dieser Stelle eine 1 geschrieben ansonsten eine 0. Jetzt wird der Suchvektor mit dem Vektor jeder Seite verglichen ( WInkel berechneen gibt die Pbereinstimmung an). Die Seiten werden nach dieser übereinstimmung sortiert und angezeigt.",
        "uebereinstimumng": 0,
        "url": "Funktionalität der Suchmaschine"
    },
    {
        "id": 1,
        "inhalt": " Angular ist ein TypeScript-basiertes Front-End-Webapplikationsframework. Es wird von einer Community aus Einzelpersonen und Unternehmen, angeführt durch Google, entwickelt und als Open-Source-Software publiziert.",
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/Angular"
    },
    {
        "id": 2,
        "inhalt": "TypeScript ist eine von Microsoft entwickelte Programmiersprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert. Sprachkonstrukte von TypeScript, wie Klassen, Vererbung, Module, anonyme Funktionen und Generics wurden auch in ECMAScript 6 übernommen.",
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/TypeScript"
    },
    {
        "id": 3,
        "inhalt": "JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML und CSS zu erweitern.",
        "uebereinstimumng": 0,
        "url": "https://de.wikipedia.org/wiki/JavaScript"
    },
    {
        "id": 4,
        "inhalt": "Im Allgemeinen ist ein Vektor ein Element von einem Vektorraum. In der Schule werden in der Regel nur zwei- und dreidimensionale Räume (Vektorräume, also Koordinatensysteme mit x- und y-Achse beziehungsweise x-, y- und z-Achse) behandelt, weshalb diese hier auch vorrangig behandelt werden sollen. In diesen Räumen können Vektoren als Pfeil dargestellt werden. [...] Für x, y, z werden später meistens Werte stehen. Dieser „Vektor x“ ist ein Beispiel für ein Vektor aus dem dreidimensionalen Raum. Die drei Werte geben praktisch an wie viel man in x-Richtung, y-Richtung und z-Richtung „gehen“ muss.",
        "uebereinstimumng": 0,
        "url": "https://www.mathematik-wissen.de/definition_von_vektoren.htm"
    },
    {
        "id": 5,
        "inhalt": "Das Skalarprodukt zweier Vektoren ergibt einen skalare Größe und ist definiert durch: Dabei ist a der Winkel zwischen den beiden Vektoren und . Ein Beispiel dafür ist: Wie man sieht ist das Ergebnis eine Zahl (22), kein Vektor.",
        "uebereinstimumng": 0,
        "url": "https://www.mathe-online.at/materialien/Andreas.Pester/files/Vectors/skalarprodukt_zweier_vektoren.htm"
    },
    {
        "id": 6,
        "inhalt": "Winkel zwischen zwei Vektoren. In der linearen Algebra und der analytischen Geometrie ist häufig nach dem Winkel zwischen zwei Vektoren gefragt. Seien u und v zwei Vektoren in , dann ist der Kosinus des Winkels θ zwischen den beiden Vektoren definiert als: [...] Bei der Berechnung wird immer der kleinere Winkel θ berechnet.",
        "uebereinstimumng": 0,
        "url": "https://matheguru.com/lineare-algebra/winkel-zwischen-zwei-vektoren.html"
    },
    {
        "id": 7,
        "inhalt": `Die Programmierung, also die Erstellung oder auch Implementierung von Computerprogrammen, ist ein Teilbereich der Softwareentwicklung. Beim Programmieren wird der Softwareentwurf in Quelltext umgesetzt. Bei einigen Programmiersprachen fällt auch das Übersetzen des Quelltextes in die Maschinensprache, zu Deutsch Kompilieren, in diesen Aufgabenbereich.

        Man verwendet zum Programmieren bestimmte Sprachen. Mit Hilfe dieser Programmiersprachen werden die im Pflichtenheft formulierten Anforderungen in eine für den Computer verständliche Sprache übersetzt.
        
        Programmierer werden bei ihrer Arbeit inzwischen häufig von sogenannten Code-Generatoren unterstützt. Diese sind in der Lage, den Programmcode zumindest teilweise auf Grundlage von Modellen automatisch zu erzeugen. Das Programmieren besteht weiterhin aus dem Testen des erstellten Codes (Entwicklertest) sowie aus dem Anfertigen einer Softwaredokumentation.`,
        "uebereinstimumng": 0,
        "url": "https://www.dev-insider.de/was-ist-programmierung-a-606763/"
    },
    {
        "id": 8,
        "inhalt": "Wenn mehrere inhalte random sind ",
        "uebereinstimumng": 0,
        "url": ""
    },
    {
        "id": 9,
        "inhalt": "Das sind kleinere Texte um zu schauen wie gut das klappt ",
        "uebereinstimumng": 0,
        "url": ""
    },
    {
        "id": 10,
        "inhalt": "Das bringt vielfallt in die Suchmaschine",
        "uebereinstimumng": 0,
        "url": ""
    },
    {
        "id": 11,
        "inhalt": "Wenn mehrere inhalte random sind ",
        "uebereinstimumng": 0,
        "url": ""
    }
]