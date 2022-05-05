
let currentPage = 1;
let totalPages;


function getUsers (page) {
    let requist = new XMLHttpRequest ();
    requist.addEventListener('load', render);
    requist.addEventListener ('error', errorRender);
  
    requist.open ('GET', 'https://reqres.in/api/users?page=' + page,);
    requist.send (); 
}

function render () {
    let response = this.responseText
    let responseData = JSON.parse(response);
    var fragment = document.createDocumentFragment ();
    console.log(responseData);


    responseData.data.forEach (item => {
        let li = document.createElement ('li');
      
        let pEmail = document.createElement ('p');
        pEmail.textContent = item.email;
        
        let imgUser = document.createElement ('img');
        imgUser.classList.add ('user-img')

        imgUser.src = item.avatar;

        fragment.appendChild(li);
        li.appendChild (imgUser);
        li.appendChild (pEmail);
    });

    document.getElementById ('ul-list').innerHTML = ' ';
    document.getElementById ('ul-list').appendChild(fragment);

    totalPages = responseData.total_pages;
    
}

function errorRender () {
    let pError = document.createElement ('p');
    pError.textContent = 'Server Error';

    document.getElementById ('api-user-email').appendChild(pError);
}

// getUsers ();
getUsers (currentPage);


document.getElementById('load-prev').addEventListener('click', function () {
    if (currentPage == 1) {
        return;
    }
    currentPage -=1;
    getUsers (currentPage);
})

document.getElementById('load-next').addEventListener('click', function () {
    if (currentPage == totalPages) {
        return;
    }
    currentPage +=1;
    getUsers (currentPage);
})

getUsers (currentPage);