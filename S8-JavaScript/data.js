var data = new Date()
/*
var text = data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear()

document.write(text)


document.write(data.toString())

data.setDate(data.getDate() + 1)

document.write('<hr>' + data.toString())
*/

//15/01/2020
var data1 = new Date(2020, 0, 15)

//23/02/2020
var data2 = new Date(2020, 1, 23)

document.write(data1.toString())
document.write('<hr/>' + data2.toString())

document.write('<br><br><hr>')

document.write(data1.getTime())
document.write('<br>' + data2.getTime())