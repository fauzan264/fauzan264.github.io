const dataExperiences = () => {
    return {
        experiences: [],
        getExperiences() {
            fetch('assets/data/experiences.json')
                    .then(response => response.json())
                    .then(data => this.experiences = data)
        }
    }
}

const dataPortfolios = () => {
    return {
        portfolios: [],
        getPortfolios() {
            fetch('assets/data/portfolios.json')
                .then(response => response.json())
                .then(data => this.portfolios = data)
        }
    }
}

const dataAwards = () => {
    return {
        awards: [],
        getAwards() {
            fetch('assets/data/awards.json')
                .then(response => response.json())
                .then(data => this.awards = data)
        }
    }
}

const footer = () => {
    return {
        currentYear: new Date().getFullYear(),
        getFooter() {
            return `&copy; 2020 - ${this.currentYear} <a href="https://fauzan264.netlify.app" class="text-secondary" style="font-weight: bold;">Fauzan</a> using <a href="https://materializecss.com" class="text-secondary">Materialize</a>`
        }
    }
}