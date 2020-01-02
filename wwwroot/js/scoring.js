'use-strict'

const takedownPoints = 2

var connection = new signalR.HubConnectionBuilder().withUrl('/scoringHub').build()

connection.start()
    .then(() => {
        return console.log('connected')
    })
    .catch(function (err) {
        return console.error(err.toString())
    })

connection.on('ReceiveMessage', (updatedPoints) => {
    document.getElementById('pointsOne').innerHTML = updatedPoints
})

//takedown
document.getElementById('takedownOne').addEventListener('click', (event) => {
    var currentPoints = parseInt(document.getElementById('pointsOne').innerHTML,10)
    console.log(currentPoints)

    connection.invoke('SendMessage', currentPoints, takedownPoints)
        .catch((err) => {
            return console.error(err)
        })
    event.preventDefault()
})