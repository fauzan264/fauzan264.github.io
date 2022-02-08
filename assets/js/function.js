let cardExperience = (image, company, position, period) => {
    let dataImage;
    dataImage = image !== "" ? `<img src="${image}" style="width: 100px">` : '<span class="material-icons text-primary" style="width: 100px">work</span>';
    return `<div class="col s12 m12">
                <div class="card horizontal z-depth-3 bg-light">
                    <div class="card-stacked">
                        <div class="card-content">
                            ${dataImage}
                            <span class="card-title grey-text text-darken-4">${company}: ${position}</span>
                            <p>${period}</p>
                        </div>
                    </div>
                </div>
            </div>`
};

let cardEducation = (image, education, degree, major, period, thesis) => {
    let dataThesis = "";
    if (thesis !== "") {
        dataThesis = `<blockquote>
                        Judul Skripsi: <a href="${thesis.url}" target="_blank" class="text-red-light" rel="noopener noreferrer">${thesis.name}</a>
                     </blockquote>`
    }

    return `<div class="col s12 m12">
                <div class="card horizontal z-depth-3 bg-light">
                    <div class="card-stacked">
                        <div class="card-content">
                            <img src="${image}" style="width: 100px">
                            <span class="card-title grey-text text-darken-4">${education}: ${degree}, ${major}</span>
                            <p>${period}</p>
                            ${dataThesis}
                        </div>
                    </div>
                </div>
            </div>`
};

let cardPortfolio = (image, title, description, url) => {

    return `<div class="col s12 m6 l4">
                <div class="card sticky-action z-depth-3">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${image}" alt="${title}" style="height: 200px"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator text-primary">${title}<i class="material-icons right">more_vert</i></span>
                    </div>
                    <div class="card-action">
                        <a href="${url}" class="waves-effect waves-light btn-small bg-primary"><i class="material-icons right">send</i>Detail</a>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                        <p>${description}</p>
                    </div>
                </div>
            </div>`
};

let cardAward = (image, publisher, certification, description, period, url) => {
    return `<div class="col s12 m12">
                <div class="card horizontal z-depth-3 bg-light">
                    <div class="card-stacked">
                        <div class="card-content">
                            <img src="${image}" alt="${publisher}" style="width: 100px">
                            <span class="card-title grey-text text-darken-4">${publisher}: ${certification}</span>
                            <p>${period}</p>
                            <blockquote>
                                ${description}
                            </blockquote>
                        </div>
                        <div class="card-action">
                            <a href="${url}" class="waves-effect waves-light btn-small right bg-primary" target="_blank" rel="noopener noreferrer"><i class="material-icons right">send</i>Sertifikat</a>
                        </div>
                    </div>
                </div>
            </div>`;
};