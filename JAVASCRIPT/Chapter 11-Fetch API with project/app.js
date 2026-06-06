const url="https://jsonplaceholder.typicode.com/users";
const dataPara = document.querySelector("#data");
const btn = document.querySelector("#btn");


// let promise = fetch(url); // a promise returns in the fetch
// console.log(promise);

// using async await to get the data from the API, it is more readable and easier to understand than promise chaining
// const getData = async () => {
//     console.log("getting data...");
//     let response = await fetch(url); // not in readable format, it is in JSON format, we have to convert it to readable format  
//     console.log(response); // JSON format
//     console.log(response.status); // response is an object

//     let data = await response.json(); // convert the response to JSON format to make it readable
//     console.log(data);
//     console.log(data[8].name);
//     dataPara.innerText = data[8].name;
// }

// implementing the above function using promise chaining
const getData = () => {
    console.log("getting data...");
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            dataPara.innerText = data[8].name;
        });
}

btn.addEventListener("click", getData);