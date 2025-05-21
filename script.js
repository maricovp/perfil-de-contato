function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    //Pegar a tag img
    const img = document.querySelector("#profile img");


//Substituir a imagem
if(html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src","https://i.pinimg.com/736x/35/fa/c6/35fac622449a10b1bf9390e3ef98f2fd.jpg");
} else {
    // Se tiver sem light mode, manter a imagem atual
    img.setAttribute("src","./assets/avatar.jpg");
    }
}