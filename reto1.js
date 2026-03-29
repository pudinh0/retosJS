const activities1 = [3, 1, 2, 3, 4, 2, 5]


function preparedActivities(activities){
    const nuevoArreglo = []
    
    if (activities.length === 0) {
        console.log("No hay actividades para preparar")
        return
    }else{


    for (let i = 0; i < activities.length; i++) {
        if (!nuevoArreglo.includes(activities[i])) {
            nuevoArreglo.push(activities[i])
        }
    }
    
    }
    return nuevoArreglo.sort()
}

console.log(preparedActivities(activities1))