/**
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
 
 */


(function($) {
    $.fn.trocaImg = function(srcB, configuracoes) {
        var config = {
            "velocidade": 300
        };
        if (configuracoes) {
            $.extend(config, configuracoes);
        }
        return this.each(function() {
            var ANIMANDO = false;
            var larguraOriginal = $(this).width();
            var altura = $(this).height(); //
            //anima pra a metade do tamanho
            $(this).css("height", altura + "px").animate({
                "width": "0",
                "margin-left": (larguraOriginal / 2) + "px"
            }, {
                "complete": function() {
                    //troca a imagem
                    $(this).attr("src", srcB);
                    //anima para o tamanho original
                    $(this).load(function() {
                        $(this).unbind("load");
                        $(this).animate({
                            "width": larguraOriginal + "px",
                            "margin-left": "0px"
                        }, {
                            "complete": function() {
                                ANIMANDO = false;
                            },
                            "duration": 300
                        });
                    });
                },
                "duration": 300
            });

        }); //each
    }; //trocaImg
})(jQuery);