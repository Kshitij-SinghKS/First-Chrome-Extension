let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-El");
const tabBtn = document.getElementById("tab-btn");
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    // ulEl.innerHTML += "<li>" + inputEl.value + "</li>";
    inputEl.value = ""; // Clear the input field after pushing the value
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
});

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true , currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    })
   
})

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("dblclick",function()
{
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})
function render(leads)
{
let listItems = ""
for (let i = 0; i < leads.length; i++) {
   // listItems += "<li>" + myLeads[i] + "</li>";
  listItems+= `<li>
     <a target='_blank' href ='${leads[i]}'>            
          ${leads[i]}
     </a>
     </li>`                       //template string
    //Creating a li element
    //set text content
    //append to ul

    // const li = document.createElement("li");
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems;
}


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

