
    let n1 = Math.floor(Math.random()*20+1);
    let n2 = Math.floor(Math.random()*20+1);

    document.getElementById("num1").value = n1;
    document.getElementById("num2").value = n2;

    let adds= n1 + n2;

    function Game(){
       var user= document.getElementById("result").value;

       if(user == ""){
           alert("Digitar o valor");
           return (false);
       }

       if( user == adds){
          document.getElementById("ans").innerHTML = "Muito bem! Sua resposta está correta";
          document.getElementById('myImage').src = "img/joia.gif";
       }else{
           document.getElementById("ans").innerHTML = "Resposta errada. Tentar novamente!";
           document.getElementById('myImage').src = "img/errado.gif";
       }

         var user= document.getElementById("result").value = "";


    n1 = Math.floor(Math.random()*20+1);
    n2 = Math.floor(Math.random()*20+1);

    document.getElementById("num1").value = n1;
    document.getElementById("num2").value = n2;

    adds= n1 + n2;


    }
