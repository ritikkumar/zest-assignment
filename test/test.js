var expect = require('chai').expect
var compare = require('../scripts/compare-json')
const fs = require('fs')

describe('Compare JSON Response', function () {
    it('If response data is equals, should return equals', async () => {
        const fileText1 = fs.readFileSync("./data/file.txt")
        const fileText2 = fs.readFileSync("./data/file2.txt")
        const res = await compare(fileText1, fileText2)
        expect(res).to.equal(true)
    })
    it('If response data is not equals, should return not equals', async () => {
        const url1 = "https://reqres.in/api/users/3"
        const url2 = "https://reqres.in/api/users/1"
        const res = await compare(url1, url2)
        expect(res).to.equal(false)
    })
    it('If all inputs are not URL, should return Invalid URL', async () => {
        const url1 = "test2"
        const url2 = "test"
        const res = await compare(url1, url2)
        expect(res).to.equal("Invalid")
    })
    it('If one is not URL, should return Invalid URL', async () => {
        const url1 = "test2"
        const url2 = "https://reqres.in/api/users/1"
        const res = await compare(url1, url2)
        expect(res).to.equal("Invalid")
    })
})