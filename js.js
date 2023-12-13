
function calcularImc() {
    // Obter os valores dos campos de entrada
    var peso = parseFloat(document.getElementById('numero1').value);
    var altura = parseFloat(document.getElementById('numero2').value);
    var calculo = document.getElementById('resultado');

    // Realizar o cálculo
    var resultado = (peso/(altura**2))*10**4;

    // Exibir o resultado na página
    if (!peso || !altura){
        alert("Por favor, preencha os campos corretamente!");
    }else{
        calculo.textContent = resultado.toFixed(2);
    }
}   

//Trocar cor do botao
document.addEventListener('DOMContentLoaded', function() {
    var botoesObj = document.querySelectorAll('.botau');
    var botaoSelecionado = null; // Inicialmente, nenhum botão está selecionado

    botoesObj.forEach(function(botao) {
        botao.addEventListener('click', function() {
            if (botao !== botaoSelecionado) {
                // Reverter as alterações no botão anterior (se houver)
                if (botaoSelecionado) {
                    botaoSelecionado.style.background = "none";
                    botaoSelecionado.style.opacity = "1";
                }

                // Aplicar as alterações ao botão clicado
                if (botao.id === "manter") {
                    botao.style.backgroundColor = "rgba(0, 0, 255, 0.4)";
                } else if (botao.id === "engordar") {
                    botao.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
                } else if (botao.id === "emagrecer") {
                    botao.style.backgroundColor = "rgba(255, 255, 0,0.4)";
                    
                }

                botaoSelecionado = botao;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var botoes = document.querySelectorAll('.bota');
    var botaoSelecionado = null; // Inicialmente, nenhum botão está selecionado

    botoes.forEach(function(botao) {
        botao.addEventListener('click', function() {
            if (botao !== botaoSelecionado) {
                // Reverter as alterações no botão anterior (se houver)
                if (botaoSelecionado) {
                    botaoSelecionado.style.background = "none";
                    botaoSelecionado.style.opacity = "1";
                }

                // Aplicar as alterações ao botão clicado
                if (botao.id === "homem") {
                    botao.style.backgroundColor = "rgba(0, 0, 255, 0.4)";
                } else if (botao.id === "mulher") {
                    botao.style.backgroundColor = "rgba(255, 194, 204, 0.4)";
                }

                botaoSelecionado = botao;
            }
        });
    });
});

// Calcular gasto energético basal

var sexo = 'a';
var pesoIdeal;
var meta = 0;

document.getElementById('homem').addEventListener('click', function() {
    sexo = 'Homem';
});


document.getElementById('mulher').addEventListener('click', function() {
    sexo = 'Mulher';
});


document.getElementById('manter').addEventListener('click', function() {
    meta = 0;
});


document.getElementById('emagrecer').addEventListener('click', function() {
    meta = -500;
});


document.getElementById('engordar').addEventListener('click', function() {
    meta = 250;
});

document.getElementById('calcularBsal').addEventListener('click', function() {

    var idade = parseFloat(document.getElementById("numero3").value);
    var peso = parseFloat(document.getElementById("numero1").value);

    function calcularPesoIdeal(idade, sexo, peso) {
        if (idade >= 0 && idade <= 3) {
            if (sexo === 'Mulher') {
                return (58.317 * peso) - 31.1;
            } else if (sexo === 'Homem') {
                return (59.512 * peso) - 30.4;
            }
        } else if (idade > 3 && idade <= 10) {
            if (sexo === 'Mulher') {
                return (20.315 * peso) + 485.9;
            } else if (sexo === 'Homem') {
                return (22.706 * peso) + 504.3;
            }
        } else if (idade > 10 && idade <= 18) {
            if (sexo === 'Mulher') {
                return (13.384 * peso) + 692.6;
            } else if (sexo === 'Homem') {
                return (17.686 * peso) + 658.2;
            }
        } else if (idade > 18 && idade <= 30) {
            if (sexo === 'Mulher') {
                return (14.818 * peso) + 486.6;
            } else if (sexo === 'Homem') {
                return (15.057 * peso) + 692.2;
            }
        } else if (idade > 30 && idade <= 60) {
            if (sexo === 'Mulher') {
                return (8.126 * peso) + 845.6;
            } else if (sexo === 'Homem') {
                return (11.472 * peso) + 873.1;
            }
        } else if (idade >= 60) {
            if (sexo === 'Mulher') {
                return (9.082 * peso) + 658.5;
            } else if (sexo === 'Homem') {
                return (11.711 * peso) + 587.7;
            }
        }
    }

    var pesoIdeal = calcularPesoIdeal(idade, sexo, peso);
    var fatorAtividadeSelecionado = parseFloat(document.getElementById('atividadeDiaria').value);
    pesoIdeal = (pesoIdeal * fatorAtividadeSelecionado) + meta;

    document.getElementById('pesIdeal').innerHTML = "A quantidade que deve ingerir de calorias é: " + pesoIdeal.toFixed(0);

});

///<p id="pesIdeal" type="text"></p>
