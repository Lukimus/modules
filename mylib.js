var val1
var val2
var vast



module.exports = {
    


    plus: function(val1, val2){
        vast = val1 + val2
        cons(vast)
        return vast
    },
    minus: function(val1, val2){
        vast = val1 - val2
        cons(vast)
        return vast
    },
    mult: function(val1, val2){
        vast = val1 * val2
        cons(vast)
        return vast
    },
    divi: function(val1, val2){
        vast = val1 / val2
        if (vast == Infinity) {
            throw new Error("ei voi jakaa 0");
        } 
        cons(vast)
        return vast
        
    },
}

function cons(vasta) {
    console.log(vasta)
}

