let h1 = document.querySelector('h1');
let arr1 = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

function handleClicks(){
    switch(h1.innerText){
        case arr1[0]: 
            h1.innerHTML = arr1[1];
            break;
        case arr1[1]:
            h1.innerHTML = arr1[2];
            break;
        case arr1[2]:
            h1.innerHTML = arr1[3];
            break;
        default: 
            h1.innerHTML = arr1[0];
    };
};

h1.addEventListener('click',handleClicks);