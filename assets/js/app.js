window.addEventListener("load",function(){
var cuartaChile= document.getElementsByClassName("chile4");
var quintaLima = document.getElementsByClassName("lima5");
var sextaLima = document.getElementsByClassName("lim6");
var select = document.getElementById("select");

select.onchange = function() {
      if (select.value=="cuarta-chile"){
           quintaLima.style.display = "none";
           sextaLima.style.display = "none";
           cuartaChile.style.display = "inline-block";

      }else if(select.value== "quinta-lima"){
          cuartaChile.style.display = "none";
          sextaLima.style.display = "none";
          quintaLima.style.display= "inline-block"

        }else if(select.value== "sexta-lima"){
            cuartaChile.style.display = "none";
            quintaLima.style.display = "none";
            sextaLima.style.display = "inline-block";
        }
      }
});
