let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']



class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let hor = eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"])

    let ver = this.beginningLocation["vertical"] - this.endingLocation["vertical"]

    return Math.abs(hor) + Math.abs(ver)

  }

  estimatedTime(peakHours) {
    return peakHours === true ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3
  }

}
