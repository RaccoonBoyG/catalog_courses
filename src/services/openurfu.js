const OPENEDU_ENDPOINT = `https://courses.openedu.urfu.ru`;

class OpeneduService{
    async getCardAPI(){
        let url = `${OPENEDU_ENDPOINT}/api/courses/v1/courses/`;
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`OpeneduService getCardAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        let results = data.results;
        if (!results) {
            throw new Error(`OpeneduService getCardAPI failed, results not returned`);
        }
        return results.map((item)=>{
            return {
                name: item.name,
                start_display: item.start_display,
                number: item.number
            }
        });
    }

}

export default new OpeneduService()