
function uploadProducts(data){
   // Define the JSON data
    const jsonData = data;
    
    console.log("Sending data")
    // Define the webhook URL
    const webhookUrl = 'https://hook.eu2.make.com/tbxk5cpxsrvatmetbyhws30gvimxsy4e';

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Send the JSON data
    xhr.send(JSON.stringify(jsonData)); 

    // Handle the response (optional)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log("Sent data")
            } else {
                alert('Error sending JSON: ' + xhr.statusText);
            }
        }
    }; 
}

document.getElementById('loadProducts').addEventListener('click', function() {
    $.ajax({
        url: "https://dummyjson.com/products",
        dataType: 'json',
        success: function(data) {
            console.log(data);
            console.log(typeof(data));
            uploadProducts(data);
        }
    });
});

