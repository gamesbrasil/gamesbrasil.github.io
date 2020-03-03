(function(){
	//elemento canvas e contexto de renderização
	var cnv = document.querySelector("canvas");
	var ctx = cnv.getContext("2d");
	
	//tamanho dos blocos
	var wid = 14;
	var hei = 14;
	
	var char = {
		// img: monster,
		x: 1,
		y: 1,
		cor: 'blue',
		width: 14,
		height: 14,
		desenha: function() {
			// if (this.y < chao.y - this.altura) {
			// 	this.y = chao.y - this.altura;
			// }

			// this.x -= velocidade;
			
			// if(this.x<-80)
			// 	this.x=750;
			
			ctx.fillStyle = this.cor;
			// ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};

	//mapa do labirinto
	var maze = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1],
		[1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1],
		[1,0,0,0,0,0,1,10,1,1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	function procuraPosicao(){
		for(var row in maze){
			for(var column in maze[row]){
				var tile = maze[row][column];
				if(tile ===2){
					return row + '-' + column;
				}
			}
		}
	}
	//atualização cíclica do programa
	function update(){
		//move para esquerda
		if(mvLeft && !mvRight){
			posicao = procuraPosicao();//linha-coluna
			linha = parseInt(posicao.split('-')[0]);
			coluna = parseInt(posicao.split('-')[1]);
			// alert(procuraPosicao());
			if(maze[linha][coluna-1]===0){
				maze[linha][coluna] = 0;
				maze[linha][coluna-1] = 2;
			}
		}
		if(mvRight && !mvLeft){
			posicao = procuraPosicao();//linha-coluna
			linha = parseInt(posicao.split('-')[0]);
			coluna = parseInt(posicao.split('-')[1]);
			if(maze[linha][coluna+1]===0){
				maze[linha][coluna] = 0;
				maze[linha][coluna+1] = 2;
			}
		}
		if(mvUp && !mvDown){
			posicao = procuraPosicao();//linha-coluna
			linha = parseInt(posicao.split('-')[0]);
			coluna = parseInt(posicao.split('-')[1]);

			if(maze[linha-1][coluna]===0){
				maze[linha][coluna] = 0;
				maze[linha-1][coluna] = 2;
			}
		}
		if(mvDown && !mvUp){
			posicao = procuraPosicao();//linha-coluna
			linha = parseInt(posicao.split('-')[0]);
			coluna = parseInt(posicao.split('-')[1]);
			if(maze[linha+1][coluna]===0){
				maze[linha][coluna] = 0;
				maze[linha+1][coluna] = 2;
			}
			if(maze[linha+1][coluna]===10){
				maze[linha][coluna] = 0;
				maze[linha+1][coluna] = 2;
				alert("Parabéns, conseguiu achar a saida, em breve teremos mais níveis.");
			}
		}
		mvLeft = false;
		mvRight = false;
		mvUp = false;
		mvDown = false;
	}
	
	//renderização (desenha na tela)
	function render(){
		//procedimento que varre as linhas e colunas do labirinto
		for(var row in maze){
			for(var column in maze[row]){
				//pega o elemento armazenado em uma determinada linha/coluna
				var tile = maze[row][column];
				//se for um tijolo...
				if(tile === 0){
					//...especifica as dimensões e a posição...
					var x = column*wid;
					var y = row*hei;
					//...e desenha na tela
					ctx.fillStyle = "white";
					ctx.fillRect(x,y,wid,hei);
				}
				if(tile === 1){
					//...especifica as dimensões e a posição...
					var x = column*wid;
					var y = row*hei;
					//...e desenha na tela
					ctx.fillStyle = "black";
					ctx.fillRect(x,y,wid,hei);
				}
				if(tile === 2){
					//...especifica as dimensões e a posição...
					var x = column*wid;
					var y = row*hei;
					//...e desenha na tela
					ctx.fillStyle = "blue";
					ctx.fillRect(x,y,wid,hei);
				}
				if(tile === 3){
					//...especifica as dimensões e a posição...
					var x = column*wid;
					var y = row*hei;
					//...e desenha na tela
					ctx.fillStyle = "red";
					ctx.fillRect(x,y,wid,hei);
				}
			}
		}
	}
	
	function loop(){
		update();
		render();
		requestAnimationFrame(loop,cnv);
	}
	
	requestAnimationFrame(loop,cnv);

	//mover o char
	var mvLeft = mvRight = mvUp = mvDown = false;
	window.addEventListener('keydown',function(e){
		var key = e.keyCode;
		switch(key){
			case 37:
				mvLeft = true;
				break;
			case 39:
				mvRight = true;
				break;
			case 38:
				mvUp = true;
				break;
			case 40:
				mvDown = true;
				break;
		}
	},false);
	
	window.addEventListener('keyup',function(e){
		var key = e.keyCode;
		switch(key){
			case 37:
				mvLeft = false;
				break;
			case 39:
				mvRight = false;
				break;
			case 38:
				mvUp = false;
				break;
			case 40:
				mvDown = false;
				break;
		}
	},false);
}());
