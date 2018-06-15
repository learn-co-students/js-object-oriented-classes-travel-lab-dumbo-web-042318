class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 0, 1);
    const diffInMs = Math.abs(endDate - this.startDate);
    const diffInS = diffInMs/1000;
    const diffInMin = diffInS/60;
    const diffInH = diffInMin/60;
    const diffInDays = diffInH/24;
    const diffInYears = diffInDays/365;
    return Math.ceil(diffInYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const distanceNS = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical));
    const distanceWE = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return distanceNS + distanceWE;
  }

  estimatedTime(peak = false) {
    const offPeakBlocksPerMinute = 3;
    const peakBlocksPerMinute = 2;
    if (peak === false) {
      return Math.round(this.blocksTravelled() / offPeakBlocksPerMinute);
    } else {
      return Math.round(this.blocksTravelled() / peakBlocksPerMinute);
    }
  }
}
