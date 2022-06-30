/*              Variaveis Globais           */
let title = document.getElementById('titulo');
title.innerHTML = 'Hello my Friends';
title.style.textAlign = 'center';
title.style.backgroundColor = '#ccccc9';
title.style.fontFamily = 'Arial';
title.style.BorderBottom = 'Solid 5px #000';
title.style.margin = '15px';

let Items = document.getElementsByClassName('item');
Items[1].textContent = 'Hello 2'; 
Items[1].style.fontWeight = 'bold';
Items[1].style.backgroundColor = 'yellow';


for (let i = 0; i < Items.length; i++) {
    Items[i].style.backgroundColor = '#11F740';
}

//              getElementByName
let Nome = document.getElementsByName('fitem');
Nome[0].textContent = 'Trocar Nome';
Nome[0].style.backgroundColor = '#41C720';

//              Alterando o Estilo da Lista

let ul = document.getElementById('items');
ul.style.listStyle = 'decimal inside';