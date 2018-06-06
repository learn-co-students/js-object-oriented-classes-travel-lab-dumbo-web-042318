let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
  let endDate = new Date(year, 1, 1)
  let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
  return parseInt(totalYears)+1
  }
}



class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  calcHorizontal(end, begin){
    return Math.abs(eastWest.indexOf(end)-eastWest.indexOf(begin))
  }

  blocksTravelled(){

    let horz = this.calcHorizontal(this.endingLocation["horizontal"], this.beginningLocation["horizontal"])
    let vert = this.endingLocation['vertical'] - this.beginningLocation['vertical']
    return horz + vert
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
