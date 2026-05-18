window.addEventListener('scroll', ()=>{
const nav = document.querySelector('nav')
if (window.scrollY > 0){
    nav.classList.add('sc')
}else{
    nav.classList.remove('sc')
}
})
function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior:'smooth',
        block: 'start'
    })
}


const cards= document.querySelectorAll('#s2, .card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            cards.forEach((card, index)=> {
                setTimeout(()=> {
                    card.classList.add('visible');
                }, index * 200);
            });
        }else{
            cards.forEach((card)=>{
                card.classList.remove('visible');
            });
        }
    })
}, {threshold: 0.2});

observer.observe(document.querySelector('#s2'))  ;
function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value

    // montar mensagem
    const mensagem=`gostaria de entrar em contato \n\nNome: ${nome}\nAssunto: ${assunto}`
    const msg= encodeURIComponent(mensagem)
    window.open
}
