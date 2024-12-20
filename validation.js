// Array com campos e regex para validação
const campos = [
    { id: "nome", regex: /^[a-zA-Z\s]+$/, mensagem: "Nome deve conter apenas letras e espaços." },
    { id: "sobrenome", regex: /^[a-zA-Z\s]+$/, mensagem: "Sobrenome deve conter apenas letras e espaços." },
    { id: "email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, mensagem: "Email inválido." },
    { id: "telefone", regex: /^\(\d{2}\)\s\d{5}-\d{4}$/, mensagem: "Telefone inválido. Ex.: (11) 91234-5678." },
    { id: "cpf-cnpj", regex: /^\d{11}|\d{14}$/, mensagem: "CPF/CNPJ inválido." },
    { id: "cep", regex: /^\d{5}-\d{3}$/, mensagem: "CEP inválido. Ex.: 12345-678." },
    { id: "cartao", regex: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, mensagem: "Cartão inválido. Ex.: XXXX XXXX XXXX XXXX." },
    { id: "data-expiracao", regex: /^\d{2}\/\d{2}$/, mensagem: "Data inválida. Ex.: MM/AA." },
    { id: "cvc", regex: /^\d{3}$/, mensagem: "CVC deve conter 3 dígitos." }
];

// Adicionar eventos de validação para cada campo
campos.forEach(campo => {
    const input = document.getElementById(campo.id);
    const errorDiv = document.getElementById(`${campo.id}-error`);

    input.addEventListener('input', () => {
        const value = input.value.trim();
        if (!campo.regex.test(value)) {
            errorDiv.textContent = campo.mensagem;
        } else {
            errorDiv.textContent = "";
        }
    });

    input.addEventListener('focusout', () => {
        const value = input.value.trim();
        if (!campo.regex.test(value)) {
            errorDiv.textContent = campo.mensagem;
        } else {
            errorDiv.textContent = "";
        }
    });
});

