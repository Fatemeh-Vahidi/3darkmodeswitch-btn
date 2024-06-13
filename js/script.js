//dark light mode



document.querySelector("#mode-toggle-dark").addEventListener("click", function() {
    document.body.classList.remove("dark");
    var x=document.getElementById("mode-toggle-dark");
     x.style.display = "none";
     var y=document.getElementById("mode-toggle-light");
     y.style.display = "block";
   
});

document.querySelector("#mode-toggle-light").addEventListener("click", function() {
    document.body.classList.add("dark");
    var x=document.getElementById("mode-toggle-light");
    x.style.display = "none";
    var y=document.getElementById("mode-toggle-dark");
    y.style.display = "block";

});