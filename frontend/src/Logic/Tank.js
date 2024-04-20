class Tank{
    constructor(name,life,energy,range,xcoordinate,ycoordinate){
        this.name = name
        this.life = life
        this.range = range
        this.xcoordinate = xcoordinate
        this.ycoordinate = ycoordinate
    }

    // Method to set xcoordinate or ycoordinate 
    setCoordinate(xcor,ycor){
        this.xcoordinate = xcor
        this.ycoordinate = ycor
    }

}

export default Tank;



