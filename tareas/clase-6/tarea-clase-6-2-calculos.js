function getAverageMonthlyWage(array){
    let wages = 0
    for (i = 0; i<array.length ; i++) {
        wages = wages + array[i]
    }

    wages = wages / array.length

    return wages
}


function getAnnualWage(array){
    let annualWage = []
    for(i = 0; i<array.length ; i++){
       annualWage.push(array[i]*12)
    }
    return annualWage
}


function getAverageAnnualWage(array){
    let annualWage = getAnnualWage(array)
    let averageAnnualWage = 0
    
    for(i=0 ; i<array.length ; i++){
        averageAnnualWage += annualWage[i]
    }
    averageAnnualWage = averageAnnualWage / array.length
    return averageAnnualWage
}


function getMaxAnnualWage(array){
    let annualWage = getAnnualWage(array)
    let maxWage = 0
    for(i = 0 ; i<array.length ; i++){
        if(maxWage < annualWage[i]){
            maxWage = annualWage[i]
        }
   }
   return maxWage
}


function getMinAnnualWage(array){
    let annualWage = getAnnualWage(array)
    let minWage = Infinity
    for(i = 0 ; i<array.length ; i++){
        if(minWage > annualWage[i]){
            minWage = annualWage[i]
        }
   }
   return minWage
}

