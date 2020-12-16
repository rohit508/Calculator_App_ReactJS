

function add(a,b){
const sum = a+b
return sum

}

function sub(a,b){
    const sub = a-b
    return sub
}


function div(a,b){
    let div = a/b
    div = div.toFixed(2);
    return  div
}

function multi(a,b){
    const multi = a*b
    return  multi
}
export {add, sub, div ,multi};