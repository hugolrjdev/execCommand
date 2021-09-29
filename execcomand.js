// alert('D3uR0ck')

// let btn = ;

var btn = document.querySelector('[type=button]');


var textForCopy = document.querySelector('textarea');

textForCopy.innerHTML = 
`*Unimed Fortaleza*
Saúde - individual
*Multiplan | Sem Coparticipação*
*Taxa De Inscrição: 1ª Mensalidade*
Acomodação: Enfermaria
*Abrangência: Nacional*
*Coparticipação: Não*
Faixa Etária
0 a 18 anos - R$ 385.4
19 a 23 anos - R$ 443.19
*3 Vida´s*
Total: R$ 1271.78 `;

btn.addEventListener('click', ()=>{
    textForCopy.select();
    document.execCommand('copy');
});