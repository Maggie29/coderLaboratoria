var chile=document.getElementsByClassName("chile4");
var lima5=document.getElementsByClassName("lima5");
var lima6= document.getElementsByClassName("lim6");
var select = document.getElementById("select");

select.onchange = function(){
  if(selec.value=="cuarta-chile"){
    for(i=0; i<chile.length; i++){
      lima5[i].classList.remove("quinta-lima");
      lima6[i].classList.remove("sexta-lima");
    }
  }
  if(selec.value=="quinta-lima"){
    for(i=0; i<lima5.length; i++){
      chile[i].classList.remove("cuarta-chile");
      lima6[i].classList.remove("sexta-lima");
    }
  }
  if(selec.value=="sexta-lima"){
    for(i=0; i<lima6.length; i++){
      lima5[i].classList.remove("quinta-lima");
      chile[i].classList.remove("cuarta-chile");
    }
  }

}
