(function(){
var exporttactic = {
 alert: function(text)
 {
  var alerty = document.getElementById('textoalerta');
  var parentthingy = document.getElementById('mensajealerta');
  alerty.innerHTML = text;
  parentthingy.style.display = "inherit";
 },
 exportTactic: function ()
 {
  var thing = {
   effort: document.getElementById('slider1').attributes['x'].nodeValue,
   defense: document.getElementById('slider2').attributes['x'].nodeValue,
   attack: document.getElementById('slider3').attributes['x'].nodeValue,
   play: document.getElementById('slider4').attributes['x'].nodeValue,
   red: document.getElementsByClassName('barra_del')[0].attributes['y'].nodeValue,
   yellow: document.getElementsByClassName('barra_med')[0].attributes['y'].nodeValue,
   green: document.getElementsByClassName('barra_def')[0].attributes['y'].nodeValue
  };
  exporttactic.alert('<textarea rows="5" cols="20" id="tactica" style="background-color:black;color:white;font-size:small;font-weight:bold;">'
                     + JSON.stringify(thing) + '</textarea>');
 },
 importTactic: function()
 {
  var tactic = prompt("Paste tactic export here");
  try {
   var thing = JSON.parse(tactic);
   document.forms.frm.slider1.value = thing.effort;
   document.forms.frm.slider2.value = thing.defense;
   document.forms.frm.slider3.value = thing.attack;
   document.forms.frm.slider4.value = thing.play;
   document.forms.frm.del.value = thing.red;
   document.forms.frm.med.value = thing.yellow;
   document.forms.frm.def.value = thing.green;
   document.forms.frm.submit();
  } catch (e) {
   exporttactic.alert("import failed");
  }
 }
}

var p = document.getElementsByClassName('botonp')[0];
var a = document.createElement('a');
a.className = "botonp";
a.appendChild(document.createTextNode("Export"));
a.href="#";
a.addEventListener("click", exporttactic.exportTactic);
p.insertAdjacentElement("beforeBegin", a);

p=a;
a = document.createElement('a');
a.className = "botonp";
a.appendChild(document.createTextNode("Import"));
a.href="#";
a.addEventListener("click", exporttactic.importTactic);
p.insertAdjacentElement("beforeBegin", a);
})();