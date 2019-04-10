// function testpas(){
//     var password= document.getElementById("password").value;//On récupère la valeur de l'input
//         // var longueur = password.lenght; // tu récupères la longueur
//         // // si la longueur n'est pas bonne tu affiches le message
//         // if(longueur < 8 || longueur > 255) {
//         //     document.getElementById("message").innerHTML = "Attention le mot de passe n'est pas assez long, il doit faire 8 caractères minimum.";}
//         var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
//         console.log(regex.test(password))
//         if(!regex.test(password)){
//         alert('Password Invalid');
//         return false;
//         }
//         }
function empty(){
    var email= document.getElementById("adress-email").value;
    var re = /\S+@\S+\.\S+/;
    if(document.getElementById("nom").value=="")
    {
    alert('Empty Case');
    document.getElementById("nom").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("prenom").value==="")
    {
    alert('Empty Case');
    document.getElementById("prenom").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("age").value==="")
    {
    alert('Empty Case');
    document.getElementById("age").style.bordercolor="red";
    return false;  
    }
    if(document.getElementById("adress").value==="")
    
    {
    alert('Empty Case');
    document.getElementById("adress").style.bordercolor="red";
    return false;  
    }
    
    if(!re.test(email))
    {
     alert('Email Invalid')
     return false
    }
    var password= document.getElementById("password").value;//On récupère la valeur de l'input
        // var longueur = password.lenght; // tu récupères la longueur
        // // si la longueur n'est pas bonne tu affiches le message
        // if(longueur < 8 || longueur > 255) {
        //     document.getElementById("message").innerHTML = "Attention le mot de passe n'est pas assez long, il doit faire 8 caractères minimum.";}
        var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        console.log(regex.test(password))
        if(!regex.test(password)){
        alert('Password Invalid');
        return false;
        }
        else 
        alert('bienvenue')
   
}
// function validateEmail() 
// {
//     var email= document.getElementById("adress-email").value;
//     var re = /\S+@\S+\.\S+/;
//     if (!re.test(email)){
//         alert('Email Invalid')
//     }
// }

