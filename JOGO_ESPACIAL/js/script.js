(function () {

	// Mapeamento do teclado
	var LEFT = 37, UP = 38, RIGTH = 39, DOWN = 40, ATIRA = 32;
	// Lendo movimentação
	var atirar = mvLeft = mvRigth = mvUp = mvDown = false;

	// canvas
	var cnv = document.querySelector("canvas");
	var ctx = cnv.getContext("2d");

	// sprites
	var sprites = [];

	// personagem
	var char = new Sprite(cnv.width / 2 - 25, cnv.height - 100, 50, 50, '#00f');
	char.speed = 5;
	char.pontosJogador = 0;
	char.vida = 5;
	sprites.push(char);


	window.addEventListener("keydown", keyDownHandler, false);
	window.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {

		switch (e.keyCode) {
			case UP:
				mvUp = true;
				break;
			case DOWN:
				mvDown = true;
				break;
			case LEFT:
				mvLeft = true;
				break;
			case RIGTH:
				mvRigth = true;
				break;
			case ATIRA:
				atirar = true;
				break;

		}
	}
	function keyUpHandler(e) {
		switch (e.keyCode) {
			case UP:
				mvUp = false;
				break;
			case DOWN:
				mvDown = false;
				break;
			case LEFT:
				mvLeft = false;
			case RIGTH:
				mvRigth = false;
				break;
			case ATIRA:
				atirar = false;
				break;
		}
	}

	function atualizaPosicaoPersonagem() {
		if (mvLeft) {
			if (char.posX - char.speed > 0) {
				char.posX -= char.speed;
			} else {
				char.posX = 0;
			}
		}
		if (mvRigth) {
			if (char.posX + char.largura + char.speed < cnv.width) {
				char.posX += char.speed;
			} else {
				char.posX = cnv.width - char.largura;
			}
		}
		if (mvUp) {
			if (char.posY - char.speed > 0) {
				char.posY -= char.speed;
			} else {
				char.posY = 0;
			}
		}
		if (mvDown) {
			if (char.posY + char.altura + char.speed < cnv.height) {
				char.posY += char.speed;
			} else {
				char.posY = cnv.height - char.altura;
			}
		}
	}
	function atirarando() {
		if (atirar) {
			var tiro = new Sprite(char.posX + char.largura / 2, char.posY, 5, 5, "#f00");
			tiro.tiro = true;
			sprites.push(tiro);

		}
	}
	function myRandom(min, max, multiple) {
		return Math.round(Math.random() * (max - min) / multiple) * multiple + min;
	}
	function adicionandoInimigos() {
		// inimigo
		var inimigo = new Sprite(myRandom(50, 550, 1), -50, 50, 50, '#2e3');
		inimigo.inimigo = true;
		sprites.push(inimigo);
	}
	// adiciona inimigos a cada 2 a 5 segundos
	setInterval(adicionandoInimigos, myRandom(100, 500, 1));

	function update() {
		atirarando();
		atualizaPosicaoPersonagem();

	}

	function fimDeJogo(){
		alert("vc perdeu, agora tem que reiniciar todas as veriaveis");
		char.vida = 5;
		char.pontosJogador = 0;
	}
	function desenha() {
		ctx.clearRect(0, 0, cnv.width, cnv.height);
		// blocoMudaCor.desenha();
		// personagem.desenha();
		// colisao();
		for (var i in sprites) {
			var spr = sprites[i];
			if (spr.tiro) {
				spr.posY -= 2;
				ctx.fillStyle = spr.cor;
				ctx.fillRect(spr.posX, spr.posY, spr.largura, spr.altura);
				// colisao
				for (var j in sprites) {
					var ini = sprites[j];
					if (ini.inimigo &&
						ini.posX + ini.largura > spr.posX &&
						ini.posX < spr.posX + spr.largura &&
						ini.posY + ini.altura > spr.posY &&
						ini.posY < spr.posY + spr.altura) {
						delete sprites[j];
						delete sprites[i];
						char.pontosJogador++;
					}
				}
			}
			if (spr.visible) {
				if (spr.inimigo) {
					spr.posY += 1;
					ctx.fillStyle = spr.cor;
					ctx.fillRect(spr.posX, spr.posY, spr.largura, spr.altura);
				} else {
					for (var j in sprites) {
						var ini = sprites[j];
						if (ini.inimigo &&
							ini.posX + ini.largura > spr.posX &&
							ini.posX < spr.posX + spr.largura &&
							ini.posY + ini.altura > spr.posY &&
							ini.posY < spr.posY + spr.altura) {
							char.vida--;
							for(var k in sprites){
								if(k==0){
									continue;
								}
								delete sprites[k];
							}
							if(char.vida == 0){
								fimDeJogo();
							}
								// alert("fim de jogo, aqui colocar o fim do jogos");
						}
					}
					ctx.fillStyle = spr.cor;
					ctx.fillRect(spr.posX, spr.posY, spr.largura, spr.altura);
				}
			}

			if (spr.posY > cnv.height) {
				delete sprites[i];
			}
			if (spr.posY < 0 - spr.altura) {
				delete sprites[i];
			}
		}
		ctx.font = "20pt Tahoma";
		ctx.fillStyle = "#000";
		ctx.fillText("Pontuação:", 10, 35);
		ctx.fillText(char.pontosJogador, 10, 60);
		ctx.fillText("Vida:", 500, 35);
		ctx.fillText(char.vida, 500, 60);
	}
	function loop() {
		window.requestAnimationFrame(loop, cnv);
		update();
		desenha();
	}
	loop();
}());
