function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    const jumbo = (tomatoSlices - (cheeseSlices * 2)) / 2;
    const small = cheeseSlices - jumbo;
    if (jumbo < 0 || small < 0 || jumbo % 1 !== 0 || small % 1 !== 0) {
        return [];
    }
    return [jumbo, small];
};