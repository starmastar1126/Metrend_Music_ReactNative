window.onload = function(){
    if(!window.localStorage.getItem('USER')){
      window.location="login.html";
    }
}
