function checkMatch(clickedCells) {
    const [first, second] = clickedCells;

    const firstEl = document.getElementById(first.id);
    const secondEl = document.getElementById(second.id);

    if (!firstEl || !secondEl) return;

    if (first.pairId === second.pairId) {
        // Match — keep revealed
        setTimeout(() => {
            firstEl.classList.add("matched");
            secondEl.classList.add("matched");
        }, 500);
    } else {
        // Not a match — flip back
        setTimeout(() => {
            firstEl.innerHTML = firstEl.dataset.number;
            secondEl.innerHTML = secondEl.dataset.number;

            firstEl.classList.remove("face-up");
            secondEl.classList.remove("face-up");
        }, 500);
    }
}

export { checkMatch };


