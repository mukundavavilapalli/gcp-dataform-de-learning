function quoteList(values) {
    return values.map(value => `'${value}'`).join(", ")
}

function standarizeCustomerColumns(alias){
    return `trim(${alias}.customer_name) as name,
    lower(${alias}.email) as email,
    upper(${alias}.status) as status`
}

module.exports = {
    quoteList,
    standarizeCustomerColumns
}
