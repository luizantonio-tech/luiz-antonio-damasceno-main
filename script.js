// ============================================================
// script.js — VINCI Electric Vehicles
// Reescrito com arrow functions e sintaxe moderna (ES6+)
// ============================================================


// ============================================================
// 1. MENU HAMBURGUER (mobile)
// ============================================================
const btnHamburguer = document.getElementById('btn-hamburguer');
const navPrincipal = document.getElementById('nav-principal');

if (btnHamburguer && navPrincipal) {
  btnHamburguer.addEventListener('click', () => {
    navPrincipal.classList.toggle('nav-aberta');
  });
}


// ============================================================
// 2. MEGAMENU — PAINEL DE VEÍCULOS
// ============================================================
const btnVeiculos = document.getElementById('btn-veiculos');
const painelVeiculos = document.getElementById('painel-veiculos');

if (btnVeiculos && painelVeiculos) {

  // Abre / fecha ao clicar no botão Veículos
  btnVeiculos.addEventListener('click', (evt) => {
    evt.stopPropagation();
    painelVeiculos.classList.toggle('painel-aberto');
  });

  // Fecha ao clicar fora do painel
  document.addEventListener('click', (evt) => {
    if (!painelVeiculos.contains(evt.target)) {
      painelVeiculos.classList.remove('painel-aberto');
    }
  });

  // Fecha ao pressionar Escape
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      painelVeiculos.classList.remove('painel-aberto');
    }
  });
}


// ============================================================
// 3. FORMULÁRIO DE AGENDAMENTO — TEST DRIVE
// ============================================================
const formAgendamento = document.getElementById('form-agendamento');
const avisoSucesso = document.getElementById('aviso-sucesso');

if (formAgendamento) {

  // Bloqueia datas passadas no campo data
  const campoData = document.getElementById('data');
  const dataHoje = new Date().toISOString().split('T')[0];
  campoData.min = dataHoje;

  // Ao enviar o formulário
  formAgendamento.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const nomeUsuario = document.getElementById('nome').value;

    avisoSucesso.textContent = `Test Drive agendado com sucesso, ${nomeUsuario}! Entraremos em contato.`;
    avisoSucesso.removeAttribute('hidden');

    formAgendamento.reset();
    campoData.min = new Date().toISOString().split('T')[0];
  });
}
