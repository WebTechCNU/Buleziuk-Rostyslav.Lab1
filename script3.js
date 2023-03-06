function spacebar() {
    let input = document.querySelector("#input").value;
    let res= '';
    input.replace(/^ +| +$|( ) +/g,"$1")
    res+=input;
document.querySelector("#res").innerHTML = res;
}
