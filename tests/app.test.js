const {operation,idk} = require('../app')

test("operation +,num1,num2 returns sum",()=>{
    expect(operation("+",1,2)).toBe(3)
})

test("operation *,num1,num2 returns sum",()=>{
    expect(operation("*",2,2)).toBe(4)
})

test("operation -,num1,num2 returns sum",()=>{
    expect(operation("-",7,2)).toBe(5)
})

test("operation /,num1,num2 returns sum",()=>{
    expect(operation("/",10,5)).toBe(2)
})

test("operation invalid operator,num1,num2 returns sum",()=>{
    expect(operation("$",10,5)).toBe("invalid operator")
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,false],"+",3,2).toBe('Inputs are not valid'))
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,true],"+",3,2).toBe(5))
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,true],"-",3,2).toBe(1))
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,true],"*",3,2).toBe(6))
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,true],"/",8,2).toBe(4))
})

test("returns invalid if array is not all true",()=>{
    expect(idk([true,true,true],"$",3,2).toBe("invalid operator"))
})




