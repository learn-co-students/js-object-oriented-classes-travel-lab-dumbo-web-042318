class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const northSouthBlocks = Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical'])

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal']))

    let result = northSouthBlocks + eastWestBlocks;
    return result;
  }

  estimatedTime(value=false) {
    if (value === true) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
