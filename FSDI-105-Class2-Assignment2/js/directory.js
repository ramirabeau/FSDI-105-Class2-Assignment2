function display(aPet) {

    var text = "";
    var icon = "";
    var dogIcon = '<i class="fas fa-dog"></i>';
    var catIcon = '<i class="fas fa-cat"></i>';
    var birdIcon = '<i class="fas fa-crow"></i>';
    var unknown = '<i class="fas fa-question-circle"></i>';

    if (aPet.type === "Dog") {
        icon = dogIcon;
    } else if (aPet.type === "Cat") {
        icon = catIcon;
    } else if (aPet.type === "Bird") {
        icon = birdIcon;
    } else {
        icon = unknown;
    }


    /* Create the HTML text
    text = `
        <div id="${aPet.id}" class="pet">
            ${icon}
            <h2> Name: ${aPet.name} </h2>
            <p> Age: ${aPet.age} </p>
            <p> Gender: ${aPet.gender} </p>
            <p> Type: ${aPet.type} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Immunizations: ${aPet.immunizations} </p>
            <p> Sterile: ${aPet.sterile} </p>
            <p> Service: ${aPet.service} </p>
            <p> Price: ${aPet.price} </p>
            <p> Owners Name: ${aPet.ownersName} </p>
            <p> Contact Phone: ${aPet.contactPhone} </p>
            <button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button>
            

        </div>
        `;
    $('#pets').append(text);*/
}


function petTable() {
    document.getElementsByTagName('petTable').innerHTML = `List of pets: ${salon.pets.name}`;
    document.getElementsByTagName('petTable').innerHTML = `List of owners: ${salon.pets.ownersName}`;


    $('h3').html('petTable');


}

function displayTable(aPet) {
    //create the template string (`${name of the var}`)
    var tr = `
        <tr id="${aPet.id}">
            <td> Id: ${aPet.id}</td>
            <td> Name: ${aPet.name} </td>
            <td> Age: ${aPet.age} </td>
            <td> Gender: ${aPet.gender} </td>
            <td> Type: ${aPet.type} </td>
            <td> Breed: ${aPet.breed} </td>
            <td> Immunizations: ${aPet.immunizations} </td>
            <td> Sterile: ${aPet.sterile} </td>
            <td> Service: ${aPet.service} </td>
            <td> Price: ${aPet.price} </td>
            <td> Owners Name: ${aPet.ownersName} </td>
            <td> Contact Phone: ${aPet.contactPhone} </td>
            <td><button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button><td>
        </tr>`;
    $('#petTable').append(tr);

}