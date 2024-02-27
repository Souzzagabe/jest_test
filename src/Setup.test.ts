// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';

const sum = (x: number, y: number) => {
    return x + y
}

describe("jest", () => {
    it('should work', () => {
        expect(1).toBe(1);
    });

    describe('App component', () => {
        it('should sum correctly', () => {
            expect(sum(4, 4)).toBe(8)
        });
    });
});
