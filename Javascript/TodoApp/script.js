const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const item=prompt('Enter Item:');
  if(item){
    //creating elements
    let li=document.createElement('li');
    
    let checkbox=document.createElement('input');
    let ptag=document.createElement('span');
    let delbt=document.createElement('button');

    checkbox.type='checkbox';
    //creating text for elements
    const ptext=document.createTextNode(item);
    const deltext=document.createTextNode("Delete");
    
    //adding text to elements
    ptag.appendChild(ptext)
    delbt.appendChild(deltext)

    //adding classes to elements
    checkbox.className=classNames.TODO_CHECKBOX;
    checkbox.id=classNames.TODO_CHECKBOX;
    ptag.className=classNames.TODO_TEXT;
    delbt.className=classNames.TODO_DELETE;
    
    //appending elements in li
    li.appendChild(checkbox);
    li.appendChild(ptag);
    li.appendChild(delbt);

    li.className=classNames.TODO_ITEM;
    document.getElementById('todo-list').append(li);

    var deleteButton=li.querySelector("button.todo-delete");
		deleteButton.onclick=deleteItem;

    var checkbt=li.querySelector("input[type=checkbox]");
    checkbt.onchange=checkItem;
  
    //setting item count
    document.getElementById('item-count').innerHTML=parseInt(document.getElementById('item-count').innerHTML)+1;
    document.getElementById('unchecked-count').innerHTML=parseInt(document.getElementById('unchecked-count').innerHTML)+1;
  }
}
var deleteItem=function(){
  let item=this.parentNode;
	let li=item.parentNode;
  li.removeChild(item);
  
  document.getElementById('item-count').innerHTML=parseInt(document.getElementById('item-count').innerHTML)-1;
  
  let uncheckval=(document.querySelectorAll('input[type=checkbox]:checked')).length;
  let count=parseInt(document.getElementById('item-count').innerHTML);
  document.getElementById('unchecked-count').innerHTML=count-uncheckval;
}
var checkItem=function(){
  if(this.checked){
    document.getElementById('unchecked-count').innerHTML=parseInt(document.getElementById('unchecked-count').innerHTML)-1;
  }else{
    document.getElementById('unchecked-count').innerHTML=parseInt(document.getElementById('unchecked-count').innerHTML)+1;
  }
}