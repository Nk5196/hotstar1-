
     // tmdb api = 2ab02f2e92385247ab089c1a3f9cba19
    //  `https://api.themoviedb.org/3/search/movie?api_key=2ab02f2e92385247ab089c1a3f9cba19&query=${query}`
    const Img_path="https://image.tmdb.org/t/p/w1280/";

    let movies_div=document.getElementById("movies")
    let display=document.getElementById("display")
    async function  searchMovies(){
        
   
    try{
    const query = document.getElementById(`query`).value
    
    let res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ab02f2e92385247ab089c1a3f9cba19&query=${query}`)

    let data = await res.json();

    const movies =data.results;

    // console.log("data:", movies)

    appendMovies(movies)
} 
catch (err){

    console.log("err:",err);
     }
  }

  function appendMovies(data){

     display.innerHTML=null
      movies_div.innerHTML=null;
      data.forEach(function(el){
          console.log(el)
      let p= document.createElement('p')
      p.innerText =el.title;
      movies_div.append(p)   

      
      
      let poster= document.createElement("img")
      poster.setAttribute("class","poster")
      poster.src=`${Img_path}${el.poster_path}`
      
      display.append(poster)
      });


  }

 async function main(){
     let data= await searchMovies();
     if(data===undefined){
          return false;
      }
    appendMovies(data)
 }

 function debounce(func,delay){
     if(id){
         clearTimeout(id);
     }
     id = setTimeout( function(){
         func()
     } ,delay);
 }