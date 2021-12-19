function acesso(form){

    var usuario = document.querySelector('#user').value;
    var senha = document.querySelector('#password').value;

    usuario = usuario.toLowerCase()
    senha = senha.toLowerCase()

    if(usuario == "tiago" && senha == "123456" || usuario == "silas" && senha == "654321"){
        location = "logado.html"
    }else{
        usuario=""
        senha=""
    alert("Dados invalidos!!")
    }
}