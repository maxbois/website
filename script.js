const apikey="api_key=eab0c6dac6e288ceb370816455010ecd"
const baseurl="https://api.themoviedb.org/3"
const serurl= baseurl+"/discover/movie?sort_by=popularity.desc&"+apikey;
const imgurl='https://image.tmdb.org/t/p/w500';
const searchurl='https://api.themoviedb.org/3/search/movie?api_key=eab0c6dac6e288ceb370816455010ecd';

const genres= 
     [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  

const main=document.getElementById('main');
const form=document.getElementById('form');
const search= document.getElementById('search');
const tagsel=document.getElementById('tags');




setGenre();
var selectedGenre=[]
function setGenre(){
     tagsel.innerHTML='';
     genres.forEach(genre=>{
        const t=document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText=genre.name;
        t.addEventListener('click',()=>{
            if(selectedGenre.length==0){
                selectedGenre.push(genre.id);
            }
            else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id,idx)=>{
                        if(id== genre.id){
                            selectedGenre.slice(idx,1)
                        }
                        
                    })
                }
                else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre);
            getMovies(serurl+'&with_genres='+encodeURI(selectedGenre.join(',')))
            highlightSelection();
        })
        tagsel.append(t);
     })

}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    clearBtn();
    if(selectedGenre.length !=0){
        selectedGenre.forEach(id =>{
            let highlightTag= document.getElementById(id);
            highlightTag.classList.add('highlight');
        })
    }
}

function clearBtn(){
    let clearBtn=document.getElementById('clear');
    if (clearBtn){
       clearBtn.classList.add('highlight');
    }
    else{
    let clear = document.createElement('div');
    clear.classList.add('tag','highlight');
    clear.id='clear';
    clear.innerText='clear X';
    clear.addEventListener('click' , () => {
        selectedGenre=[];
        setGenre();
        getMovies(serurl);
    })
    tagsel.append(clear);
    }
}
getMovies(serurl);
function getMovies(url){
    fetch(url)
    .then(res=> res.json()).then (data => {
        
        console.log(data.results);
        if(data.results.length!=0){
            showMovies(data.results);
        }
        else{
            main.innerHTML='<h1> NO RESULTS FOUND </h1>';
        }
        
    })
}

function showMovies(data) {
  main.innerHTML = '';

  data.forEach(movie => {
      const {title, poster_path, vote_average, overview, id} = movie;
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML = `
          
      <img src="${imgurl+poster_path}" alt="${title}">
        <div class="movie-info">
              <h3>${title}</h3>
              <span class="${getcolor(vote_average)}">${vote_average}</span>
          </div>

          <div class="overview">

              <h3>Overview</h3>
              ${overview}
              
          </div>
      
      `

      main.appendChild(movieEl);

   
  })
}

function getcolor(vote){
    if (vote>8)
    {
        return "green";
    }
    else if(vote>=5){
        return "orange";
    }
    else{
        return "red";
    }
    
}

form .addEventListener('submit',(e)=>{
    e.preventDefault();
    const searchTerm= search.value;
    if(searchTerm){
        getMovies(searchurl+'&query='+searchTerm);
    }else{
        getMovies(serurl);
    }
})

