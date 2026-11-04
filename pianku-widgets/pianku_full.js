(function(){
  function load(url){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    if (xhr.status >= 200 && xhr.status < 300) return xhr.responseText;
    throw new Error("load failed " + url + " " + xhr.status);
  }
  var base = "https://raw.githubusercontent.com/whylkk/my-grok-skills/main/pianku-widgets/";
  var name = "pianku_full";
  var a = load(base + name + ".p0.js");
  var b = load(base + name + ".p1.js");
  var c = load(base + name + ".p2.js");
  (0, eval)(a + b + c);
})();
