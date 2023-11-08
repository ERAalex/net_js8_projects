
export default heroeSorting = (theArray) => {
      
      let preparedArray = theArray.sort((a,b) => a.health - b.health)
      console.log(preparedArray)

}
