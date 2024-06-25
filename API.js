fetch('https://quotes.ceedbox.io/', { mode: 'no-cors'})
.then(data => {
    console.log(data);
    document.write(data);
}) 