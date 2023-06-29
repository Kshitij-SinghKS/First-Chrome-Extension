let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-El");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    // ulEl.innerHTML += "<li>" + inputEl.value + "</li>";
    inputEl.value = ""; // Clear the input field after pushing the value
    renderLeads();
});


function renderLeads()
{
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
   // listItems += "<li>" + myLeads[i] + "</li>";
  listItems+= `<li>
     <a target='_blank' href ='${myLeads[i]}'>
          ${myLeads[i]}
     </a>
     </li>`
    //Creating a li element
    //set text content
    //append to ul

    // const li = document.createElement("li");
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems;
}