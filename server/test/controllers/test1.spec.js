const expect    = require("chai").expect;
const td = require('../../src/controllers/Calculate');
describe('Sum of two numbers', () => {
    it('should return sum', () => {
         expect(td.getSum(4,6)).to.equal(10);
    })
    it('should return sub', () => {
        expect(td.getSub(15,5)).to.equal(10);
    })
})
