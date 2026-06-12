function atualizarMonitor() {

    const prod = parseFloat(
        document.getElementById('inputProducao').value
    );

    const pres = parseFloat(
        document.getElementById('inputPreservacao').value
    );

    const txtProd =
        document.getElementById('txtProducao');

    const txtPres =
        document.getElementById('txtPreservacao');

    const msgStatus =
        document.getElementById('mensagemStatus');

    const cardPres =
        document.getElementById('cardPreservacao');

    if (isNaN(prod) || isNaN(pres)) {
        alert("Preencha os dois campos.");
        return;
    }

    txtProd.innerText = prod + " ha";
    txtPres.innerText = pres + " ha";

    const total = prod + pres;
    const percentual = (pres / total) * 100;

    if (percentual >= 20) {

        msgStatus.innerText =
        "🌿 Excelente! A propriedade demonstra equilíbrio entre produção e preservação ambiental.";

        msgStatus.className =
        "status-box sucesso";

        cardPres.className =
        "card sucesso";

    } else {

        msgStatus.innerText =
        "⚠️ Atenção! A área preservada está abaixo do recomendado para um futuro sustentável.";

        msgStatus.className =
        "status-box alerta";

        cardPres.className =
        "card alerta";
    }
}
