const OPENEDU_ENDPOINT = `https://courses.openedu.urfu.ru`;
const DEFAULT_QUERY = 1

class OpeneduService{

    async getCardAPI(){
        let url = `${OPENEDU_ENDPOINT}/api/courses/v1/courses/?page=${DEFAULT_QUERY}`;
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`OpeneduService getCardAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        let pagination = data.pagination;
        if (!pagination) {
            throw new Error(`OpeneduService getCardAPI failed, pagination not returned`);
        }
        let arr = []
        for (var i=1; i <= pagination.num_pages; i++) {
            if(response.status===200){
                let response = await fetch(`${OPENEDU_ENDPOINT}/api/courses/v1/courses/?page=${i}`)
                let data = await response.json()
                data.results.map((item) => {
                    return arr.push({
                            name: item.name,
                            start_display: item.start_display,
                            number: item.number
                    });
                });
            }
        }
        return arr
    }

}

export default new OpeneduService()