let IIFE =(()=>{
  
  let setVideo = (url,id) => {
    document.getElementById(id).setAttribute("src",url);
  }

  return {
    setVideo
  }
})()

class Multimedia {
  #url
  constructor(url, inicio) {
    this.#url = url
    this.inicio = inicio
  }
  get url() {
    return this.#url
  }
  setinicio() {
    return "Este metodo es para realizar un cambio en la URL del video"
  }
}

class Reproductor extends Multimedia {
  #id
  constructor(url, id){
    super(url);
    this.#id = id;
  }

  playMultimedia(){
    IIFE.setVideo(this.url,this.#id);
  }

  setInicio(tiempo){
    let nuevaUrl = `${this.url}&amp;start=${tiempo}`
    return IIFE.setVideo(nuevaUrl,this.#id);

  }
}

const musica = new Reproductor("https://www.youtube.com/embed/3PE0oKq3enU?si=MCrTDH6dyxb8WY_B","musica");
const serie = new Reproductor("https://www.youtube.com/embed/o07u0uKkV_g?si=qc3ZMKrZ1iVMntN5","series");
const peliculas = new Reproductor("https://www.youtube.com/embed/ZgrCZVjPg9g?si=qNRCdT79QfRdn5Sr","peliculas");

musica.playMultimedia();
peliculas.playMultimedia();
serie.playMultimedia();

