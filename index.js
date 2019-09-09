// let array = [['1' ,'Nami', 'Female', '+886 111 101010', 'nami@TKI.org', true], 
//             ['2' ,'Mantria', 'Male',  '+62 812 242424', 'mantria@gmail.com', true], 
//             ['3' ,'Goodman', 'Male', '+62 813 363636', '-', true]];



// let myContacts = (array) => {

//     let result = []
//     for(let i=0;i<array.length;i++){
//         let object ={}
//         object.id = array[i][0]
//         object.name = array[i][1]
//         object.gender = array[i][2]
//         object.phoneNumber = array[i][3]
//         object.email = array[i][4]
//         object.favorite = array[i][5]
//         result.push(object)
//     }
//     return result
// }
// // myContacts(array)

// // let filterContact = (contact, filter1, filter2) => {
// //     let newContact1 = []
// //     let newContact2 = []
// //     for(let i=0;i<contact.length;i++){
// //         if(contact[i].gender === filter1){
// //             newContact1.push(contact[i])
// //         }
// //         else if(contact[i].gender === filter2){
// //             newContact2.push(contact[i])
// //         }
// //     }
// //     return newContact1
// // }

// // console.log(filterContact(myContacts(array), 'Male', 'Female'))

// // Loop object MyContact

// function contact(array){
//     for(let i=0;i<myContacts(array).length;i++){
//        let table = document.getElementById("table-body").innerHTML
//        document.getElementById("table-body").innerHTML = table + '<tr><td>' + myContacts(array)[i].id + '</td><td>'+ myContacts(array)[i].name + '</td><td>' +
//        myContacts(array)[i].gender + '</td><td>' + myContacts(array)[i].phoneNumber + '</td><td>'+ myContacts(array)[i].email + '</td></tr>'
//     }
// }
// contact(array)

// const form = document.getElementById('signup-form');
// const tableHead = document.getElementById('thead');
// let tableBody = document.getElementById('tbody');
// let adaName = document.getElementsByClassName('name');
// let addMale = document.getElementsByClassName('g-male');
// let addFemale = document.getElementsByClassName('g-female');
// let addPhone = document.getElementsByClassName('phone');
// let addEmail = document.getElementsByClassName('email');
// let submit = document.getElementsByClassName('submit');

// document.getElementById("sign-submit").onclick = function() {submitContact()};

$("#sign-submit").click (function(submitContact){
    
    let addName = document.getElementById("sign-name").value;
    let addPhone = document.getElementById("sign-phone").value;
    let addEmail = document.getElementById("sign-email").value;

    var arrContact =[]
    if(addName === '' || addPhone === '' || addEmail === ''){
        alert('Kolom harus diisi semua')
    }
    else{
        // for(let i=1;i<100;i++){  
            // if(arrContact.length === undefined || arrContact.length === null){
                
                let objectContact = {
                    addName,
                    addPhone,
                    addEmail,
                }
                let i = 1
                objectContact.addNo = i
                let checkI = JSON.parse(localStorage.getItem(i))
                
                // let contactInfo = i
                if(document.getElementById("sign-male").checked){
                    objectContact.addGender = 'Male'
                }else if(document.getElementById("sign-female").checked){ 
                    objectContact.addGender = 'Female'
                }
                arrContact.push(objectContact)
                let myData = JSON.stringify(arrContact)
                localStorage.setItem("contactInfo", myData)
                // i = 100
                i++
                // break
            // }     
            //     // else if(arrContact.length >= 1){
                //     let checkData = JSON.parse(locaStorage.getItem(i))
                //     checkData++
                //     // localStorage.getItem(i)
                //     // arrContact.push(objectContact)
                //     let myData = JSON.stringify(arrContact)
                //     localStorage.setItem("contactInfo", myData)
                // }    
                   
        // }                                                                                                                        
        
    } 
})

// $("#sign-submit").click (function(displayContact){
   
//     let tr = document.createElement('tr');
//     let tdName = document.createElement('td'); 
//     let tdAdd = document.createElement('td');
//     let tdTel = document.createElement('td');
//     let tdEmail = document.createElement('td');
//     let tdUrl = document.createElement('td');

//     tr.appendChild(tdName);
//     tr.appendChild(tdAdd);
//     tr.appendChild(tdTel);
//     tr.appendChild(tdEmail);
//     tr.appendChild(tdUrl);
// })

