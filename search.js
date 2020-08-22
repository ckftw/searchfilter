const myInput = document.getElementById('myInput');

myInput.addEventListener('keyup', ()=>{
    var inputValue = myInput.value.toUpperCase(); // get the input value of search and convert to upper
    var myTable = document.getElementById('myTable') // get the table
    var tr = myTable.getElementsByTagName('tr');  // get the tr
    
    for(var i=0; i<tr.length; i++){
        var td = tr[i].getElementsByTagName('td')[0] // [0] means get first column of td
        if(td){
            var text = td.textContent || td.innerHTML; // get the text of td

            if(text.toUpperCase().indexOf(inputValue)> -1){
                tr[i].style.display = ""
            } else{
                tr[i].style.display = "none"
            }
        }
    }
})