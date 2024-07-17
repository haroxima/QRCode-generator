let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let input = document.getElementById('input');
const generateBtn = document.getElementById('button');


generateBtn.addEventListener('click', () => {
    if(input.value === '') {
        input.classList.add('error');
        setTimeout(()=> {
            input.classList.remove('error');
        },1000)
    } else{
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
        imgBox.classList.add('show-img');
    }
})