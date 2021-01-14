function getHotel() {
    url = new URL(window.location.href);
    return url.searchParams.get("hotel");
}

function addTable() {
    var myTableDiv = document.getElementById("channels");
  
    var table = document.createElement('TABLE');
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 4; j++) {
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();

  var mydata = JSON.parse(hotels_data);
  var hotel = getHotel();