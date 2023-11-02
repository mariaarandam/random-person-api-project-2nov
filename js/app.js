// Tu código aquí
setInterval(getRandomPerson, 5000);

async function getRandomPerson(){
    const infoPerson = await fetch("https://randomuser.me/api/");
    console.log("info", infoPerson);
    const randomPerson = await infoPerson.json();
    console.log("Persona random", randomPerson);


    document.querySelector("#photo").src = randomPerson.results[0].picture.large;
        console.log(randomPerson.results[0].picture.large);    

    document.querySelector("#first").textContent = randomPerson.results[0].name.first;
        console.log(randomPerson.results[0].name.first);

    document.querySelector("#last").textContent = randomPerson.results[0].name.last;
        console.log(randomPerson.results[0].name.last);

    document.querySelector("#country").textContent = randomPerson.results[0].location.country;
        console.log(randomPerson.results[0].location.country);

    document.querySelector("#phone").textContent = randomPerson.results[0].phone;
        console.log(randomPerson.results[0].phone);

    document.querySelector("#email").textContent = randomPerson.results[0].email;
        console.log(randomPerson.results[0].email);
};

getRandomPerson();




