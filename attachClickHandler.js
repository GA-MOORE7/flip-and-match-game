function attachClickHandler(array, onTwoClicks) {
   
    const clickedPairIds = [];

    document.querySelectorAll("#gridContainer .cell").forEach(el => {
        el.addEventListener("click", event => {
            const id = parseInt(event.target.id, 10);
            const obj = array[id];
            
            if (obj && obj.value) {    
                
                event.target.textContent = obj.value;
                
                clickedPairIds.push({id, pairId: obj.pairId});
            
                if (clickedPairIds.length === 2) {
                    onTwoClicks([...clickedPairIds ]);
                    clickedPairIds.length = 0;
                
                }
            }
        });
    });
}

export { attachClickHandler };