export class Vector {

    private values;

    get x(){
        return this.values[0]
    }

    get y(){
        return this.values[1]
    }

    set xy(values: [number, number]) {
        this.values[0] = values[0]
        this.values[1] = values[1]
    }

    constructor(values?: number[]) {

        this.values = new Int32Array(values.length)
        
        for(let i = 0; i < values.length; i++){
            this.values[i] = values[i];
        }
    }

    checkLength(v1: Vector, v2: Vector) {
        if(v1.values.length == v2.values.length){
            console.log('Vektoren sind gleichlang!')
            return true;
        }else if(v1.values.length > v2.values.length){
            console.log('Vektor 2 hat eine andere Dimension als Vektor 1')
        }else {
            console.log('Vektor 1 hat eine andere Dimension als Vektor 2')
            return false;
        }
    }

    skalarprodukt(v1: Vector, v2: Vector){
        let skalar = 0;

        // Wenn beide Vektoren gleichgroß sind den Skalarprodukt berechnen
        if(this.checkLength(v1,v2)){
            for(let i = 0; i < v1.values.length; i++){
                skalar += (v1.values[i] * v2.values[i])
            }

            return skalar;
        }else {
            console.log('Vektoren überprüfen')
        }
    }

    angle(v1: Vector, v2: Vector) {

        // Wenn beide Vektoren gleichgroß sind den Winkel berechnen
        if(this.checkLength(v1,v2)){
            Math.acos(this.skalarprodukt(v1,v2))
        }
    }

    laenge(){
        let betrag = 0;

        for(let i = 0; i < this.values.length; i++){
             betrag += this.values[i] * this.values[i]
        }

        return betrag;
    }

}