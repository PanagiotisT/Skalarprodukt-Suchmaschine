export class Vector {

    private values;

    constructor(values?: number[]) {

        this.values = new Int32Array(values.length)

        for (let i = 0; i < values.length; i++) {
            this.values[i] = values[i];
        }
    }

    // Länge der Vektoren vergleichen
    checkLength(v1: Vector, v2: Vector) {
        if (v1.values.length == v2.values.length) {
            return true
        } else {
            return false;
        }
    }

    // Skalarprodukt berechnen
    skalarprodukt(v1: Vector, v2: Vector) {
        let skalar = 0

        // Wenn beide Vektoren gleichgroß sind den Skalarprodukt berechnen
        if (this.checkLength(v1, v2)) {
            for (let i = 0; i < v1.values.length; i++) {
                skalar += (v1.values[i] * v2.values[i])
            }
            return skalar
        } else {
            console.log('Vektoren überprüfen')
        }
    }

    // Winkel zwischen zwei Vektoren berechnen
    getAngle(v1: Vector, v2: Vector) {
        let angle = 0

        // Teile der Funktion berechnen
        let skalar = this.skalarprodukt(v1, v2)
        // console.log(skalar)
        let betragv1 = v1.laenge()
        // console.log(betragv1)
        let betragv2 = v2.laenge()
        // console.log(betragv2)

        // Wenn beide Vektoren gleichgroß sind den Winkel berechnen
        if (this.checkLength(v1, v2)) {
            // Winkel berechnen; Ausgabe Radiant
            angle = skalar / (betragv1 * betragv2)

            // console.log(angle)
            return Number(angle.toFixed(3)) * 100
        }
    }

    // Länge eines Vektors berechnen
    laenge() {
        let betrag = 0;

        for (let i = 0; i < this.values.length; i++) {
            betrag += this.values[i] * this.values[i]
        }
        return Math.sqrt(betrag);
    }

    // Radiant ergebnis in degree umwandeln
    toDegree(radians: number) {
        return (radians * 180 / Math.PI)
    }
}