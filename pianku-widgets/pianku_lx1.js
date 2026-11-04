(function(){
  function load(url){
    var xhr=new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send(null);
    if(xhr.status<200||xhr.status>=300)throw new Error("load "+url+" "+xhr.status);
    return xhr.responseText;
  }
  var base="https://raw.githubusercontent.com/whylkk/my-grok-skills/main/pianku-widgets/";
  var name="pianku_lx1";
  var n=16;
  var s="";
  for(var i=0;i<n;i++) s+=load(base+name+".c"+i+".js");
  (0,eval)(s);
})();
