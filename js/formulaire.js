///======================///
/// ==== formulaire ==== ///
///======================///


document.addEventListener("DOMContentLoaded", function() {


    /// == recup des données == ///

    let nom_input = document.getElementById("nom")
    let age_input = document.getElementById("date")
    let btn_valide = document.getElementById("btn_valide")


    /// == utilisation des données == ///

    btn_valide.onclick = function() {

        alert("il vous suffit de cliquer sur votre nom/age pour accéder à mon CV et lettre de motivation")

        let prenom = nom_input.value
        localStorage.setItem("nom", prenom)

        let age = age_input.value
        localStorage.setItem("age", age)

        window.location ='html/sommaire.html';

        //  débogueur  //
        console.log("[ INFO UTILISATEUR ]")
        console.log("Nom :", prenom)
        console.log("Age :", age)
    }
})