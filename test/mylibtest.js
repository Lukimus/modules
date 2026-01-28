const assert = require(`chai`).assert
const { plus, minus, mult, divi } = require(`../mylib`)

plus(1, 1)

describe(`mylib`, function(){
    it(`plus should return 2`, function(){
        assert.equal(plus(1, 1), "2")
    })
    it(`minus should return 2`, function(){
        assert.equal(minus(1, 1), "0")
    })
    it(`mult should return 2`, function(){
        assert.equal(mult(1, 1), "1")
    })
    it(`divi should return 1`, function(){
        assert.equal(divi(1, 1), "1")
    })
    it(`is not divi zero`, function(){
        assert.notEqual(divi(1, 0), Infinity)
    })
    plus(1, 1)
})

