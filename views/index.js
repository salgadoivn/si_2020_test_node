var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:7txAM7jiyQrkIfC5@cluster0-e4jcm.mongodb.net/libreria?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
// tu código aquí
 var lib = Libro({
    titulo: "Curso de programación",
    autor: {
      apellido: "Arturo",
      nombre: "Montejo Raez"
    },
    isbn: 9788441541160
  });

  lib.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });

}

function nuevoslibros() {

  var libros=[
    { titulo: "Microsoft Visual C#. Interfaces Graficas Y Aplicaciones Para Internet Con Wpf Wcf Y Silverlight",autor: {nombre: "Francisco Javier", apellido: "Ceballos Sierra"},isbn: 9786077075561},
    { titulo: "Aprenda A Programar Con Python 3",autor: {nombre: "Zed A.", apellido: "Shaw" },isbn:9788441539419},
    { titulo: "Access 97 En 4 Dias. Guia Practica Completa",autor: {nombre: "Sanz", apellido: "Drudi" },isbn: 9788480883207},
    { titulo: "Curso De Desarrollo Web. Html Css Y Javascript",autor: {nombre: "Mario", apellido: "Rubiales Gomez" },isbn: 9788441539396},
    { titulo: "Internet Para Docentes",autor: {nombre: "Luis", apellido: "Angulo Aguirre"},isbn: 9786123040628},
    { titulo: "Tic En La Educación",autor: {nombre: "Luis", apellido: "Angulo Aguirre"},isbn: 9786123045456},
    { titulo: "Blockchain. Fundamentos De La Cadena De Bloques",autor: {nombre: "Maria Isabel", apellido: "Rojo"},isbn: 9788499647715},
    { titulo: "Informatica Forense. Introduccion",autor: {nombre: "Francisco", apellido: "Lazaro Dominguez"},isbn: 9789587621136},
    { titulo: "Hacking & Cracking",autor: {nombre: "Luis", apellido: "Angulo Aguirre"},isbn: 9786123045654},

  ];


  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function buscarByisbn(isbn){
  Libro.find({isbn:isbn}, (err,data)=>{
    console.log(data);
  });
}

function modificarTituloByisbn(isbn, nuevoTitulo){
  Libro.findOneAndUpdate({isbn:isbn},
    {'titulo':nuevoTitulo},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });

}

function main() {
  //nuevoLibro();
  //nuevoslibros();
  //modificarTituloByisbn(9788441539419,"Programación con Python");
  buscarByisbn(9789587621136);
}

main();    // ejecutamos main
