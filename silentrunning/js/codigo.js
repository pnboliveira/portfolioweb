var nome = "";
var texto = "";

function limpa() {

   document.getElementById("cena1").style.display="none";
   document.getElementById("cena2_op2").style.display = "none";
   document.getElementById("cena2_op1").style.display = "none";
   document.getElementById("cena3_op2").style.display = "none";
   document.getElementById("cena3_op1").style.display = "none";
   document.getElementById("cena3_inicio").style.display = "none";
   document.getElementById("cena4").style.display = "none";
   document.getElementById("cena5_ed1_1").style.display = "none";
   document.getElementById("cena5_ed2_1").style.display = "none";
   document.getElementById("cena5_ed2_2").style.display = "none";
   document.getElementById("cena5_ed1_2").style.display = "none";
   document.getElementById("credits").style.display = "none";
   document.getElementById("introAudio").style.display="none";
   document.getElementById("introAudio").play();
   
}

function inicia() {

    nome = document.getElementById("nomealuno").value;
    document.getElementById("cena1").style.display = "block";
    document.getElementById("escolha").style.display = "none";
    document.getElementById("imagemjogo").style.display = "none";
    texto = "O <b>PERSONAGEM</b> acorda em cima da mota. Lembra-se que teve de fugir da cidade por causa da relação, que acabou há pouco tempo. Supostamente ela <b>'estava farta'</b>. Após relembrar-se de onde estava, voltou a ligar a mota, e continuou o seu caminho. Uns minutos depois, encontra um hotel e um bar, mas não sabe onde ir primeiro.";
    texto = texto.replace("PERSONAGEM", nome);
    document.getElementById("textocena").innerHTML = texto;
	document.getElementById("introAudio").pause();
	document.getElementById("gameAudio").style.display="none";
    document.getElementById("gameAudio").play(); 

}

function credits() {
		document.getElementById("credits").style.display = "block";
		document.getElementById("imagemjogo").style.display = "none";
   		document.getElementById("cena1").style.display="none";
   		document.getElementById("cena2_op2").style.display = "none";
  		document.getElementById("cena2_op1").style.display = "none";
   		document.getElementById("cena3_op2").style.display = "none";
   		document.getElementById("cena3_op1").style.display = "none";
  		document.getElementById("cena3_inicio").style.display = "none";
   		document.getElementById("cena4").style.display = "none";
   		document.getElementById("cena5_ed1_1").style.display = "none";
   		document.getElementById("cena5_ed2_1").style.display = "none";
   		document.getElementById("cena5_ed2_2").style.display = "none";
   		document.getElementById("escolha").style.display="none";
		document.getElementById("cena5_ed1_2").style.display = "none";
		document.getElementById("gameAudio").pause();
		document.getElementById("gameAudio2").pause();
		document.getElementById("introAudio").pause();
        texto = "Este jogo foi realizado no âmbito da disciplina de Sistemas de Informação, para o 1º de Multimédia no IPTA - Instituto Profissional de Tecnologias Avançadas.<p /><b>História:</b> Pedro Oliveira<br /><b>Arte:</b> Pedro Oliveira<p /> Música utilizada:<br /> <a href ='https://www.youtube.com/watch?v=stY_mgk3PIw'><b>The Protomen</b> - Silent Running/Breaking Out (2012)</a><br /><a href='https://www.youtube.com/watch?v=N-gM7RNd_rM'><b>Shoji Meguro</b> - The Poem of Everyone's Souls</a><br /><a href='https://www.youtube.com/watch?v=qmtrmH101-Q'><b>Nobuo Uematsu</b> - Prelude (Dissidia: Final Fantasy)</a><br /><br />Qualquer similaridade com acotecimentos verdadeiros é pura coincidência.<br />© Pedro Oliveira, 2014 ";
        document.getElementById("textcredits").innerHTML = texto;   


}

