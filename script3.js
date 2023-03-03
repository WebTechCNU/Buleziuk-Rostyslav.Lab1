function spacebar() {
    let res= '';
    input.replace(/^ +| +$|( ) +/g,"$1")
    res+=input;

document.querySelector("#res").innerHTML = res;
}
