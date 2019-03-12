const {validator} = require('./validator')

const idk = (required,operator,num1,num2) =>{
    if(required.some(isValid => isValid === false)){
        return 'Inputs are not valid'
    }
    else {
        if(operator === "+") return num1 + num2
        else if(operator === "-") return num1 - num2 
        else if(operator === "*") return num1 * num2
        else if(operator === "/") return num1 / num2
        else return "invalid operator"
    }
}

const operation = (operator,num1,num2) =>{
    const required = [
        validator(operator,"string"),
        validator(num1,"number"),
        validator(num2,"number"),
    ]

    return idk(required,operator,num1,num2)
}

console.log(idk([true,true,true],'+',2,4))

module.exports = {operation,idk}