function cena2(decisao) {

    if (decisao == "hotel")
    {
        document.getElementById("cena2_op2").style.display = "block";
        document.getElementById("cena1").style.display = "none";
        texto = "<h1>Pensaste demasiado.</h1>O <b>PERSONAGEM</b> entrou no hotel, e a primeira pergunta que ouviu foi: <b>'Vem com um casal ou sozinho?'</b>. A partir daí ele ligou à ex-namorada mal chegou ao hotel, e pediu para voltar... ";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_2op2").innerHTML = texto;
		document.getElementById("gameAudio").pause();
		document.getElementById("gameAudio2").style.display="none";
		document.getElementById("gameAudio2").play();
    } else {
        document.getElementById("cena2_op1").style.display = "block";
        document.getElementById("cena1").style.display = "none";
        texto = "<h1>Entraste no Bar.</h1>O <b>PERSONAGEM</b> precisava de esquecer a viagem, especialmente depois de uma noite longa só a andar sobre duas rodas. O bartender pergunta o porquê de estares tão triste, e contas a tua história, de como <b>'a abandonaste'</b>. O Bartender só te pergunta uma de duas coisas: (Escolhe a que queres ouvir)";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_2op1").innerHTML = texto;


    }


}

function getItRight(){

    var cpuChoice;
    cpuChoice = parseInt(Math.random() * 3) + 1;
    //alert("O monstro manda :" + pancadamonstro);

    var userChoice;
    userChoice = document.getElementById("choices").value;
    //alert("O jogador manda :" + pancadajogador);

    if (userChoice == cpuChoice) {
        document.getElementById("choicetime").src = "imagens/cheat3.png";
		texto = "Apesar da confusão e da desconfiança, o <b>PERSONAGEM</b> conseguiu adivinhar e perdoou-a, exactamente porque entendeu que não aconteceu nada de muito mau. Mas as coisas, mesmo que estivessem acesas, nunca ficaram bem. Mesmo que ela estivesse <b>'sempre do teu lado'</b>.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_3pt2").innerHTML = texto;
    } else {
        document.getElementById("choicetime").src = "imagens/cheat2.png";
		texto = "O <b>PERSONAGEM</b> não conseguiu perceber a razão e se foi de propósito, e a partir desse momento, as discussões ficaram sempre presentes na relação. Por muito que tentasse, ele seria <b>'só mais um'</b>.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_3pt2").innerHTML = texto;
		
    }
    document.getElementById("cena3final").style.display = "none";
    document.getElementById("cena3_inicio").style.display = "block";
}
function cena3(decisao) {

    if (decisao == "trair") {
        document.getElementById("cena3_op2").style.display = "block";
        document.getElementById("cena2_op1").style.display = "none";
        texto = "<h1>Escolheste falar da Traição.</h1>O <b>PERSONAGEM</b>, já meio tocado pelo sabor delicioso a álcool, contou-lhe o que lhe fez sofrer mais. Numa certa noite, ele chega a casa e repara no telefone dela, com uma nova mensagem. Era do ex-namorado, a dizer: <b>'Gostei de te ver outra vez, não me importava de repetir'</b>. Devastado, encontra-a na sala a escrever, e confronta-a. Há uma razão, e ela não quer explicar qual é. Foi porque:";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_3op2").innerHTML = texto;
        
    } else {
        document.getElementById("cena3_op1").style.display = "block";
        document.getElementById("cena2_op1").style.display = "none";
        texto = "<h1>Escolheste falar do que achas dela.</b></h1>O <b>PERSONAGEM</b> lá quis responder à pergunta do Bartender, e contou um dos melhores momentos com ela, muito próximo do seu primeiro aniversário da relação. Estavam em Seattle, uma cidade que ele sempre adorou, mesmo quando ia de carro, e ela do nada tira dois passes para um evento. Ele pergunta-se pelo porquê de ela ter dado essa prenda, e a resposta dela era simples. <b>'Eu quero ver-te sempre feliz, não importa a ocasião'</b>. Com isso, eles lá decidem ir ao evento.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_3op1").innerHTML = texto;


    }


}

