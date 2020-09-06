let navbar = document.getElementById("navbar");
let welcome = document.getElementById("welcome-section");
const ChangeStyle = (element, property, value)=>    {
    document.querySelector(element).setAttribute(property, value);
}
const ChangeStyleAll = (element, property, value)=>    {
    let elems = document.querySelectorAll(element);

    [].forEach.call(elems, (elem)=>{
        elem.setAttribute(property,value);
    });
}


const ChangeNavOnScroll = ()=>  {
    const dim = welcome.offsetHeight + welcome.offsetTop;

    window.onscroll = ()=>{
        const stop = Math.round(window.scrollY);
        if(stop >= dim){
            ChangeStyleAll('nav a','style','color: #A71D31;');
        }
        else{
            ChangeStyleAll('nav a','style','color: #F1F0CC;');
        }

    }
} 
const ChangeNavOnLoad = ()=>  {
    const dim = welcome.offsetHeight + welcome.offsetTop;

    const stop = Math.round(window.pageYOffset);
    if(stop >= dim){
        ChangeStyleAll('nav a','style','color: #3F0D12;');
    }
    else{
        ChangeStyleAll('nav a','style','color: #F1F0CC;');
    }    
} 

window.addEventListener("load",()=> {
    ChangeNavOnScroll();
    ChangeNavOnLoad();
});