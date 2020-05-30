const calcBtnEl = document.getElementById('calc-buttons');
let activeNum = document.getElementById('num1');
let singEl = document.getElementById('sign');


calcBtnEl.addEventListener('click', function(ev){
    if (ev.target.nodeName === 'BUTTON' && !ev.target.dataset.sign){
        const attrVal = ev.target.getAttribute('data-num');
        activeNum.innerText += attrVal;
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '+'){
        singEl.innerText = ev.target.getAttribute('data-sign');
        activeNum = document.getElementById('num2');
        
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '-'){
        singEl.innerText = ev.target.getAttribute('data-sign');
        activeNum = document.getElementById('num2');
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '/'){
        singEl.innerText = ev.target.getAttribute('data-sign');
        activeNum = document.getElementById('num2');
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '*'){
        singEl.innerText = ev.target.getAttribute('data-sign');
        activeNum = document.getElementById('num2');
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'rad'){
        singEl.innerText = ev.target.getAttribute('data-sign');
        activeNum = document.getElementById('num2');
    }

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '%' && activeNum === document.getElementById('num1')){
        let num1Val = +document.getElementById('num1').innerText;
        const result = num1Val / 100;
        document.getElementById('num1').innerText = result.toFixed(5);
    } 

    if (ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '+/-'){  
            activeNum.innerText = -activeNum.innerText;
    }

    /*=======================================================*/
    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && singEl.innerText  === '+'){
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        const result = num1Val + num2Val;
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        document.getElementById('num1').innerText = result.toFixed(5);
        
    }

    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && singEl.innerText  === '-'){
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        const result = num1Val - num2Val;
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        document.getElementById('num1').innerText = result.toFixed(5);
    }

    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && singEl.innerText  === '/'){
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        const result = num1Val / num2Val;
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        document.getElementById('num1').innerText = result.toFixed(5);
    }

    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && singEl.innerText  === '*'){
        let num1Val = +document.getElementById('num1').innerText;
        let num2Val = +document.getElementById('num2').innerText;
        const result = num1Val * num2Val;
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        document.getElementById('num1').innerText = result.toFixed(5);
        
    }

    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === '=' && singEl.innerText  === 'rad'){
        let num1Val = +document.getElementById('num1').innerText;
        const result =Math.sqrt(num1Val);
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        document.getElementById('num1').innerText = result.toFixed(5);
    }
    
    if(ev.target.nodeName === 'BUTTON' && ev.target.dataset.sign === 'ce'){
        
        document.getElementById('num1').innerText ="";
        document.getElementById('num2').innerText = "";
        singEl.innerText = "";
        activeNum = document.getElementById('num1');
    }
})