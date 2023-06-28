document.getElementById("okPg").addEventListener("click", cfmPg);

function cfmPg(){
    let rsp = document.getElementById("rspPg").value;

    if(rsp.toLowerCase() == "barba negra"){
        console.log("Certa Resposta");
        alert("Muito bem Pequeno Gafanhoto !!!");
        window.location = "home.html"
    } else{
        console.log("Resposta Errada");  
        alert("Resposta Incorreto, vai assister o anime FRANGO !!!");
    }   
}


