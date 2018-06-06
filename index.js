
class Driver {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    };

    startDate() {
        return new Date(this.date);
    };

    yearsExperienceFromBeginningOf(year) {
        const start = this.startDate().getFullYear();
        let current = year - start;

        return current;
    };
};

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    blocksTravelled() {
        let start = this.beginningLocation;
        let end = this.endingLocation;
        
        let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

        return (end.vertical - start.vertical) + (eastWest.indexOf(end.horizontal) - eastWest.indexOf(start.horizontal));
    };

    estimatedTime(peak) {
        if (peak === true) {
            return Math.ceil(this.blocksTravelled() * 0.5);
        } else {
            return Math.ceil(this.blocksTravelled() * 0.3);
        };    
    };
};
