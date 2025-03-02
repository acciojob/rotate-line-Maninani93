function createTable() {
    //Write your code here
	var rows = prompt("Input number of rows");
                var columns = prompt("Input number of columns");
                if (rows === null || columns === null) {
                    return;
                    }
                    if (isNaN(rows) || isNaN(columns)) {
                        return;
                        }
                        if (rows <= 0 || columns <= 0) {
                            alert("Please enter positive numbers");
                            return;
                            }
                            var table = document.getElementById("myTable");
                            table.innerHTML = "";
                            for (var i = 0; i < rows; i++) {
                                var row = table.insertRow(i);
                                for (var j = 0; j < columns; j++) {
                                    var cell = row.insertCell(j);
                                    cell.innerHTML = "Row-" + i + " Column-" + j;
                                    }
                                    }
                                    }
