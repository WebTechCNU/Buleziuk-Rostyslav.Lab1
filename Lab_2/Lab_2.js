let fruits = [
    {
        name: "banana",
        url: "https://varus.ua/img/product/300/300/127622",
        id: 1
    },
    {
        name: "lemon",
        url: "https://varus.ua/img/product/300/300/127801",
        id: 2
    },
    {
        name: "orange",
        url: "https://src.zakaz.atbmarket.com/cache/photos/19437/catalog_list_19437.jpg",
        id: 3
    },
    {
        name: "mango",
        url: "https://s.032.ua/section/promonewsintext/upload/images/promo/intext/000/054/066/jvmango-table_617fb8d969171.jpg",
        id: 4
    },
];

function getFruits(){
    let divInfo = document.querySelector("#products");
    let inner = "";
    for(let i = 0; i < fruits.length ; i++){
        let img = "<img title='Friuts' src='" + fruits[i].url + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}