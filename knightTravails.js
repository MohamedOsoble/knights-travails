const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

function validMove([x, y]){
    return x >= 0 && y >= 0 && x <= 7 && y <= 7
}

function positionFound(x, y){
    if(x[0]===y[0] && y[1] === x[1]){
        return true
    }
    return false

};

function knightTravails(start, end){

    // Base case, if position already matches, just return where we are
    if(positionFound(start, end)){
        return "Knight already on required position";
    };

    // Initialize the Queue and positions visited as a set
    const queue = [[start]]
    let visited = new Set()

    // While items are in the queue, loop through indefinitely
    while(queue.length > 0){

        // Set initial path taken thus far and continue from last position
        let path = queue.shift()
        currPos = path[path.length - 1]

        // From current position, move in each direction.
        for(const direction of directions){
            let newPos = [currPos[0]+ direction[0], currPos[1] + direction[1]]

            // Check if valid move
            if(validMove(newPos)){

                // Check if position found
                if(positionFound(newPos, end)){
                    path.push(newPos)
                    console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
                    path.forEach(pos => console.log(pos));
                    return path;
                }

                // If not found, check if it's been visited, if not, add it and add the new pathway to the queue
                else{
                    if(!visited.has(newPos)){
                        visited.add(newPos)
                        let newPath = [...path, newPos]
                        queue.push(newPath);
                    }
                };
            };
        };
    };
};
