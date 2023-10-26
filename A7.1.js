var sim = "sim";
var nao = "não";

function resposta() {

    var respostaUsuario = prompt("Resposta:");

    if (respostaUsuario.toUpperCase() === sim.toUpperCase()) {
        document.write('<p>Sim, moro em São Paulo</p>');
        document.write('<img src="sp.jpg">');
    } else {
        document.write('<p>Não, moro em Araraquara/SP</p>');
        document.write('<img src="aqua.jpg">');
    }
}
