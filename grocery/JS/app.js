// ******** select Items ******

const form = document.querySelector(".grocery-form");
const alerts = document.querySelector(".alert")
const grocery = document.getElementById("grocery")
const submitBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container")
const list = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear-btn")

// console.log(form);
// console.log(alerts);
// console.log(grocery);
// console.log(submitBtn);
// console.log(container);
// console.log(list);
// console.log(clearBtn);


//****  edit option *****
let editElement;
let editFlag = false;
// to get specific items in the list
let editID = "";


// ****** Event listeners **********

// submit form
form.addEventListener("submit",addItem);

// clear list items
clearBtn.addEventListener("click",clearItems)

// diplay load items
window.addEventListener("DOMContentLoaded",setupItems);
// ****** Functions **********

function addItem(e){
    //form submit the value to server that we don't want.
    e.preventDefault();

    // now access the value
    const value = grocery.value;

    // add unique id for every items.
    const id = new Date().getTime().toString();
    // console.log(id);

    // when submiting form we have three option.
    // 1.add the item to the list
    if(value && !editFlag){
        // add items
        // create article element
        const element = document.createElement("article");
        const attr = document.createAttribute("data-id");
        // add class
        // add id
        attr.value = id;
        // add this to attribute to element
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        // those going into article element that we create.
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

        // After dynamically create this,now we access to btns and add event for both button deleteItem,editItem;(only add event listener if the thing exist).

        // I only target to them if we access them.

        // delete
        const deleteBtn = element.querySelector(".delete-btn");
        // edit
        const editBtn = element.querySelector(".edit-btn");

        deleteBtn.addEventListener("click",deleteItem)

        editBtn.addEventListener("click",editItem)

        // append child(apend to list)
        list.appendChild(element)

        
        // and display alert
        displayAlert("item add to the list","success");
        // and also show container(coz default its hidden)
        container.classList.add("show-container");
        //also  add to local storageb
        addToLocalStorage(id,value)

        // set back to default
        setBackToDefault()
    }
    // 2.we 're editing
    else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert("value changed","success");
         // edit  local storage
    editLocalStorage(editID, value)
        setBackToDefault();

        ;
    }
    // 3.user hasn't added any kind of value.(empty)
    else{
        displayAlert("please enter value","danger")
    }
}

// function display alert:-------
function displayAlert(text,action){
    // success,danger
    alerts.textContent = text;
    alerts.classList.add(`alert-${action}`)
    // remove alert
    setTimeout(function(){
        alerts.textContent = "";
        alerts.classList.remove(`alert-${action}`)
    },1000)
}
// clear items function
function clearItems(){
    //select all the items that on the list
const items = document.querySelectorAll(".grocery-item");
if(items.length>0){
    items.forEach(function(item){
        list.removeChild(item)
        })
}
container.classList.remove("show-container");
displayAlert("empty list","danger");
setBackToDefault();
localStorage.removeItem("list")
}

// delete function:---
function deleteItem(e){
    // console.log("delete");
    const element = e.currentTarget.parentElement.parentElement;
    // console.log(element);
    const id = element.dataset.id
    // console.log(id);
    // delete item form list
    list.removeChild(element);

    //list.children.length==0
    if(list.children.length ===0){
        container.classList.remove("show-container")
    }
    displayAlert('item removed',"danger");
    setBackToDefault();
     
    // remove from local storage
    removeFromLocalStorage(id)
}

// Edit Function:-----

// Edit item
function editItem(e){

const element = e.currentTarget.parentElement.parentElement;

// Set edit item
editElement = e.currentTarget.parentElement.previousElementSibling;

// Set form value
grocery.value = editElement.innerHTML;
editFlag = true;
editID = element.dataset.id;
submitBtn.textContent = "edit";

// console.log(element);
// console.log(editElement);
}

// Setback to defaults(strill have old value in input so need to default)
function setBackToDefault(){
    // make it empty
    grocery.value = ""
    editFlag = false;
    editID = "";
    submitBtn.textContent  = "submit";
    // console.log("setback to default");
}


// ****** local storage **********

// added to local storage
function addToLocalStorage(id,value){
    const grocery = {id,value};

    let items = getLocalStorage()

    console.log(items);

    // Add items on itemsArr
    items.push(grocery);

    //set item in local storage
    localStorage.setItem("list",JSON.stringify(items));

}
// get value form localStorage, if not then empty Array.
function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")) :[];
}
// remove form local storage
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        // item.id not include this id then return
        // console.log(item.id); 
        // console.log(id);
        if(item.id !== id){
            return item
        }
    });
    localStorage.setItem("list",JSON.stringify(items))

}
function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id == id){
            item.value = value
        }
        return item
    })
    localStorage.setItem("list",JSON.stringify(items))
}
    // localStorage API
    // setItem
    // getItem
    // removeItem
    // save sa strings

// localStorage.setItem("orange",JSON.stringify(["item","item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// // console.log(oranges);
// localStorage.removeItem("orange");



// ****** setup items **********

// set item when DOMContentLoad 
function setupItems(){
    let items = getLocalStorage();
    // call createListItem when itrate foreach item
    if(items.length>0){
        items.forEach(function(item){
            createListItem(item.id,item.value)
        });
        container.classList.add("show-container");
    }
}
// create those items when load happen
function createListItem(id,value){
    // add items
        // create article element
        const element = document.createElement("article");
        const attr = document.createAttribute("data-id");
        // add class
        // add id
        attr.value = id;
        // add this to attribute to element
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        // those going into article element that we create.
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

        // After dynamically create this,now we access to btns and add event for both button deleteItem,editItem;(only add event listener if the thing exist).

        // I only target to them if we access them.

        // delete
        const deleteBtn = element.querySelector(".delete-btn");
        // edit
        const editBtn = element.querySelector(".edit-btn");

        deleteBtn.addEventListener("click",deleteItem)

        editBtn.addEventListener("click",editItem)

        // append child(apend to list)
        list.appendChild(element)

}