
function getUsers () {
    let requist = new XMLHttpRequest ();
    requist.addEventListener('load', render);
    requist.addEventListener ('error', errorRender);
  
    requist.open ('GET', 'https://reqres.in/api/users?page=2');
    requist.send (); 
}

function render () {
    let response = this.responseText
    let responseData = JSON.parse(response);
    console.log(responseData);

    let ul = document.createElement ('ul');
    ul.classList.add ('ul-list')
    responseData.data.forEach (item => {
        let li = document.createElement ('li');
      
        let pEmail = document.createElement ('p');
        pEmail.textContent = item.email;
        
        let imgUser = document.createElement ('img');
        imgUser.classList.add ('user-img')

        imgUser.src = item.avatar;

        ul.appendChild (li);
        li.appendChild (imgUser);
        li.appendChild (pEmail);
    });

    document.getElementById ('api-user-email').appendChild(ul);
    
}

function errorRender () {
    let pError = document.createElement ('p');
    pError.textContent = 'Server Error';

    document.getElementById ('api-user-email').appendChild(pError);
}

getUsers ();
document.getElementsById ('load-prev').addEventListener ('click', function () {
    
})

document.getElementsById ('load-next').addEventListener ('click', function () {
    
})
