function atualizarMonitor() {

    const prod = parseFloat(document.getElementById('inputProducao').value);
    const pres = parseFloat(document.getElementById('inputPreservacao').value);

    const txtProd = document.getElementById('txtProducao');
    const txtPres = document.getElementById('txtPreservacao');
    const msgStatus = document.getElementById('mensagemStatus');
    const cardPres = document.getElementById('cardPreservacao');

    if (isNaN(prod) || isNaN(pres)) {
        alert("Por favor, preencha os dois campos.");
        return;
    }

    txtProd.innerText = prod + " hectares";
    txtPres.innerText = pres + " hectares";

    const total = prod + pres;
    const percPreservacao = (pres / total) * 100;

    if (percPreservacao >= 20) {

        msgStatus.innerText =
            "🌱 Sustentabilidade em dia! A propriedade mantém um bom equilíbrio ambiental.";

        msgStatus.className = "status-box sucesso";
        cardPres.className = "card sucesso";

    } else {

        msgStatus.innerText =
            "⚠️ Atenção! A área de preservação está abaixo do recomendado.";

        msgStatus.className = "status-box alerta";
        cardPres.className = "card alerta";
    }
}
