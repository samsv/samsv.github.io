function getHotel() {
    url = new URL(window.location.href);
    return url.searchParams.get("hotel");
}

function createTable(hotelData) {
    var myTableDiv = document.getElementById("channels");
  
    var table = document.createElement('TABLE');
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    var thLogo = document.createElement('TH');
    thLogo.appendChild(document.createTextNode("Canal"));
    tr.appendChild(thLogo);
    var thCanal = document.createElement('TH');
    thCanal.appendChild(document.createTextNode("Nome"));
    tr.appendChild(thCanal);

    hotelData.forEach(element => {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        var tdCanal = document.createElement('TD');
        var img = document.createElement("IMG");
        img.setAttribute("src", `imgs/${element}.png`);
        img.setAttribute("alt", `${element}`);
        img.setAttribute("width", "50");
        img.setAttribute("height", "50"); 
        tdCanal.appendChild(img);
        tr.appendChild(tdCanal);

        var tdNome = document.createElement('TD');
        tdNome.appendChild(document.createTextNode(element));
        tr.appendChild(tdNome);
        
        myTableDiv.appendChild(table);
    });
}

  var hotels = JSON.parse(hotels_data);
  var hotelName = getHotel();
  createTable(hotels[hotelName]);