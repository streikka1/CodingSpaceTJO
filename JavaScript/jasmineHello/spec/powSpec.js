describe('A calculator to calculate x to the power y', () => {

    it('gives 8 for 2 to power 3', () => {
        expect(myPow(2, 3)).toEqual(8);
    });

    it('gives 75 for 5 to power 3', () => {
        expect(myPow(5, 3)).toEqual(125);
    });

    it('gives -75 for -5 to power 3', () => {
        expect(myPow(-5, 3)).toEqual(-125);
    });
    it('gives 2 for 2 to power 0', () => {
        expect(myPow(2, 0)).toEqual(2);
    });
    it('gives 0.125 for 2 to power -3', () => {
        expect(myPow(5, -3)).toEqual(0.008);
    });
});