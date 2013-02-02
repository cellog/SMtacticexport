(function(){
 var container = document.getElementById('tactica');
 var div = document.createElement('div');
 var pos1 = document.createElement('input');
 pos1.id = 'pos1';
 pos1.value = '2';
 pos1.style.width = "20px";
 var pos2 = document.createElement('input');
 pos2.id = 'pos2';
 pos2.value = '3';
 pos2.style.width = "20px";
 var a = document.createElement('a');
 a.className = 'botonrojocorto';
 a.appendChild(document.createTextNode('Swap Players'));
 a.addEventListener("click", function() {
  var first = Number(pos1.value);
  var second = Number(pos2.value);
  var temp;
  if (first > second) {
   temp = first;
   first = second;
   second = temp;
  }
  if (first < 2 || second < 2 || first > 11 || second > 11) return;
  first = (first-2)*35+1;
  second = (second-2)*35+1;
  var formation = container.innerHTML.split(',');
  var firstplayer = formation.slice(first, first + 35);
  var secondplayer = formation.slice(second, second + 35);

  var beginning = formation.slice(0, first).join(',') + ',';
  var secondchunk = secondplayer.join(',') + ',';
  var splice = formation.slice(first + 35, second).join(',');
  if (splice.length) splice += ',';
  var firstchunk = firstplayer.join(',') + ',';
  var end = formation.slice(second + 35).join(',');
  var newformation =  beginning + secondchunk + splice + firstchunk + end;
  container.innerHTML = newformation;
 });
 div.appendChild(a);
 div.appendChild(pos2);
 div.appendChild(pos1);
 container.insertAdjacentElement("afterEnd", pos1);
 pos1.insertAdjacentElement("afterEnd", pos2);
 pos2.insertAdjacentElement("afterEnd", a);
})();