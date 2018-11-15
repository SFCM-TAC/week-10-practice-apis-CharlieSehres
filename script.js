

var req = new XMLHttpRequest();
req.open('GET', 'https://api.punkapi.com/v2/beers?abv_gt=14', true);
req.send();

req.onload = function() {
  var response = req.response;
  var parsedResponse = JSON.parse(response);

  console.log(parsedResponse);
  console.log(parsedResponse.length);


  var beerList = document.getElementById("beers")
  beerList.innerHTML = parsedResponse[0].name + " | " + parsedResponse[0].abv + "%" + " | " + parsedResponse[0].tagline;


  var listEl = document.createElement('div')
  for (var i = 1; i < parsedResponse.length; i++) {
        console.log('here');
        var beerEl = document.createElement('div');
        var beer = document.createTextNode(parsedResponse[i].name + " | " + parsedResponse[i].abv + "%" + " | " + parsedResponse[i].tagline);
        beerEl.appendChild(beer);
        beerEl.className = 'beersKids';
        beerList.appendChild(beerEl);
        // listEl.appendChild(beerEl);
      }
}
