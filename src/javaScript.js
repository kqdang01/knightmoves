import "./styles.css";

class Node {
    constructor(x, y, distanceFromOrigin) {
        this.x = x;
        this.y = y;
        this.distanceFromOrigin = distanceFromOrigin;
    }

    getStringPosition() {
        return `${this.x}, ${this.y}`;
    }
}

let knightDirections = [
    [1,2], [2,1], [-1,2], [-2,1], [-1,-2], [-2,-1], [1,-2], [2,-1]
];

function getNeighbors(row, col) {
    const neighbors = [];

    for (const direction of knightDirections) {
        const [rowChange, colChange] = direction;

        const neighborRow = row + rowChange;
        const neighborCol = col + colChange;
        neighbors.push([neighborRow, neighborCol]);
    }
    
    return neighbors;
}

function moveKnight(targetRow, targetCol) {
    //shift operation on an array is O(n), so use an actual queue for O(1) time
    const queue = [];
    let node = new Node(0,0,0);
    queue.push(node);

    const visited = new Set();

    while (queue.length > 0) {
        const node = queue.shift();
        const {x, y, distanceFromOrigin} = node;
        
        if (x === targetRow && y === targetCol) {
            console.log(distanceFromOrigin);
            console.log(visited);
            return distanceFromOrigin;
        }
        visited.add(node.getStringPosition());
        console.log(visited);

        for (const neighbor of getNeighbors(x, y)) {
            const [neighborRow, neighborCol] = neighbor;
            const neighborNode = new Node(neighborRow, neighborCol, distanceFromOrigin + 1);
            if (visited.has(neighborNode.getStringPosition())) continue;

            queue.push(neighborNode);
        }
        console.log(queue);
        
    }
}
moveKnight(2, 2);