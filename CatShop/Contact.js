function ispis(x)
{
    let hrana = ["Gourment,","Felix Party,","Farmina,","Royal Canin"];
    let kucice = ["Hayabi,","MSnask,","NEGETTE,","PAWZ Road"];
    let igracke = ["Dorakitten,","UPSKY,","Potaroma,","Our Pets"];
    let posude = "Zao nam je, I dalje nemamo dovojno podataka o ovome.";
    let print = "";

    if (x==='hrana'){
        print+="Brendovi za hranu :";
        for (let i =0; i<hrana.length;i++){
            print+=" "+hrana[i];
        }
        print+=".";
        alert(print);
    }
    else if(x==='kucice'){
    print+="Brendovi za kucice :";
    for (let i =0; i<kucice.length;i++){
        print+=" "+kucice[i];
    }
    print+=".";
    alert(print);
}
    else if(x==='igracke'){
        print+="Brendovi za igracke :";
        for (let i =0; i<igracke.length;i++){
            print+=" "+igracke[i];
        }
        print+=".";
        alert(print);
    }

    else if(x==='posude'){
        
        alert(posude);
    }
}

function hvala(){

    var user = document.obrazac.ime.value;
    alert("Zdravo "+user+", hvala ti na recima podrske :> ")
      }

      function promena(x){

       
            const ppp = document.getElementById("ppp");
            if(x === 1) {
            ppp.style.borderStyle ="dotted";
            }
            else if(x===0){
                ppp.style.borderStyle = "none";
            }
            
      }

      function senka(x){

       
       
        if(x === 1) {
        ppp.style.boxShadow ="0px 22px 70px 4px rgba(0, 0, 0, 0.56) ";
        }
        else if(x===0){
            ppp.style.boxShadow = "none";
        }
        
  }

