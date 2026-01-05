///==========================///
/// ==== affichage info ==== ///
///==========================///


/// == recup des données == ///

let nom_afichage = document.querySelectorAll(".nom_afichage")
let date_afichage = document.querySelectorAll(".date_afichage")


/// == utilisation des données == ///

nom_afichage.forEach(element => {
    element.innerHTML = localStorage.getItem("nom")
})

date_afichage.forEach(element => {
    element.innerHTML = localStorage.getItem("age")
})

//  débogueur  //
console.log("[ UTILISATION INFO ]")
console.log(localStorage.getItem("nom"))
console.log(localStorage.getItem("age"))