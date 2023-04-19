const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

function getItems(){
    const value = localStorage.getItem("todo") || "[]";
    //console.log("value");
    return JSON.parse(value);
}

function setItems(items){
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo-test" , itemsJson);
    
}

function addItem(){
    items.unshift({
        desciption: "",
        completed: false,
    });

    setItems(items);
    refreshList();
}

function updateItem(item, key, value){
    item[key] = value;
    setItems(items);
    refreshList();
}

function refreshList(){ //sort items and update html for new data
    ITEMS_CONTAINER.innerHTML = "";
    for (const item of items){
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const desciptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");

        desciptionInput.value = item.desciption;
        completedInput.checked = item.completed;

        desciptionInput.addEventListener("change", ()=>{
            updateItem(item, "description", desciptionInput.value);
        });

        completedInput.addEventListener("change", ()=>{
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

refreshList();