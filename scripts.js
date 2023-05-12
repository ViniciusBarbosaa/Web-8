let sugestaoes = [
    'Google',
    'YouTube',
    'Faceboov',
    'Faceboov',
    'Facebgov',
    'Facebaov',
    'Facebsov',
    'Facebjov',
    'Facebook',
    'Linkdin',
    'Instagram'
]

const searchbar = document.querySelector(".search-bar")
const searchbarinput = searchbar.querySelector("input")
const searchbarboxComplete = searchbar.querySelector(".boxComplete")

searchbarinput.onkeyup = (e) =>{
    let userData = e.target.value
    let emptyArray = []

    if(userData){ 
        emptyArray = sugestaoes.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        })
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>'
        })
        console.log(emptyArray)
        searchbar.classList.add('active')
    }else{

    }
    showSugestoes(emptyArray)
}

function showSugestoes(list){
    let listdata
    if(list.length == 0 && searchbarinput.value != ''){
        userVal = searchbarinput.value
        listdata = '<li>' + userVal + '</li>'
    }else if (list.length > 0){
        listdata = list.join('')
    }
    else{
        searchbar.classList.remove('active')
    }
   searchbarboxComplete.innerHTML = listdata
    
}