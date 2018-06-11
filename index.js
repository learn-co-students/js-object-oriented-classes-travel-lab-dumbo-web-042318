class Driver {

  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000);
    console.log(totalYears);
    return parseInt(totalYears);
  }

}

class Route {

  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const horizontalDistanceTravelled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    const verticalDistanceTravelled = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));

    return horizontalDistanceTravelled + verticalDistanceTravelled;
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
