var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault()
    var formData = readFormData();
    insertNewRecord(formData);
    // if(selectedRow === null){
    //     insertNewRecord(formData);
    // }else{
    //     updateRecord(formData)
    // }
    //resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["country"] = document.getElementById("country").value;
    formData["team"] = document.getElementById("team").value;
    formData["skill"] = document.getElementById("skill").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.country;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.team;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.skill;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('country').value = '';
    document.getElementById('team').value = '';
    document.getElementById('skill').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('country').value = selectedRow.cells[1].innerHTML;
    document.getElementById('team').value = selectedRow.cells[2].innerHTML;
    document.getElementById('skill').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.country;
    selectedRow.cells[2].innerHTML = formData.team;
    selectedRow.cells[3].innerHTML = formData.skill;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}