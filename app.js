const {validator} = require('./validator')

const operation = (operator,num1,num2) =>{
    const required = [
        validator(operator,propertyType),
        validator(num1,propertyType),
        validator(num2,propertyType),
    ]

    if(required.some(isValid => isValid === false)){
        return 'Inputs are not valid'
    }
    else {
        if(operator === "+") num1 + num2
        else if(operator === "-") num1 - num2 
        else if(operator === "*") num1 * num2
        else if(operator === "/") num1 / num2
        else "invalid operator"
    }
    
    

}

module.exports = {operation}