let experienceData = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            data.forEach(e => {
              document.getElementById("experience").innerHTML += cardExperience(e.image, e.company, e.position, e.period);
            });
        }
    };

xhttp.open("GET", "assets/data/experiences.json", true);
xhttp.send();
}

experienceData();

// let educationsData = () => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(xhttp.responseText);
//             data.forEach(e => {
//               document.getElementById("education").innerHTML += cardEducation(e.image, e.education, e.degree, e.major, e.period, e.thesis);
//             });
//         }
//     };

// xhttp.open("GET", "assets/data/educations.json", true);
// xhttp.send();
// }

// educationsData();

let portfoliosData = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            data.forEach(e => {
              document.getElementById("portfolio").innerHTML += cardPortfolio(e.image, e.title, e.description, e.url);
            });
        }
    };

xhttp.open("GET", "assets/data/portfolios.json", true);
xhttp.send();
}

portfoliosData();

let awardsData = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhttp.responseText);
            data.forEach(e => {
              document.getElementById("award").innerHTML += cardAward(e.image, e.publisher, e.certification, e.description, e.period, e.url);
            });
        }
    };

xhttp.open("GET", "assets/data/awards.json", true);
xhttp.send();
}

awardsData();