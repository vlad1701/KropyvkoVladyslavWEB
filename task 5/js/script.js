btn.addEventListener("click",f_out);

   function f_out (){
       M = (Number(РQ.value) - Number(К.value) + Number(ПВ.value) - Number(ВП.value)) / Number(V.value);
       res.innerHTML = M;   
   }