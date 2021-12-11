const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

const ul1 = document.getElementById('ul1')
const ul2 = document.getElementById('ul2')
const ul3 = document.getElementById('ul3')

function asnc (url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(Response => Response.json())
            .then(retResponse => {
                if (retResponse.code === 200){

                    resolve(retResponse);
                } else {
                    throw 'Erroe Message ' + retResponse.code;
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

btn1.addEventListener('click', function(event){

    asnc('https://fakerapi.it/api/v1/books?_quantity=5')  
    .then(response => {
     
        const ul = document.querySelector('ul');
        ul.textContent = "";
        response.data.forEach(item =>{
            const li = document.createElement('li')
            li.textContent = item.author;
            ul.appendChild(li)
          
           
        })
        
    })
    .catch(err => console.log('error', err));
})


btn2.addEventListener('click', function(event){

    asnc('https://fakerapi.it/api/v1/persons?_quantity=5&_gender=male&_birthday_start=2005-01-01')
    .then(respon => {

        const ul = document.querySelector('#ul2');
        ul2.textContent = "";
        respon.data.forEach(item =>{
            const li = document.createElement('li')
            li.textContent = item.firstname;
            ul2.appendChild(li)
          
           
        })
        
    })
    .catch(err => console.log('error', err));
})

btn3.addEventListener('click', function(event){

    asnc('https://fakerapi.it/api/v1/images?_quantity=5&_type=kittens&_height=300')
    .then(respon => {

        const ul = document.querySelector('#ul2');
        ul3.textContent = "";
        respon.data.forEach(item =>{
            const li = document.createElement('li')
            li.textContent = item.title;
            ul3.appendChild(li)
          
           
        })
        
    })
    .catch(err => console.log('error', err));
})