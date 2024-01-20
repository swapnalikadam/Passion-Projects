fetch("https://fakestoreapi.com/products").then((data)=>{
    //data is in json format - converted it to object
    return data.json();
}).then((objectData)=>{
    let tableData ="";
    objectData.map((values)=>{
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
        </tr>`;
    });
    //Adding mapped data to the table body - by fetching table by it's ID from index.html("table_body")
    document.getElementById("table_body").innerHTML = tableData
}).catch((err)=>{
    console.log(err);
})