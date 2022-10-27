xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n = x.length-1; n >= 0; n--){
        document.write(
        "<div class='card mb-3 reveal' id='noticia'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-4 justify-content-center align-items-center d-flex'>"+
                    "<img src='files/images/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +

                "<div class='col-md-8'>" + 
                    "<div class='card-body'>"+
                        "<h5 class='card-title'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) +"...</p>" +
                        "<button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>+ Saiba Mais</button>" +
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>");
    }
}
