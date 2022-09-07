
const DomElement = function (name, valueHeight, valueWidth, bgColor, fontSizeValue) {
    this.selector = name,
    this.height = valueHeight,
    this.width = valueWidth,
    this.bg = bgColor,
    this.fontSize = fontSizeValue

    this.block = function () {
        let element;
        if (this.selector[0] === '.') {
            element = document.createElement('div');
        }
        if (this.selector[0] === '#') {
            element = document.createElement('p');
        }
        element.className = this.selector;
        element.style.height = this.height;
        element.style.width = this.width;
        element.style.background = this.bg;
        element.style.fontSize = this.fontSize;
        element.innerHTML = "<strong>DIV</strong> элемент с классом: " + "<strong>" + 
        element.className + "</strong>";
        document.body.append(element);  
    }
    this.creater = function () {
        this.selector = this.selector.trim()
        this.block()
    }
}

const tester = new DomElement('.logg', '200px', '300px', 'red', '30px');
const tester2 = new DomElement('#porshe', '300px', '200px', 'yellow', '20px');
tester.creater()
tester2.creater()
