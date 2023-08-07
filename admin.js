


let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eab0c6dac6e288ceb370816455010ecd';

// function createTable(data) {   
//     let tbody = document.getElementById('table-body');
//     console.log(data);
//     data.forEach(e => {
//         let tr = document.createElement('tr');
//         console.log(e);
//         tr.innerHTML = `
//         <td>${e.id}</td>
//         <td>${e.original_language}</td>
//         <td>${e.original_title}</td>
//         <td>${e.popularity}</td>
//         <td>${e.release_date}</td>
//         <td>${e.vote_average}</td>
//         <td>
//             <button class="btn btn-primary"><a href="./index.html?id=${e.id}" class="edit">Edit</a></button>
//             &nbsp;
//             <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button>
//         </td>
//         `;
//         tbody.append(tr);
//     });
// }

// async function loadData() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data); // Check the structure of the fetched data
//         createTable(data);
//     } catch (error) {
//         console.error("Error loading data:", error);
//     }
// }


// async function deleteData(e) {
//     if(confirm("Are you Sure? You are deleting data")){
//         let res = await fetch(`${url}/${e}`, { method: "DELETE" });
//         let tbody = document.getElementById('table-body');
//         window.location.reload();
//     }
// }

// loadData();




// function createTable(data) {
//     let tbody = document.getElementById('table-body')
    
//     // Use data.results instead of data directly
//     data.results.forEach((e)  => {
//         let tr = document.createElement('tr')
//         tr.innerHTML = `
//         <td>${e.id}</td>
//         <td>${e.original_language}</td>
//         <td>${e.original_title}</td>
//         <td>${e.popularity}</td>
//         <td>${e.release_date}</td>
//         <td>${e.vote_average}</td>
//         <td>
//             <button class="btn btn-primary"><a href="./index.html?id=${e.id}" class="edit">Edit</a></button>
//             &nbsp;
//             <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button>
//         </td>
//         `
//         tbody.append(tr);
//     });
// }

// async function loadData() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         createTable(data); // Pass the data.results array to createTable
//     } catch (error) {
//         console.error("Error loading data:", error);
//     }
// }

// loadData();





function createTable(data) {
    let tbody = document.getElementById('table-body')
    
    // Use data.results instead of data directly
    data.results.forEach((e)  => {
        let tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${e.id}</td>
        <td>${e.original_language}</td>
        <td>${e.original_title}</td>
        <td>${e.popularity}</td>
        <td>${e.release_date}</td>
        <td>${e.vote_average}</td>
        <td>
            <button class="btn btn-light"><a href="./index.html?id=${e.id}" class="edit">Edit</a></button>
            &nbsp;
            <button class="btn btn-danger" onclick="deleteData(${e.id})">Delete</button>
        </td>
        `
        tbody.append(tr);
    });
}
// async function deleteData(id) {
//     console.log("Delete function called with ID:", id);
//     if (confirm("Are you sure? You are deleting data.")) {
//         try {
//             let res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eab0c6dac6e288ceb370816455010ecd`, {
//                 method: "DELETE",
//             });
//             console.log("Delete response status:", res.status);
//             // ... rest of the code
//         } catch (error) {
//             console.error("Error deleting data:", error);
//         }
//     }
// }
async function deleteData(e)
{
    if(confirm("Are you Sure? You are deleting data")){
        let res = await fetch(`${url}/${e}`,{method:"DELETE"})
        let tbody = document.getElementById('table-body')
        window.location.reload()
    }
   
    
}
async function loadData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        createTable(data); 
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

loadData();
