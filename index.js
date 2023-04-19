const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

function getItems(){
    const value = localStorage.getItem("todo") || "[]";
    //console.log("value");
    return JSON.parse(value);
}