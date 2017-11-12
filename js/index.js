function makeUL(array) {
    var list = document.createElement('ul');
    for(var i = 1; i < array.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(array[i].get("title")));
        list.appendChild(item);
    }
    return list;
}
document.getElementById('coordinates').appendChild(makeUL(layers.full_list));
