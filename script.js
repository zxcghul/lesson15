
const DomElement = function (name) {
    this.selector = name,
    this.height = '',
    this.width = '',
    this.bg = '',
    this.fontSize = ''

    this.blockDiv = function () {
        let div = document.createElement('div');
        div.className = this.selector;
        div.style.height = '50px';
        div.style.width = '400px';
        div.style.background = 'red';
        div.style.fontSize = '32px';
        div.innerHTML = "<strong>DIV</strong> элемент с классом: " + "<strong>" + 
        div.className + "</strong>";
        document.body.append(div);  
    }

    this.blockP = function () {
        let p = document.createElement('p');
            p.id = this.selector;
            p.className = this.selector;
            p.style.height = '50px';
            p.style.width = '400px';
            p.style.background = 'yellow';
            p.style.fontSize = '32px';
            p.innerHTML = "<strong>P</strong> элемент с ID: " + "<strong>" + 
            p.id + "</strong>";
            document.body.append(p);
    }

    this.creater = function () {
        this.selector = this.selector.trim()
        if (this.selector[0] === '.') {
            this.blockDiv()
        }
        if (this.selector[0] === '#') {
            this.blockP()
        }
    }
}

const tester = new DomElement('.logg');
const tester2 = new DomElement('#porshe');
tester.creater()
tester2.creater()
