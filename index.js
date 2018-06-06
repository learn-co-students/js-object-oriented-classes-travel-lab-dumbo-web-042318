class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(endDate) {
        return endDate - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

        const vertDistance = this.endingLocation["vertical"] - this.beginningLocation["vertical"]

        const startIndex = eastWest.indexOf(this.beginningLocation["horizontal"])

        const endIndex = eastWest.indexOf(this.endingLocation["horizontal"])

        const horizontalDistance = endIndex - startIndex

        return vertDistance + horizontalDistance
    }

    estimatedTime(arg) {
       const totalBlocks = this.blocksTravelled()
       if (arg) {
           return totalBlocks / 2
       } else {
           return totalBlocks / 3
       }
    }
}