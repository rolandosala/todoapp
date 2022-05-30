"use strict";
var inputValue = document.getElementById('inputValue');
inputValue.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('btnNew').click();
    }
});
//function for adding new item in the list
let btnAddNew = document.getElementById('btnNew');
btnAddNew.addEventListener('click', function(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('inputValue').value;
    var ul = document.querySelector('ul');
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    if(inputValue === ''){
        alert('Input tasks');
    }
    else{
        ul.appendChild(li);
    }
    document.getElementById('inputValue').value = '';
    //invoke deleteIcon() function
    Icons(li);

    //invoke deleteItem() function
    deleteItem();

    //invoke updateItem() function
    updateItem();
});

//Add icon to list
function Icons(arg){
    //delete Icon
    let spanClose = document.createElement('span');
    let iconClose = document.createElement('i');
    spanClose.className = "delete";
    iconClose.className = 'fas fa-trash';
    spanClose.appendChild(iconClose);
    arg.appendChild(spanClose);
    
    //update icon
    let spanUpdate = document.createElement('span');
    let iconUpdate = document.createElement('i');
    spanUpdate.className = 'update';
    iconUpdate.className = 'fas fa-edit';
    spanUpdate.appendChild(iconUpdate);
    arg.appendChild(spanUpdate);
}

//create a delete function
var close = document.getElementsByClassName('delete');
function deleteItem(){
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var x = this.parentElement;
            x.style.display = 'none';
        }
    }
}

//create a update function
var update = document.getElementsByClassName('update');
function updateItem(){
    for(let i = 0; i < update.length; i++){
        update[i].onclick = function(){
            var x = this.parentElement;
            document.getElementById('inputValue').value = x.innerText;
            x.style.display = 'none';
        }
    }
}

//adding checkmark on a list
var list = document.querySelector('UL');
var check = document.getElementsByClassName('checked');
list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
});