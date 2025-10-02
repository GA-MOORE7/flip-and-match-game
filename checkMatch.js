function checkMatch(pairIds) {

    const [firstId, secondId] = pairIds;

    if (firstId === secondId) {
        console.log("It's a match!", pairIds);

    } else {
        console.log("Not a match.", pairIds);
    }
}

export { checkMatch };