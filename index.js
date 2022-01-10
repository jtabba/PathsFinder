const numPaths = (warehouse) => {    
    let paths = 0

    if (warehouse[0][0] === 0) {
        return `\n There are [ ${0} ] possible paths in the warehouse. \n`
    }

    const pathsFinder = (positionX, positionY) => {
        const widthX = warehouse[0].length
        const heightY = warehouse.length

        if (positionX + 1 < widthX) {
            if (warehouse[positionY][positionX + 1] !== 0) {
                pathsFinder(positionX + 1, positionY)
            }
        }
        
        if (positionY + 1 < heightY) {
            if (warehouse[positionY + 1][positionX] !== 0) {
                pathsFinder(positionX, positionY + 1)
            }
        }

        if (positionX === widthX - 1  && positionY === heightY - 1) {
            paths = paths + 1
        }
    }

    pathsFinder(0, 0)
    
    return `\n There are [ ${paths % (10**9 + 7)} ] possible paths in the warehouse. \n`
}

console.log(numPaths([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1]
]))
