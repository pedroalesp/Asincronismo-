//Create an XMLHttpRequest Object
let xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function ()
//the onreadystatechange property specifies a function that will be executed every time the status of the XMLHttpRequest object changes
{
    if (this.readyState === 4 && this.status === 200) {
        //Some code if the response is ready
    }
}
//when readyState property is equal to 4 in value and type and status property is equal to 200, the response is ready
xhttp.open('GET', 'filename', true)
xhttp.send()