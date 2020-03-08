var Sprite = function (posX, posY, largura, altura, cor) {
    this.posX = posX;
    this.posY = posY;
    this.tiro = false;
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
    this.visible = true;
    this.speed = 1;
    this.inimigo = false;

    //funcoes
    function movimento() {
        this.posX++;
    }
}
