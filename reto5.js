const shoes = [
{ type: 'I', size: 38 },
{ type: 'R', size: 38 },
{ type: 'R', size: 42 },
{ type: 'I', size: 41 },
{ type: 'I', size: 42 }
]

function  organizeShoes(shoes) {
    
    const tallasUnicas = [...new Set(shoes.map(shoe => shoe.size))];

    const paresDispones = tallasUnicas.filter(talla => {

        const PiesIzquierdos = shoes.some(b => b.type==="I" && b.size == talla);
        const PiesDerechos = shoes.some(b => b.type==="R" && b.size == talla);

        return PiesIzquierdos && PiesDerechos;

    })
    console.log(paresDispones);
}

organizeShoes(shoes);