const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const hader = document.querySelector('#hader');
const hader_item = document.querySelectorAll('#hader .hader ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}) 


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        hader.style.background = "#29323c";
    }else{
        hader.style.background ="transparent"
    }
})



hader_item.forEach((item) => {
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    })
});


// let number = document.getElementById('number');
// let counter = 0;

// setInterval(() => {
//     if(counter == 65){
//         clearInterval();
//     }else{
//     counter += 1;
//     number.innerHTML = counter + '%';
//     }
// } ,setTimeout='30')




let filterContainer = document.querySelector('.gallery-filter');
let galleryitem = document.querySelectorAll('.gallery-item');

filterContainer.addEventListener('click', (event) => {
    if(event.target.classList.contains('filter-item')){

        filterContainer.querySelector('.active').classList.remove('active');
        event.target.classList.add('active');

        let filterValue = event.target.getAttribute('data-filter');

        galleryitem.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue == 'all') {
                item.classList.remove('hide');
                item.classList.add('show');
            }
            else{
                item.classList.remove('show');
                item.classList.add('hide');
            }
        })
    }
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
