function attachClickHandler(array) {
    document.querySelectorAll("#gridContainer .cell").forEach(el => {
        el.addEventListener("click", event => {
            const id = parseInt(event.target.id, 10);
            const obj = array[id];
            if (obj && obj.value) {
                event.target.textContent = obj.value;
            }
        });
    });
}

export { attachClickHandler };