//Sukurti lenteles sukurimo iranki
//vartotojas iveda stulpeliu ir eiluciu skaiciu
//paspaudzia mygtuka kurti ir yra sukuriama html table su nurodytu stulpeliu ir eiluciu kiekiu
//Kiekviename langelyje turi buti irasytas tekstas: APRC

document.querySelector('.createTable button').addEventListener('click',()=>{
    const rowsNumber = parseInt(document.querySelector('.tableRows').value);
    const columnsNumber = parseInt(document.querySelector('.tableColumns').value);    
    
    for (let i = 0; i < rowsNumber; i++){
        //sukuria eilute
        const tr = document.createElement('tr');
        //table prisk96+30-+85*/iria 
        
        document.querySelector('table').appendChild(tr);
        for (let j = 0; j < columnsNumber; j++){
            //sukuria stulpeli
            const td = document.createElement('td');
            //iraso APRC i stulpeli
            td.textContent = "APRC";
            //priskiria stulpeli eilutei
            //stulpeliai priskiriami konkreciai eilutei, todel
            //nereikia naudoti querySelector
            tr.appendChild(td); 
            //stiliai stulpeliams
            td.style.borderWidth = "1px";
            td.style.borderStyle = "solid";
            td.style.borderColor = "#000";
            td.style.textAlign = "center";
        }   
    }  
})

for(const table of document.querySelectorAll('table')){
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
}