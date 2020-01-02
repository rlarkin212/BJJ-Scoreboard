'use-strict'

const takedownPoints = 2
const guardPassPoints = 1
const backTakePoints = 4
const advantagePoints = 1
const penaltyPoints = 1

var connection = new signalR.HubConnectionBuilder().withUrl('/scoringHub').build()

connection.start()
    .then(() => {
        return console.log('connected')
    })
    .catch(function (err) {
        return console.error(err.toString())
    })

//update fighrt one points
connection.on('RecieveUpdatedPointsFighterOne', (updatedPoints) => {
    document.getElementById('pointsFighterOne').innerHTML = updatedPoints
})

//update fighter one advantages
connection.on('RecieveUpdatedAdvantagesFighterOne', (updatedAdvantages) => {
    document.getElementById('advantagesFighterOne').innerHTML = updatedAdvantages
})

//update fighter one penalties
connection.on('RecieveUpdatedPenaltiesFighterOne', (updatedPenalties) => {
    document.getElementById('penaltiesFighterOne').innerHTML = updatedPenalties
    penaltiesFighterOne
})

//takedown figter one 
document.getElementById('takedownFighterOne').addEventListener('click', (event) => {
    var currentPoints = parseInt(document.getElementById('pointsFighterOne').innerHTML, 10)
    console.log(currentPoints)

    connection.invoke('UpdatePointsFighterOne', currentPoints, takedownPoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})

//guard pass fighter one
document.getElementById('guardPassFighterOne').addEventListener('click', (event) => {
    var currentPoints = parseInt(document.getElementById('pointsFighterOne').innerHTML, 10)
    console.log(currentPoints)

    connection.invoke('UpdatePointsFighterOne', currentPoints, guardPassPoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})

//back take fighter one
document.getElementById('backTakeFighterOne').addEventListener('click', (event) => {
    var currentPoints = parseInt(document.getElementById('pointsFighterOne').innerHTML, 10)
    console.log(currentPoints)

    connection.invoke('UpdatePointsFighterOne', currentPoints, backTakePoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})

//advantage fighter one 
document.getElementById('advantageFighterOne').addEventListener('click', (event) => {
    var currentAdvantages= parseInt(document.getElementById('advantagesFighterOne').innerHTML, 10)
    console.log(currentAdvantages)

    connection.invoke('UpdateAdvantagesFighterOne', currentAdvantages, advantagePoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})

//penalty fighter one 
document.getElementById('penaltyFighterOne').addEventListener('click', (event) => {
    var currentPenalties = parseInt(document.getElementById('penaltiesFighterOne').innerHTML, 10)
    console.log(currentPenalties)

    connection.invoke('UpdatePenaltiesFighterOne', currentPenalties, penaltyPoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})