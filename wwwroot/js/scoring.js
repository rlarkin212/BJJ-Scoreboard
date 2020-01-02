'use-strict'

const takedownPoints = 2
const passPoints = 1
const backTakePoints = 4

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