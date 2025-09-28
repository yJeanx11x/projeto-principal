const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode_terminal = require('qrcode-terminal'); // Ainda pode manter para ver no terminal
const qrcode = require('qrcode'); // Importe esta biblioteca para gerar imagem

console.log('Iniciando o bot WhatsApp...');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // --- Opção para ver no terminal (se quiser manter) ---
    console.log('QR Code recebido. Escaneie com seu celular:');
    qrcode_terminal.generate(qr, { small: true });

    // --- Opção para salvar como imagem (adicione ou use em vez da de cima) ---
    qrcode.toFile('qrcode.png', qr, function (err) {
        if (err) console.error(err);
        console.log('QR Code salvo como qrcode.png. Abra o arquivo no VS Code para escanear.');
    });
});

client.on('ready', () => {
    console.log('Cliente WhatsApp está pronto!');
});

// ... (restante do seu código do bot) ...

client.initialize();