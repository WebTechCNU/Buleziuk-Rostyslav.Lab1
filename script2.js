function numbers() {
    let input = Number(document.querySelector('#input').value);
    let numwithlett;
    if(isNaN(input)){
        numwithlett = "This is not a number";
    } else if ((input % 100 > 10 && input % 100 < 20) || [0,5,6,7,8,9].includes(input % 10) ){
        numwithlett = "гривень";
    } else if (input % 10 == 1 ){
        numwithlett = "гривня";
    } else {
        numwithlett = "гривні";
    }
    document.querySelector("#res").innerHTML = numwithlett;
}
