const images = document.querySelectorAll('.image');
const nav = document.querySelector('.header');
const title = document.querySelector('.title');

const stickyNav = (entries) =>{
    const [entry] = entries;
    if(!entry.isIntersecting){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
}

const imgReveal = (entries, observer) =>{
    const [entry] = entries;
    if(entry.isIntersecting){
        entry.target.classList.remove('hidden');
    }else{
        observer.unobserve(entry.target);
        return;
    }

    console.log(entry);
}

const navOpttions = {
    root: null,
    threshold: 0
}

const imgOpttions = {
    root: null,
    threshold: 0.2
}

const observer = new IntersectionObserver(stickyNav, navOpttions);
observer.observe(title);

const imgObserver = new IntersectionObserver(imgReveal, imgOpttions);
images.forEach((image)=>{
    imgObserver.observe(image);
})
