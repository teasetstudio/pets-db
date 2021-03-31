export default class CatsService {
    constructor(){
        this._apiBase = 'https://api.thecatapi.com/v1';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json();
    }
    getCats = async () => {
        const res = await this.getResource(`/breeds`);
        return res.filter(({image})=>image && image.url).map(this._tranformCat);
    }
    getRandomImage = async () => {
        const res = await this.getResource(`/images/search?api_key=8a9414ac-a83a-45b0-9b28-d40a3120928c`);
        return res[0].url;
    }
    _tranformCat (cat) {
        return {
            id: cat.id,
            name: cat.name,
            image: cat.image.url,
            origin: cat.origin,
            weight: cat.weight.metric,
            adaptability: cat.adaptability,
            affection: cat.affection_level,
            child_friendly: cat.child_friendly,
            dog_friendly: cat.dog_friendly,
            grooming: cat.grooming,
            energy: cat.energy_level,
            health_issues: cat.health_issues,
            life_span: cat.life_span,
            intelligence: cat.intelligence,
            social_needs: cat.social_needs,
            shedding_level: cat.shedding_level,
            temperament: cat.temperament,
            wiki: cat.wikipedia_url,
            vetstreet: cat.vetstreet_url,
            cfa: cat.cfa_url,
            country_code: cat.country_code
        }
    }
}