
export default class Header{
    constructor(element){
        this.element = element
        this.html = document.documentElement
        this.options = {
            threshold: document.querySelector('[data-threshold]').dataset.threshold,
            show: document.querySelector('[data-always-show]').dataset,
        }
        this.lastScrollPosition = 0
        this.scrollPosition = 0 //position du scroll
        
        
        console.log(this.options.show)
        
        this.init()
        this.initNavMobile()
    }

    init(){
        this.setOptions()

        window.addEventListener('scroll', this.onScroll.bind(this))
    }

    setOptions(){
        //Vérifier les attributs data sur la composante
    }

    onScroll(){
        this.lastScrollPosition = this.scrollPosition
        this.scrollPosition = document.scrollingElement.scrollTop //position du scroll
 
        this.setHeaderState()
        this.setDirections()
    }



    setHeaderState(){

        if(this.options.show){
            this.html.classList.remove('header-is-hidden')
        }
        
        else if(this.scrollPosition > document.scrollingElement.scrollHeight * this.options.threshold){
            this.html.classList.add('header-is-hidden')
            console.log('threshold : ',this.options.threshold)
        }

        else{
            this.html.classList.remove('header-is-hidden')
        }
    }



    setDirections(){
        if(this.scrollPosition >= this.lastScrollPosition){
            //scroll vers le bas
            this.html.classList.add('is-scrolling-down')
            this.html.classList.remove('is-scrolling-up')
        }

        else{
            //scroll vers le haut
            this.html.classList.remove('is-scrolling-down')
            this.html.classList.add('is-scrolling-up')
        }
    }

    //Menu mobile

    initNavMobile(){
        const boutonMenu = this.element.querySelector('.js-toggle')
        boutonMenu.addEventListener('click', this.onToggleNav.bind(this))
    }

    onToggleNav(){
        this.html.classList.toggle('nav-is-active')
    }
}