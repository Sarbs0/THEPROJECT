fetch('https://quotes.ceedbox.io/')
.then(data => {
    document.getElementById("motivation").innerText(data.text)
    console.log(data.text)
}) 