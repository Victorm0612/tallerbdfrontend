console.log('holaaa');

var formulario = document.getElementById('contact');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  let datos = new FormData(formulario);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      alert(JSON.stringify(data.RES));
    });
});

var contenido = document.querySelector('#tablacontenido')

function traer(){
  fetch('/basedatos/consultatotalpacientes')
    .then(res => res.json())
    .then(datos => {
      tabla(datos)
    })
}

function tabla(datos){
  contenido.innerHTML=''
  for(let valor of datos){
    contenido.innerHTML +=`
    <tr>
      <th scope="row">${valor.id}</th>
      <td>${valor.nombre}</td>
      <td>${valor.apellido}</td>
      <td>${valor.numid}</td>
    </tr>
    `
  }
}

var formulario1 = document.getElementById('contact1');
formulario1.addEventListener('submit', function (e) {
  e.preventDefault();

  let datos = new FormData(formulario1);
  let llavepaciente = datos.get('id');
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');
  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: new URLSearchParams({
      'id': llavepaciente,
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      alert(JSON.stringify(data.RES));
    });
});

var formulario2 = document.getElementById('contact2');
formulario2.addEventListener('submit', function (e) {
  e.preventDefault();
  let datos = new FormData(formulario2);
  let llavepaciente = datos.get('id');
  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'id': llavepaciente
    }),
  }

  fetch('/basedatos/borrarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      alert(JSON.stringify(data.RES));
    });
});