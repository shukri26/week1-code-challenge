function checkSpeed(speed){
    const speedlimit = 70
    const points =5
    const pointthreshhold =12
    if (speed <= speedlimit){
        return "okay"

}else {
    const excesspeed = speed - speedlimit
    const points = Math.floor(speed / points)
    if (pointss > pointthreshhold){
 return "LICENCE CANCELED" 

    }else {
        return "points" + points
    }

     }
    }
let speed = parseInt ("100")// INPUT CARSPEED
let grid = checkSpeed(speed)
 console.log(grid)


