
let heroeSorting = (theArray) => {
      
      let preparedArray = theArray.sort((a,b) => a.health - b.health)
      console.log(preparedArray)

}


let data = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]


