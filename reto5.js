const shoes = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 42 }
]

function  organizeShoes(shoes) {
    
    // Obtener las tallas únicas de los zapatos
    // se filtra y recolecta mediante el metodo map 
    // cada una de las tallas de los zapatos y
    //  se utiliza el operador ... para crear un nuevo arreglo 
    // con las tallas unicas utilizando el constructor Set que elimina
    //  los elementos duplicados, finalmente se convierte nuevamente a
    //  un arreglo con el operador ...

    const tallasUnicas = [...new Set(shoes.map(shoe => shoe.size))];

    //se filtra el arreglo de tallas unicas para saber si existen
    // tanto un pie izquierdo como un pie derecho para cada talla
    const paresDispones = tallasUnicas.filter(talla => {

        //se utiliza el metodo some, este metodo se encarga 
        // de verificar si al menos un elemento del arreglo 
        // cumple con la condicion especificada
        const PiesIzquierdos = shoes.some(b => b.type==="I" && b.size == talla);
        const PiesDerechos = shoes.some(b => b.type==="R" && b.size == talla);

        return PiesIzquierdos && PiesDerechos;

    })
    console.log(paresDispones);
}

organizeShoes(shoes);