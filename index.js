// Code your solution here
function findMatching(drivers, name){
     const newArray = drivers.filter(string => string.toLowerCase() === name.toLowerCase())
        return newArray
}

function fuzzyMatch(drivers, name){
    const fuzzyArray = drivers.filter(string => string.charAt(0) === name.charAt(0)
    )
    return fuzzyArray
}

function matchName(drivers, name){
    const  matchArray = drivers.filter(string => string.name === name)
    return matchArray
}