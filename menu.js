fetch=('menu.json')
//Que hace? Esta linea inicia la carga del archivo menu.json. fetch es una funcion de JavaScript que facilita la realizacion de solucitudes de red, como obtener datos de un archivo o un edpoint de API.
//Como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de solicitud. Esta respuesta no es directamente los datos en formato JSON, sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma  
.then(Response=> Response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objetro JavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo ,json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON.
then(data=>{
    const menuContainer = document.getElementById
    ('menu-container');
    //Que hace? aqui se procesan los datos de JSON ya convertidos se obtienen una referencia el contenido del menu en el HTML mediante el getElementByID('menu-container'), y luego se itera sobre los elementos (categorias) del menu
    data.items.forEach (category =>{
        const categoryTittle = document.createElement ('h2'):
        //Que hace? aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenedor del menu/.
        categoryTittle.textContent = category.category;
        menuContainer.appendChild(categoryTittle);
    const table = document.createElement
    ('table');
    //Que hace? se crea un elemento table para cada categoria. Ademas se crea el encabezado (tableHead) con las columnas pertinentes. tablebody 
    const tableElement =<tr></tr>
    })
})