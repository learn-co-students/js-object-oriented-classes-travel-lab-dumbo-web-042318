class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(date) {
    return date - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let verticalBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(arg) {
    if (arg === true) {
      return Math.round(this.blocksTravelled() / 2)
    } else {
      return Math.round(this.blocksTravelled() / 3)
    }
  }


}
