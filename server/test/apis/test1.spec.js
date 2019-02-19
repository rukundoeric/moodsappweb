const expect    = require("chai").expect;
const td = require('../../src/controllers/Calculate');
describe('Sum of two numbers', () => {
    it('should return mult', () => {
        expect(td.getMult(2,5)).to.equal(1);;
    })
    it('should return div', () => {
        expect(td.getDiv(100,10)).to.equal(10);;
    })
})
