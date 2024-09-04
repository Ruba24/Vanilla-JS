var close = document.getElementById("cross");
var i;
for(i = 0; i < close.length; i++){
    close[i].onClick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
console.log("Js is working")