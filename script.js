document.getElementById('generateBtn').addEventListener('click', generateCPF);

function generateCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10).toString();
}

    cpf += calculateDigit(cpf);
    cpf += calculateDigit(cpf);

    document.getElementById('cpfResult').value = formatCPF(cpf);
}

function calculateDigit(cpf) {
    let sum = 0;
    let weight = cpf.length + 1;

    for (let i = 0; i < cpf.length; i++) {
        sum += parseInt(cpf.charAt(i)) * weight;
        weight--;
}

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}

function formatCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
