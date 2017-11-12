function makeUL(array) {
    var list = document.createElement('div');
    for(var i = 1; i < array.length; i++) {
      if (!array[i].get("excludeFromList")) {
        var li = document.createElement('li');
        var input = document.createElement('input');
        var label = document.createElement('label');
        input.setAttribute("type", "checkbox");
        input.setAttribute("onclick", "changeVis(this.id)");
        if (array[i].get("visible")) input.setAttribute("checked", "");
        input.setAttribute("id", array[i].get("id"));
        li.appendChild(input);
        label.appendChild(document.createTextNode(array[i].get("title")));
        li.appendChild(label);
        list.appendChild(li);
      }
    }
    list.setAttribute("style", "margin-top: 2%");
    return list;
}
function onLoad() {
  document.getElementById('coordinates').appendChild(makeUL(layers.full_list));
}

// function topRightButton() {
//   if (document.getElementById('cont-right').getAttribute("value") === ">>") {
//     document.getElementById('top-right-box').setAttribute("style", "display: none");
//     document.getElementById('cont-right').setAttribute("value") = "<<";
//   } else if (document.getElementById('cont-right').getAttribute("value") === "<<") {
//       document.getElementById('top-right-box').setAttribute("style", "display: block");
//       document.getElementById('cont-right').setAttribute("value") = ">>";
//     }
// }


function changeVis(id) {
  for (var i = 0; i < layers.full_list.length; i++) {
    if (layers.full_list[i].get("id") === id) {
      var current = layers.full_list[i].getVisible();
      console.log(current);
      layers.full_list[i].setVisible(!current);
      console.log(layers.full_list[i].getVisible());
    }
  }
}

// var demoCities = {
//   "London": [-2.639455, 51.2073744],
//   "Leeds": [-1.5437941, 53.7974185],
//   "Bath": [-2.3596963, 51.3813864],
//   "Chester": [-2.8908955, 53.1908873],
//   "Leicester": [-1.1330789, 52.6361398],
//   "Lincoin": [-0.5392172, 53.2336301],
//   "Glasgow": [-4.2435817, 55.856656],
//   "Norwich": [1.29227, 52.628606],
//   "Oxford": [-1.2578499, 51.7520131],
//   "Portsmouth": [-1.075614, 50.8036831],
// }

var demoCities = [
  ["London", [0.1278, 51.5073744]],
  ["Leeds", [-1.5437941, 53.7974185]],
  ["Bath", [-2.3596963, 51.3813864]],
  ["Chester", [-2.8908955, 53.1908873]],
  ["Leicester", [-1.1330789, 52.6361398]],
  ["Lincoin", [-0.5392172, 53.2336301]],
  ["Glasgow", [-4.2435817, 55.856656]],
  ["Norwich", [1.29227, 52.628606]],
  ["Oxford", [-1.2578499, 51.7520131]],
  ["Portsmouth", [-1.075614, 50.8036831]],
]

if (name === "Bradford") {
  document.getElementById('b3_status').innerHTML = "This is a sample city. This is Bradford. Don't be Bradford."
  document.getElementById('bottom-third').setAttribute("style", "background-color: grey;");
  document.getElementById('b3_next_p').innerHTML = "NEXT";
  document.getElementById("b3_next").setAttribute("onclick", "nextCity()");
} else {
  document.getElementById('b3_status').innerHTML = "Which city is this?"
  document.getElementById('b3_answer').setAttribute("style", "display: block")
  document.getElementById('bottom-third').setAttribute("style", "background-color: grey;");
  document.getElementById('b3_next_p').innerHTML = "submit";
  document.getElementById("b3_next").setAttribute("onclick", "checkCity()");
}
function nextCity() {
  // console.log(Object.keys(demoCities));
  var i = Math.floor(Math.random() * Object.keys(demoCities).length);
  const nextCity = demoCities[i];
  name = nextCity[0];
  coord = JSON.parse("[" + nextCity[1] + "]");
  console.log(name);
  console.log(coord);
  window.sessionStorage.setItem("name", name);
  window.sessionStorage.setItem("coord", coord);
  location.reload();
}

function checkCity() {
  alert("Ideally there should be a check-up process and some facts. Time constraint, not included. Sorry.\nIt's " + name + ".");
  nextCity();
}
