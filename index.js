// Code your solution here

function findMatching(arr, str) {
    const matchedDriver = arr.filter(driver => {
        if (driver.toLowerCase() === str.toLowerCase()) {
            return driver
        }
    })
    return matchedDriver
}

function fuzzyMatch(arr, str) {
    const matchedDriver = arr.filter(driver => {
        if (driver.toLowerCase().charAt(0) === str.toLowerCase().charAt(0)) {
            return driver
        }
    })
    return matchedDriver
}

function matchName(arrOfObj, str) {
    const matchedDriver = arrOfObj.filter(driver => {
        if (driver.name === str)
        return driver
    })
    return matchedDriver
}
