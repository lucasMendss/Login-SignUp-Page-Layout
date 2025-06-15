function trocarImagemSenha() {
    const imgStatusSenha = document.getElementById("status_senha");
    const senhaInputType = document.getElementById("caixa_senha");

   if (imgStatusSenha.src.includes("imagens/visible.png")) {
        imgStatusSenha.src = "imagens/hidden.png";
        senhaInputType.type = "text";
   }
   else {
    imgStatusSenha.src = "imagens/visible.png";
    senhaInputType.type = "password";
   }
}

function trocarImagemSenhaConf() {
    const imgStatusSenha = document.getElementById("status_confirmar_senha");
    const senhaInputType = document.getElementById("caixa_confirmar_senha");

   if (imgStatusSenha.src.includes("imagens/visible.png")) {
        imgStatusSenha.src = "imagens/hidden.png";
        senhaInputType.type = "text";
   }
   else {
    imgStatusSenha.src = "imagens/visible.png";
    senhaInputType.type = "password";
   }
}