function generateGrid(arr) {
    const n = arr.length;
    const container = document.getElementById("gridContainer");
    container.innerHTML = "";

    // Step 1: Find factor pairs for grid
    const factors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            const pair = [i, n / i];
            pair.sort((a, b) => a - b);
            factors.push(pair);
        }
    }

    // Step 2: Choose the most square-ish pair
    const [rows, cols] = factors.reduce((best, pair) => {
        const diff = Math.abs(pair[0] - pair[1]);
        const bestDiff = Math.abs(best[0] - best[1]);
        return diff < bestDiff ? pair : best;
    });

    // Step 3: Set CSS grid
    container.classList.add("grid");
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${cols}, minmax(80px, 1fr))`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gap = "10px";

    // Step 4: Create face-down numbered cells and store the number
    arr.forEach((card, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell", "face-down");
        cell.id = index;
        cell.dataset.pairId = card.pairId;
        cell.dataset.type = card.type;

        // Store the original number in dataset
        cell.dataset.number = (index + 1).toString();

        // Show the card number initially
        cell.textContent = index + 1;

        container.appendChild(cell);
    });

    return { rows, cols };
}

export { generateGrid };

