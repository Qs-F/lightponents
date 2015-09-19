function $Log(arg) {
  var t = new Date();
  var timeArray = [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()];
  console.log("[" + timeArray.join("/") + "] " + arg);
}

function $Expand() {
  var d = document.querySelectorAll(".lp");
  if(typeof d === "undefined") {
    return(null);
  } else {
    for(i = 0; i<d.length; i++) {
      loadFile(d[i].dataset.raw, t, d[i]);
      d[i].classList.remove("lp");
      $Log("fin");
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  $Log("App start");
  init();
}, false);

html = document.querySelector("html");
html.addEventListener("DOMSubtreeModified", function() {
  init();
}, false);

function t(string, d) {
  $Log(string);
  $Log(template(string, ["Hello!", "point of"]));
  $Log(d);
  d.innerHTML = template(string, ["Hello!", "ArticleTitle"]);
}

function init() {
  var d = document.querySelectorAll(".lp");
  if(typeof d === "undefined") {
    return(null);
  } else {
    for(i = 0; i<d.length; i++) {
      loadFile(d[i].dataset.raw, t, d[i]);
      d[i].classList.remove("lp");
      $Log("fin");
    }
  }
}

function template(tmpl, args) {
  var i = -1;
  return(tmpl.replace(/..arg../g, function() {return(args[i++]);}));
}

function loadFile(filename, callback, d) {
  var xhr = new XMLHttpRequest();
  callback("loading...", d);
  xhr.addEventListener('loadend', function(){
    if(xhr.status === 200){
      $Log("callback:" + d);
      callback(xhr.responseText, d);
    }else{
      $Log("callback:" + d);
      callback("", d);
      console.error(xhr.status+' '+xhr.statusText);
    }
  });
  xhr.open('GET', filename+"?"+(new Date()).getTime(), true);
  xhr.send();
}