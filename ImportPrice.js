let priceText = document.getElementById('importPrice')
let search = "eggs"

function findPrice(refCode){
    console.log("Geting code " + refCode)
    const apiEndpoint2 = "https://www.trade-tariff.service.gov.uk/api/v2/commodities/"+refCode;

    let refId = 0 
    // Fetch data from the API
    fetch(apiEndpoint2)
        .then(response => response.json())
        .then(newData => {
            console.log(JSON.stringify(newData, null, 2))
            console.log("Found")
            const result = newData.included[-1];
            
            if (result) {
                console.log(JSON.stringify(result, null, 2));
                
                refId = result.attributes.basic_third_country_duty
                print(refid)

            } else {
                priceText.textContent =  'No object found with that title.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            priceText.textContent = 'Error fetching data.';
        });
}

function getRefCode(){
    console.log("Geting code")
    const apiEndpoint = "https://www.trade-tariff.service.gov.uk/api/v2/search_references.json?query[letter]="+search; 

    let refId = 0 
   
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(newData => {
            const result = newData.data.find(obj => obj.attributes.title === search);
            
            if (result) {
                console.log(JSON.stringify(result, null, 2));
                
                refId = result.attributes.goods_nomenclature_item_id
                console.log(refId)
                findPrice(refId)

            } else {
                priceText.textContent =  'No object found with that title.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            priceText.textContent = 'Error fetching data.';
        });

}

document.getElementById('loadProducts').addEventListener('click', getRefCode);