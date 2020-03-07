
var menuGeral = "";

menuGeral += '<div id="divMenu">';
menuGeral += 'Jogos Jogaveis';
menuGeral += '<ul>';
menuGeral += '<li> <a href="../index.html">Página Inicial</a> </li>';
menuGeral += '<li> <a href="../JOGO_GATO/jogoGato.html">Jogo do Gato</a> </li>';
menuGeral += '<li> <a href="../JOGO_VELHA/jogoVelha.html">Jogo da Velha</a> </li>';
menuGeral += '<li> <a href="../JOGO_LABIRINTO/index.html">Jogo do Labirinto</a> </li>';
menuGeral += '</ul>';
menuGeral += 'Jogos em construção';
menuGeral += '<ul>';
menuGeral += '<li> <a href="../JOGO_ESPACIAL/index.html">Jogo Espacial</a> </li>';
menuGeral += '</ul>';
menuGeral += 'Aprendizado:';
menuGeral += '<ul>';
menuGeral += '<li> <a href="../colisao/index.html">colissão de elementos</a> </li>';
menuGeral += '</ul>';
menuGeral += '</div>';
menuGeral += '<button id="ocultar">ocultar</button>';
menuGeral += '<button id="exibir">exibir</button>';
menuGeral += '<hr>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';
// menuGeral += '<ul id="menuGeral">    <li><a href="jogoGato.html">Jogo do Gato</a></li>    <li><a href="jogoVelha.html">Jogo da Velha</a></li>    </ul>';


$(document).ready(function () {
    $("#exibir").on('click',function(){
        $("#divMenu").css('display','block');
    });
    $("#ocultar").on('click',function(){
        $("#divMenu").css('display','none');
    });
})

var footer = "";
footer +='<div>';

footer +='</div>'
