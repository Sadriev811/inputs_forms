let d = document
let box = d.querySelector('.box')
let block = d.querySelector('.block')
let cross = d.querySelector('.cross')
let b1 = d.querySelector('.blc1')
let b2 = d.querySelector('.blc2')
let b3 = d.querySelector('.blc3')
let b4 = d.querySelector('.blc4')

let c1 = d.querySelector('.c1')
let c2 = d.querySelector('.c2')
let c3 = d.querySelector('.c3')
let c4 = d.querySelector('.c4')



let input = d.querySelector('.input')
let btn = d.querySelector('.btn')
let error1 = d.querySelector('.error')
function exe (c, b) {
    c.onclick = () => {
        b.remove()
    }
}
exe(c1, b1), exe(c2, b2), exe(c3, b3), exe(c4, b4)


btn.onclick = (event) => {
    event.preventDefault()
    input.classList.remove('input_active')
        error1.classList.remove('display')
    if (!input.value == "") {
        let div = d.createElement('div')
        div.classList.toggle('block')
        box.insertAdjacentElement('beforeend', div)
        function insert (elem) {
            div.insertAdjacentElement('beforeend', elem)
        }
        let my_h3 = d.createElement('h3')
        my_h3.classList.toggle('h3')
        my_h3.innerHTML = input.value
        insert(my_h3)
        
        let clock = new Date().getSeconds()
        let p = d.createElement('p')
        p.classList.toggle('clock')
        p.innerHTML = clock
        insert(p)

        let x = d.createElement('div')
        x.classList.toggle('cross')
        x.innerHTML = '⨷'
        insert(x)

        x.onclick = (event) => {
            event.preventDefault()
            div.style.display = "none"
            p.style.display = "none"
            x.style.display = "none"
        }
        
        
    }else {
        input.classList.add('input_active')
        error1.classList.add('display')
    }
    input.value = ""
    
}

dragula([
    box
]);












// let form = d.forms.forma
// let forma = d.querySelector('form')

// forma.addEventListener("submit", (ev) => {
//     ev.preventDefault()
//     let p_text = d.createElement('h1')
//     p_text.textContent = forma[0].value

//     d.querySelector('.ap_ch').appendChild(p_text)
//     forma[0].value = ""
//     // let formData = new FormData([form])
//     // console.log(formData);
// });

// let p = d.querySelector('p');

// forma[0].addEventListener('input', (event) => {
//     p.innerHTML = forma[0].value
// });

// let inp = d.querySelector('input')

// inp.addEventListener('focus', (e) => {
//     body.style.backgroundColor = "red"
// });

// inp.addEventListener('blur', (event) => {
//     body.style.backgroundColor = "white"
// });

// // let rad = d.querySelector('input[type="radio"]')

// let div = d.querySelector('.ap)ch')

// d.body.removeChild(div)