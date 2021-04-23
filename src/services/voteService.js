export default class VoteService{
    constructor(){
        this._apiBase = 'https://api.thecatapi.com/v1';
    }
    
    postVote = async (id, value) => {
        const res = await fetch(`${this._apiBase}/votes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "image_id": id,
                "sub_id": "user-19003",
                "value": value
            }
        })
        console.log(res);
    }
    getVote = async (url) => {
        const res = await fetch(`${this._apiBase}/votes`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        
        return await res.json();
    }
}
