function exibeDados(){
    var informacoes = "Dados informados: ";
    cabecalho.innerHTML = informacoes;

    var nome = document.getElementById('nome');
    var nomeImpresso = document.getElementById('dadosNome');
    nomeImpresso.innerHTML = nome.value;

    var endereco = document.getElementById('endereco');
    var enderecoImpresso = document.getElementById('dadosEndereco');
    enderecoImpresso.innerHTML = endereco.value;

    var bairro = document.getElementById('bairro');
    var bairroImpresso = document.getElementById('dadosBairro');
    bairroImpresso.innerHTML = bairro.value;

    var cidade = document.getElementById('cidade');
    var cidadeImpresso = document.getElementById('dadosCidade');
    cidadeImpresso.innerHTML = cidade.value;

    var estado = document.getElementById('estado');
    var estadoImpresso = document.getElementById('dadosEstado');
    estadoImpresso.innerHTML = estado.value;

    var cep = document.getElementById('cep');
    var cepImpresso = document.getElementById('dadosCep');
    cepImpresso.innerHTML = cep.value;

    var telefone = document.getElementById('telefone');
    var telefoneImpresso = document.getElementById('dadosTelefone');
    telefoneImpresso.innerHTML = telefone.value;

    alert(nome.value);
}