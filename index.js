let xmlhttp = new XMLHttpRequest()
xmlhttp.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xmlhttp.responseText)
        let people = response.people

        let output =''
        for(let i = 0; i < people.length;i++) {
            output += '<li>' +people[i].name+'</li>'
        }
        document.getElementById('people').innerHTML = output
    }
}
xmlhttp.open("GET", "data.json", true)
xmlhttp.send()