let toDoList = [
    "Buy Fruits",
    "Fix the Car",
    "workout at Gym"
]
myList();

function myList(){
    var str = '<ol>'
    for (let i = 0; i < toDoList.length; i++) {
        str += `
        <li>
            <div class=' row justify-content-around mt-2'>
                <div class="col-4">
                ${toDoList[i]}
                </div>
                <div class="col-4" id="${ i + 1 }">
                    <input type='button' name='removeToDo' id = 'removeToDo' class='btn btn-sm btn-danger remove-button' value = 'Remove' onclick='removeToDoItem(${i})'/>
                </div>
            </div>
        </li>`;
    }
    str += '</ol>';
    document.getElementById("slideContainer").innerHTML = str;
}

function addToDoItem(){
    let toDoName = document.getElementById('toDoName').value;
    if (toDoName == "") {
        alert('To Do cant be empty');
    } 
    else {
        toDoList.push(toDoName);
        myList();
    }
    clearInput();
}

function clearInput(){
    let toDoName = document.getElementById('toDoName');
    toDoName.value = '';
}

function removeToDoItem(i){
    toDoList.splice(i, 1);
    myList();
}