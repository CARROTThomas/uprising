/* Animation type 1 (Animation 1) */
const textAnim = document.querySelector('.changing-text')

new Typewriter(textAnim, {
    loop : true,
    deleteSpeed : 70
    /* deleteSpeed : (10 rapide / deleteSpeed: 70 lent) */

})
    /* changeDelay : (10 rapide / changeDelay: 70 lent) */
    .changeDelay(90)
    .typeString("Stellar Uprising")
    .pauseFor(1000)
    .deleteChars(16)
    .start()

/* ###################################################################### */



const section_collaborateurs = document.querySelector('.section_collaborators')
const section_download = document.querySelector('.section_download')
const punchline = document.querySelector('.punchline')

const nav_link_home = document.querySelector('#nav_link_home')
const nav_link_collaborators = document.querySelector('#nav_link_collaborators')
const nav_link_download = document.querySelector('#nav_link_download')


nav_link_home.addEventListener('click', ()=> {
    punchline.scrollIntoView({ behavior: 'smooth' });
})


nav_link_collaborators.addEventListener('click', ()=> {
    section_collaborateurs.scrollIntoView({ behavior: 'smooth' });
})


nav_link_download.addEventListener('click', ()=> {
    section_download.scrollIntoView({ behavior: 'smooth' });
})
