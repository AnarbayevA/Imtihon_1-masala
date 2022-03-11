 var sampleText = "JavaScript is a must-know programming language for a modern developer"

 function modifyText(text) {
    var disconnector = text.split(" ") // So'zlar alohida ajratib olingan
    var aggregator = [] // So'zlar teskari tartibda qo'shilib boradi
    var aggregator2 = [] // Harflar teskari tartibda qo'shilib boradi
    var result1 // 1 - natija
    var result2 // 2 - natija

    // So'zlar teskari tartibda qo'shilib borishi operatori
    for (var item of disconnector){ 
        aggregator.unshift(item)
    }

    // Harflar teskari tartibda qo'shilib borishi operatori
    for (var list of text){
        for (var inverter of list){
            aggregator2.unshift(inverter)
        }
    }

    return{
        result1: aggregator.join(" "), // aggregatordagi harbir so'zni olib orasiga probel qo'yib qo'shib yozib beradi
        result2: aggregator2.join("") // aggregator2 dagi hamma malumotni olib qo'shib yozib beradi
    }
    
}


console.log(modifyText(sampleText));