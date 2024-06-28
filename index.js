function receivesAFunction (func){
return func()
}

function returnsANamedFunction (){
    return function person(){
        return ""
    }
}

function returnsAnAnonymousFunction (){
    return function (){
        return ""
    }
}