const url = "https://feriados-cl-api.herokuapp.com/feriados/";
let acum="";

fetch(url)
.then(Response=>Response.json())
.then(data =>{
    let tabla = document.getElementById('tabla');
for (let i=0; i < data.length; i++) {
    tabla.innerHTML +=  `<tr>
                            <td> ${data[i].title}</td>
                            <td> ${data[i].extra}</td>
                            <td> ${data[i].date}</td>
                        </tr>`;
    }
})
.catch(err=>console.log(err))