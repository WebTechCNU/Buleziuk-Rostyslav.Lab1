function tstjs() {
    let input = document.querySelector('#input').value;
    let reversed='';

    Array.from(input).forEach(element => {
        reversed = element + reversed;
    });

    document.querySelector("#res").innerHTML = reversed;
}

