 
@victorvhpg
03/02/2012
http://jsfiddle.net/victorvhpg/YfYMN/embedded/result/
efeito que parece um flip horizontal
funciona assim:
anime a imagem para largura 0 e margin-left para a metade da largura,
apos o fim desta primeira animacao
troque o src da imagem para outra imagem
e anime novamente para largura original e margin-left 0
Com isso parece que ela faz um flip mas na verdade nao faz :)
exemplo de uso:
$("img").trocaImg("imagens/teste.jpg");
 