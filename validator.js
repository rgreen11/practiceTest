const validator = (value,type) =>{
    return typeof value === type
}

module.exports = {validator}