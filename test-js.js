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
  var doc = d;
  $Log(template(string, ["Hello!", "point of"]));
  $Log("IJIIIIII " + d.dataset["raw"]);
  replacedTmpl = template(string, {"title":"Hello!", "article":"ArticleTitle", "$1":"und"});
  d.innerHTML = replacedTmpl;
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

function c(e, args) {return(args[e]);}

function template(tmpl, args) {
  return(tmpl.replace(/\.\.([\S]*)\.\./g, function() {return(args[RegExp.$1]);}));
}

function loadFile(filename, callback, d) {
  var xhr = new XMLHttpRequest();
  callback("", d);
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