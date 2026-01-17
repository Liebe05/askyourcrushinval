function yes() {
    let click = document.getElementById("msgyes");
    click.innerText = "See yaaa❤️";
    click.style.color = "red";
    click.style.alignItems = "center";
    click.style.fontSize = "50px";
    click.style.fontFamily = "Fugaz One";
    click.style.position = "absolute"
    click.style.right = "600px"
    click.style.top = "300px"
}
function nob() {
    let nobu = document.getElementById("no")
    let maxWidth = window.innerWidth - nobu.offsetWidth
    let maxHeight = window.innerHeight - nobu.offsetHeight
    let tppx = Math.floor(Math.random() * maxWidth)
    let tppy = Math.floor(Math.random() * maxHeight)
    nobu.style.left = tppx + "px"
    nobu.style.top = tppy + "px"
}
