var Sprite = function (posX, posY, largura, altura, img) {
    this.img = img;
    this.posX = posX;
    this.posY = posY;
    this.tiro = false;
    this.largura = largura;
    this.altura = altura;
    this.visible = true;
    this.speed = 1;
    this.inimigo = false;

    //funcoes
    function movimento() {
        this.posX++;
    }
    this.desenhar = function(ctx){
        ctx.drawImage(this.img,this.posX,this.posY,this.largura,this.altura);
    }

}
