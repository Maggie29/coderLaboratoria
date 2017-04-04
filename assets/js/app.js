window.addEventListener("load",function(){
var cuarta-chile= document.getElementsByClassName("chile4");
var quinta-lima = document.getElementsByClassName("lima5");
var sexta-lima = document.getElementsByClassName("lim6");
var select = document.getElementById("select");

select.onchange = function() {
      if (select.value=="cuarta-chile"){
           cuarta-chile.style.display = "block";
           quinta-lima.style.display = "none";
           sexta-lima.style.display = "none"

      }else if(select.value== "quinta-lima"){
          quinta-lima.style.display = "block";
          cuarta-chile.style.display = "none";
          sexta-lima.style.display = "none";

        }else if(select.value== "sexta-lima"){
            sexta-lima.style.display = "block";
            cuarta-chile.style.display = "none";
            quinta-lima.style.display = "none";
        }
      }
});
