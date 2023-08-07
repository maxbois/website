let form = document.forms["create"];
let url = 'https://64cd007abb31a268409a3d5f.mockapi.io/userdata';
let urlParams = new URLSearchParams(window.location.search);
let id=urlParams.get('id');




async function getValues(event)
{
    event.preventDefault();

    if(form.firstname.value && form.lastname.value && form.email.value && form.password.value && form.phonenumber.value)
    {
        let student = {
            firstname:form.firstname.value,
            lastname:form.lastname.value,
            email:form.email.value,
            password:form.password.value,
            phonenumber:form.phonenumber.value,
            status:true
        }


       let res = await fetch(`${url}/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
              },
            method:'PUT',
            body:JSON.stringify(student)});
            let data = res.json()

            window.location.href = '/admin.html'
    }
    else
    {
        alert("All Fields are required")
    }
}

form.addEventListener('submit',getValues)



// let urlParams = new URLSearchParams(window.location.admin)
// let id = urlParams.get('id')
// async function getData(){
//     if(id || id ===0)
//     {
//         let res = await fetch(`${url}/${id}`)
//         let data = await res.json()

//         form.firstname.value = data.firstname
//         form.lastname.value = data.lastname
//         form.email.value = data.email
//         form.phonenumber.value = data.phonenumber
//         form.role.value=data.role

//     }
//     else
//     {
//         window.location.href = '/'
//     }

// }
// getData()