// -------------------------------
// TapTea Demo App
// Sankhala Tea Stall
// -------------------------------

// Default values
let revenue = Number(localStorage.getItem("revenue")) || 0;
let orders = Number(localStorage.getItem("orders")) || 0;
let profit = Number(localStorage.getItem("profit")) || 0;

// Custom Products
let customProducts =
JSON.parse(localStorage.getItem("customProducts")) || [];

// Update Dashboard
function updateDashboard(){

document.getElementById("revenue").innerText =
"₹" + revenue;

document.getElementById("orders").innerText =
orders;

document.getElementById("profit").innerText =
"₹" + profit;

localStorage.setItem("revenue", revenue);
localStorage.setItem("orders", orders);
localStorage.setItem("profit", profit);

renderCustomProducts();

}

// Add Sale
function addSale(product, price){

revenue += price;

orders++;

profit += Math.round(price * 0.45);

updateDashboard();

}

// Add Custom Product
function addCustomProduct(){

const name =
document.getElementById("productName").value.trim();

const price =
Number(document.getElementById("productPrice").value);

if(name === "" || price <= 0){

alert("Enter valid product.");

return;

}

customProducts.push({

name:name,

price:price

});

localStorage.setItem(
"customProducts",
JSON.stringify(customProducts)
);

document.getElementById("productName").value="";

document.getElementById("productPrice").value="";

renderCustomProducts();

}

// Render Custom Products
function renderCustomProducts(){

const container =
document.getElementById("customProducts");

container.innerHTML="";

customProducts.forEach((item,index)=>{

container.innerHTML += `

<div class="custom-card">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button onclick="buyCustom(${index})">

+1

</button>

</div>

`;

});

}

// Buy Custom Product
function buyCustom(index){

revenue += customProducts[index].price;

orders++;

profit += Math.round(customProducts[index].price * 0.45);

updateDashboard();

}

// Reset Demo
function resetDemo(){

if(confirm("Reset today's demo data?")){

revenue=0;

orders=0;

profit=0;

customProducts=[];

localStorage.clear();

updateDashboard();

}

}

// Start App
updateDashboard();