function cena4() {

   
        document.getElementById("cena4").style.display = "block";
        document.getElementById("cena3_op1").style.display = "none";
        texto = "Depois de entrarem no evento, o <b>PERSONAGEM</b> questionou-se de uma coisa: Como é que ela conseguiu comprar passes para o evento sem ele saber, e ainda por cima de algo que ele gostava? Mas há uma coisa que ele esqueceu. Que há sempre uma surpresa. Nesse momento, ela encontra-o, com uma cópia do filme que mais adorava, assinado pelo próprio realizador. Claro que ele ficou feliz, e quer compensá-la, ao levar para um jantar. Mas umas horas antes, ele combinou um jantar com uns amigos dele. O que é que ele lhe vai dizer?";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_4").innerHTML = texto;   


}

function cena5(decisao) {

    if (decisao == "Brethren") {
        document.getElementById("cena5_ed2_1").style.display = "block";
        document.getElementById("cena4").style.display = "none";
        texto = "<h1>A amizade, para ti, é importante.</h1>Apesar de querer mesmo estar com ela, o <b>PERSONAGEM</b> prefere estar com os amigos. Apesar de estar sempre a conversar, ele tinha <b>'saudades de uma boa gargalhada'</b>, mesmo com as piadas más, e o gozo completo. O que interessa é que ele iria divertir-se.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_5ed2_1").innerHTML = texto;
        
    } else {
        document.getElementById("cena5_ed1_1").style.display = "block";
        document.getElementById("cena4").style.display = "none";
        texto = "<h1>Não importa a ocasião, ela é mais importante.</b></h1>Para não estar em maus lençois, o <b>PERSONAGEM</b> lá decide estar com ela. Por muitas coisas que apareçam - seja ex-namorados/as, problemas económicos, discussões estranhas - o que importava era que <b>'estivesse ao lado dela'</b>.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_5ed1_1").innerHTML = texto;


    }


}

function cena5_ed2() {
		document.getElementById("cena5_ed2_2").style.display = "block";
        document.getElementById("cena5_ed2_1").style.display = "none";
        texto = "O bartender, depois de ouvir a tua história, diz isto: <br />- Ò <b>PERSONAGEM</b>, eu posso não saber muito do que te possa ter acontecido, mas se pelo menos preocupaste-te mais em socializar do que ficar com ela e não ir, fizeste bem. A amizade é o que conta, e se a pessoa que nós consideramos especial gostar de estar com eles, essa é a pessoa certa. Se ela for boa pessoa, ela percebe que devia ter feito um melhor trabalho de estar presente na tua vida, e não só na dela.<p/>Depois de ouvir o melhor conselho, ele fica contente, e acha que consegue recuperar desta separação. Ele agradece o bartender com uma boa gorjeta, e segue viagem na moto. Tudo para <b>'não ficar preso ao passado'</b>.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_5ed2_2").innerHTML = texto;   


}

function cena5_ed1() {
		document.getElementById("cena5_ed1_2").style.display = "block";
        document.getElementById("cena5_ed1_1").style.display = "none";
        texto = "Depois dessa história, o bartender tenta explicar o que pensa: <br />- Olha, <b>PERSONAGEM</b>, eu não sei muito do que possa ter acontecido entre vocês os dois, mas pelo que fizeste por ela, notou-se que era uma rapariga especial. Tudo bem, inicialmente ela pareceu estranha, mas para te deixar assim, ela deixou um bom buraco nos teus sentimentos. Acredita no que digo: Vais ter dificuldade em recuperar disto, mas com o tempo chegas lá.<p/>Após ter entendido o conselho do bartender, ele decide dar uma gorgeta pequena para agradecer. Ao ouvir aquilo tudo - e de relembrar o bom passado que teve com ela - ele decide voltar a casa. <b>'Ele só precisa de fazer uma chamada'</b>.";
        texto = texto.replace("PERSONAGEM", nome);
        document.getElementById("textocena_5ed1_2").innerHTML = texto;   


}