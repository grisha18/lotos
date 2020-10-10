const main__form__button = document.querySelector('.main__form__button');
const main__subscription__button = document.querySelector('.main__subscription__button');
const text = document.querySelector('.text');
const pages = document.querySelectorAll('.page');
const close = document.querySelector('.close');
const translucent = document.querySelector('.translucent');
const main__text__button = document.querySelector('.main__text__button');
const button__translucent = document.querySelector('.button__translucent');

main__form__button.addEventListener('click', () =>{
    translucent.style.display = "block"
    text.style.display = "flex";
    text.classList.add("centered")


} )

main__form__button.addEventListener('click', () => {
    pages[1].scrollIntoView({
        behavior: 'smooth'     }) 
})
 main__subscription__button.addEventListener('click', () => {
     pages[0].scrollIntoView({
         behavior: 'smooth'     }) 
 })

const closeModal = ()=>{
    translucent.style.display = "none";
    text.style.display ="none"
}
translucent.addEventListener('click', ()=>{
    closeModal();
})


// DRY  -   don't repeat yourself

text.addEventListener('click', ()=>{
   

})




close.addEventListener('click',()=> {
    closeModal();
    
})




window.addEventListener( "resize", ()=>{


    console.log("here we are");

    pages.forEach( (page)=>{

        page.style.height = "100vh";

    });


})
// window.addEventListener("wheel", (e) => {
//     console.log(e.deltaY)
//     pages[1].scrollIntoView({
//         behavior: 'smooth'
//     })
// })

  main__subscription__button.addEventListener('click', () =>{
      button__translucent.style.display = "block"
      main__text__button.style.display = "none"
      main__text__button.style.display = "flex";
      main__text__button.classList.add("centered")

  })

  const closing = ()=>{
    button__translucent.style.display = "none";
    main__text__button.style.display = "none"
}


main__text__button.addEventListener('click', ()=>{
   
})


button__translucent.addEventListener('click', ()=>{
    closing();
})


close.addEventListener('click',()=> {
    closing();
    
})

