$(document).ready(function(){
    $('#telefone').mask('(00) 0000-00000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
    
    $('#cadastroForm').submit(function(e) {
        e.preventDefault();
        
        var nomeCompleto = $('#nomeCompleto').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var cpf = $('#cpf').val();
        var endereco = $('#endereco').val();
        var cep = $('#cep').val();
        
        if (!nomeCompleto || !email || !telefone || !cpf || !endereco || !cep) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        var formData = $(this).serialize();
        console.log(formData);
    });
});
