class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);

  }

  yearsExperienceFromBeginningOf(year) {
    return (year - 1995);
  }
}


let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {

    let vertical =  this.endingLocation.vertical - this.beginningLocation.vertical;


    let startDirection = eastWest.findIndex(direction =>
      this.beginningLocation.horizontal === direction);

    let endDirection = eastWest.findIndex(direction =>
      this.endingLocation.horizontal === direction);

    let horizontal = (endDirection + 1) - (startDirection + 1);

    return vertical + horizontal;
  }

  estimatedTime(peak = false) {
    let blocks = this.blocksTravelled()
    let result;

    if (peak === false) {
      result = (blocks / 3)
    } else {
      result = (blocks / 2)
    }

    return result;
  }




}
