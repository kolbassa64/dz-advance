
// 2022-01-01

function howOld (i) {
    const dateBirth = new Date(i.replace(/-/g, ", "))
    const dateNow = new Date()
    return (Math.floor((dateNow-dateBirth)/(1000*60*60*24))) > 6574 ? 'Можно пить пиво' : 'Пиво пить нельзя'
}
