const {validator} = require('../validator')
//const validator = require('../validator').validator

test("It returns a boolean for a parameter",()=>{
    expect(typeof validator("+","string")).toBe("boolean")
})

test("It returns a boolean for a parameter",()=>{
    expect(validator(9,"string")).toBe(false)
})

test("It returns a boolean for a parameter",()=>{
    expect(validator(9,"number")).toBe(true)
})