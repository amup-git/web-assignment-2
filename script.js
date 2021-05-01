window.onload = function(){
    var addBtn = document.getElementById('add');
    addBtn.onclick = handleAdd;
    $('button.del').click(delFunc);
}

function handleAdd(){
    
    var table = document.getElementById("mytable");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = $("#name").val();
    cell2.innerHTML = $("input[type='radio'][name='gender']:checked").val();
    cell3.innerHTML = $("#age").val();
    cell4.innerHTML = $("#city option:selected").val();
    
    var updBtn = document.createElement('button');
    updBtn.className = ('btn btn-warning');
    updBtn.innerHTML = ('Update');

    var delBtn = document.createElement("BUTTON");
    delBtn.className = ('btn btn-danger del');
    var del = document.createTextNode("Delete");
    delBtn.appendChild(del);
    delBtn.onclick = delFunc;

    cell5.appendChild(updBtn);
    cell5.appendChild(delBtn);
}

function delFunc(){
    console.log('delete');
    document.getElementById("mytable").deleteRow(this.parentNode.parentNode.rowIndex);
    
}

function updFunc(){
    
}