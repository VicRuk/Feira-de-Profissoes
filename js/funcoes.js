xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo(){
    for(n = 2; n >= 0; n--){
        document.write(
        "<div class='card mb-3 reveal' id='noticia'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-4 justify-content-center align-items-center d-flex'>"+
                    "<img src='files/images/noticia/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +

                "<div class='col-md-8'>" + 
                    "<div class='card-body'>"+
                        "<h5 class='card-title'><a href='postagem.html?noticia=" + n + "' class='text-black' style='text-decoration:none;'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) +"...</p>" +
                        "<a href='postagem.html?noticia=" + n + "' class='btn btn-primary'>+ Saiba Mais</a>"+
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>");
    }
}

function funcaoNoticias(){
    for(n = x.length-1; n >= 0; n--){
        document.write(
        "<div class='card mb-4' id='noticia'>"+
            "<div class='row no-gutters'>"+
                "<div class='col-md-4 justify-content-center align-items-center d-flex'>"+
                    "<img src='files/images/noticia/" + x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue + "' style='max-height: 300px;' class='card-img'>" + 
                "</div>" +

                "<div class='col-md-8'>" + 
                    "<div class='card-body text-black'>"+
                        "<h5 class='card-title'><a href='postagem.html?noticia=" + n + "' class='text-black' style='text-decoration:none;'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</a></h5>"+
                        "<p class='card-text'>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,250) +"...</p>" +
                        "<a href='postagem.html?noticia=" + n + "' class='btn btn-primary'>+ Saiba Mais</a>"+
                    "</div>" + 
                "</div>" +
            "</div>" +
        "</div>" + 
        "<hr class='my-4'>");
    }
}

function funcaoPostagem(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    n = parametro.get("noticia");
    document.write("<h1 class='fw-semibold mb-4'>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>"+
    "<hr class='my-4'>" + 
    "<div class='col-12'>" +
        "<div class='d-flex justify-content-center align-items-center'>" + 
            "<img src='files/images/noticia/"+ x[n].getElementsByTagName("imagem_2")[0].childNodes[0].nodeValue + "' class='img-fluid mb-5 col-8'>"+
        "</div>" + 
        "<div class='corpo mb-5'>" + 
            "<p>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[n].getElementsByTagName("corpo2")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[n].getElementsByTagName("corpo3")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[n].getElementsByTagName("corpo4")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[n].getElementsByTagName("corpo5")[0].childNodes[0].nodeValue + "</p>" +
            "<p>" + x[n].getElementsByTagName("corpo6")[0].childNodes[0].nodeValue + "</p>" +
        "</div>" +
    "</div>");
}