export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://api.openweathermap.org/data/2.5/weather?zip=$100097&appid=$fbea738c9a1bf72c2d1a29fdaa2a304a')
        .then(res => res.json())
        .then(res => {
           document.getElementById('results').innerHTML = res.message;
        })

    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}
