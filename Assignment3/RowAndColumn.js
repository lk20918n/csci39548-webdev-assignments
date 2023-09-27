//Document contains the functions to Add and Remove Rows and Columns.
//Function to check if scrollbar is visible.
function scrollbarVisible(element) {
    return element.scrollHeight > element.clientHeight;
  }

window.onload = function (){
    //Add Row function
    var AddRowButton = document.getElementById("AddRow");

    AddRowButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");
        if(table.rows.length === 0){
            table.insertRow();
            table.rows[0].insertCell();
        }
        else{
            let columns = table.rows[0].cells.length;
            let row = table.rows.length;
            table.insertRow(row);
            for(let i=0;i<columns;i++){
                table.rows[row].insertCell();
            }
            if(scrollbarVisible(document.body)){
                table.deleteRow(-1);
                alert("Whoa there, that's too many rows!");
            }
        }
    })

    //Remove Row Function
    var RemoveRowButton = document.getElementById("RemoveRow");

    RemoveRowButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");

        if(table.rows.length !== 0){
            table.deleteRow(-1);
        }
        else{
            alert("There are no more rows to delete!")
        }
    });

    //Add Column Function
    var AddColumnButton = document.getElementById("AddColumn");

    AddColumnButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");
        
        if(table.rows.length ===0){
            alert("There are no rows!");
        }
        else{
            var cellWidh = table.rows[0].cells[0].offsetWidth;
            console.log(table.rows[0].cells[0].offsetWidth);
            table.rows[0].insertCell(-1);
            if(table.rows[0].cells[0].offsetWidth != cellWidh){
                alert("Whoa there, that's too many columns!")
            }
            else{
                for(let i=0;i<table.rows.length;i++){
                    table.rows[i].insertCell(-1);
                }        
            }

            table.rows[0].deleteCell(-1);        
        }
    });

    //Remove Column Function
    var RemoveColumnButton = document.getElementById("RemoveColumn");

    RemoveColumnButton.addEventListener("click", ()=>{
        var table = document.getElementById("table");
        if(table.rows.length ===0){
            alert("There are no columns!");
        }
        else {
            for(let i=0;i<table.rows.length;i++){
            table.rows[i].deleteCell(-1);
        }        
        }
    });
}
