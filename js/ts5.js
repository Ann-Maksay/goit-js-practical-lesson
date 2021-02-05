'use strict';

class Component{

    constructor(tag){
        this.element = {};
        this.element.tag = tag;
        this.element.style = {
            display: 'block'
        }
    }
  
    hide(){
        this.element.style.display = 'none';
    }
  
    show(){
        this.element.style.display = 'block';
    }
  }

class Box extends Component{
    constructor(elem){
        super(elem.tag);
        this.element.width = elem.size;
        this.element.hight = elem.size;
        this.element.color = elem.color;
    }

    getProps() {
        console.log(`Element: ${this.element.tag}; Width: ${this.element.width}; Hight: ${this.element.hight}; Background: ${this.element.color}; Display: ${this.element.style.display}`);
    }
       
}


const box1 = new Box({
    tag: '<div></div>',
    size: 100,
    color: 'green'
});

box1.hide();

box1.getProps(); // 'Element: <div></div>; Width: 100; Height: 100; Background: green; Display: none;'

const box2 = new Box({
    tag: '<div></div>',
    size: 50,
    color: 'red'
});


box2.getProps(); // 'Element: <div></div>; Width: 50; Height: 50; Background: red; Display: block;'