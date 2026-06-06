const BASE_URL =
  "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const btn=document.querySelector("form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

const msg = document.querySelector(".msg");


// for (code in countryList) {
//     console.log(code, countryList[code]);
// }

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;

        if(select.name==="from" && currCode === "USD") {
            newOption.selected="selected";
        } else if(select.name==="to" && currCode === "BDT") {
            newOption.selected="selected";
        }

        select.append(newOption);
    }

    // Set the correct flag when the page loads
    // updateFlag(select);

    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

// Update flags for both dropdowns after they're populated
document.querySelectorAll(".dropdown select").forEach(select => {
    updateFlag(select);
});






const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Error fetching exchange rate";
    }
}






btn.addEventListener("click", async (evt)=>{ 
    evt.preventDefault();
    await updateExchangeRate();
})

fromCurr.addEventListener("change", updateExchangeRate);
toCurr.addEventListener("change", updateExchangeRate);
updateExchangeRate();




