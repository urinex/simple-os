function showS(id, el) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.querySelectorAll(".ni").forEach(n => n.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    el.classList.add("active");
    window.scrollTo({top:0, behavior:"smooth"});
    document.getElementById("sidebar").classList.remove("open");
}
window.addEventListener("scroll", function() {
    var bt = document.getElementById("bt");
    bt.style.display = window.scrollY > 300 ? "flex" : "none";
});
