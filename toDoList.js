

var btnCreate = document.getElementById('btnCreate');
var textField = document.getElementById('textField');
var myList =  document.getElementById('myList');

textField.focus();

btnCreate.addEventListener("click",(e)=>{   // when press 'create item'

    e.preventDefault();               //stop refreshing to prevent data lost
    createItem(textField.value);

})

textField.addEventListener("keypress",function(keyPressed){                            //when press enter key

    if(keyPressed.which == 13){

        createItem(textField.value);
        keyPressed.preventDefault();
    }
})  

function createItem(x){                           // when press 'create item'
    
    var myHTML =`<li>${x}<button onclick='deleteItem(this)'>Delete</button></li>`;
    myList.insertAdjacentHTML("beforeend",myHTML);               //add another item after one
    textField.value =" ";
    textField.focus();              //focus cursor on text field

}

function deleteItem(item){

    item.parentElement.remove();    //delete burron parent element is list
    
    
} 

