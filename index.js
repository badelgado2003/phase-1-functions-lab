const blocks = 42;
function distanceFromHqInBlocks(custom){
    if (custom > blocks)
        return custom - blocks;
    else (custom < blocks)
        return blocks - custom;
}


function distanceFromHqInFeet(feet){
    if (feet > blocks)
        return ((feet - blocks) * 264);
    else (feet < blocks)
        return ((blocks - feet) * 264);
}

function distanceTravelledInFeet(start, destination){
    if (start > destination)
        return ((start - destination) * 264)
    else (destination > start)
        return ((destination - start) * 264)
}
const f = 264
function calculatesFarePrice(start, destination){
    if ((start - destination) * f < 400)
        return ((start - destination) * 0)
    else if ((start - destination) * f > 400 && (start - destination) * f < 2000)
        return ((start - destination) * f - 400) * 0.02
    else if (destination - start > 2000)
       return 25
    else ((start - destination) * f > 2500)
        return 'cannot travel that far'
}