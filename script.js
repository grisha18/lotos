const main__form__button = document.querySelector('.main__form__button');
const main__subscription__button = document.querySelector('.main__subscription__button');

const pages = document.querySelectorAll('.page');

main__form__button.addEventListener('click', () =>{
    pages[1].scrollIntoView({
        behavior: 'smooth'
    })
    

} )
main__subscription__button.addEventListener('click', () => {
    pages[0].scrollIntoView({
        behavior: 'smooth'
    }) 
})



window.addEventListener( "resize", ()=>{


    console.log("here we are");

    pages.forEach( (page)=>{

        page.style.height = "100vh";

    });


})