const ITEM_CONTAINER = document.getElementById("items");
const ITEMS_CONTAINER = document.getElementById("items");
 const ITEM_TEMPLATE = document.getElementById("itemTemplate");
 const ADD_BUTTON = document.getElementById("add")

let items = getItem();
let items = getItems();

 function getItems() {
     const value = localStorage.getItem("todo") ||"[]";
@@ -10,7 +10,7 @@ function getItems() {
    return JSON.parse(value);
 }

-function setItem(items) {
+function setItems(items) {
     const itemsJson = JSON.stringify(items);

     localStorage.setItem("todo", itemsJson);
@@ -34,9 +34,9 @@ function updateItem(item, key, value) {
 }

 function refreshList() {
   items.srot((a, b) => {
  items.sort((a, b) => {
         if (a.completed){
           return1;
           return 1;
         }