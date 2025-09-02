let inc = document.querySelector("#GETincome")

let tran;

inc.addEventListener("input",function (event){
  localStorage.setItem("income",event.target.value)
   localStorage.setItem("EXPENSE",0)
   localStorage.setItem("BALANCE",localStorage.getItem("income"))
})
 
let DOtran = document.getElementById('transactions')

const DIV = document.querySelector("#EXP-LIST")


DOtran.addEventListener("click",function (event){

  tran = parseInt(prompt("Enter the amount of transaction"))
  
  if(tran)
  {  
  localStorage.setItem("EXPENSE",parseInt(localStorage.getItem("EXPENSE"))+tran);
  localStorage.setItem("BALANCE",parseInt(localStorage.getItem("BALANCE"))-tran);
  }

    let transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [];
    transactions.push(tran);
    localStorage.setItem("TRANSACTIONS", JSON.stringify(transactions));

    // Display on screen
    
    const span = document.createElement("span");
    span.textContent = `₹${tran} `;
    DIV.appendChild(span);
    
})

let totBAL = document.querySelector("#BAL")

totBAL.addEventListener("click",function(event){
  alert(localStorage.getItem("BALANCE"));
})

let totINC = document.querySelector("#INCOME")

totINC.addEventListener("click",function(event){
  alert(localStorage.getItem("income"))
})

let TOTEXP = document.querySelector("#EXPENSE")

TOTEXP.addEventListener("click",function (event){
  alert(localStorage.getItem("EXPENSE"));
})

let DELETE = document.querySelector("#Delete")
DELETE.addEventListener("click",function(){
  let last = DIV.lastElementChild;
  last.remove();
})

