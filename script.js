document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('#fname');
    textElement.style.color = 'red';
});


const textt=document.getElementsByClassName('textt')


for (let i = 0; i < textt.length; i++) {
    textt[i].style.color = 'blue';
}

