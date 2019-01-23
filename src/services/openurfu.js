
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
        // pagination.num_pages
        for (var i=1; i <= pagination.num_pages; i++) {
            let response = await fetch(`${OPENEDU_ENDPOINT}/api/courses/v1/courses/?page=${i}`)
            if(response.status===200){
                let data = await response.json()
                data.results.map((item) => {
                    return arr.push({
                            name: item.name,
                            start_display: item.start_display,
                            number: item.number,
                            id: item.id
                    });
                });
            }
        }
        return arr
    }

    async getAboutItem(item){
        let response = await fetch(`${OPENEDU_ENDPOINT}/api/courses/v1/courses/${item.id}`)
        if(response.status===200){
            let data = await response.json();
            let arr = []
            data.results.map(item_about => {
                return arr.push({
                    name: item_about.name,
                    org: item_about.org,
                    short_description: item_about.short_description,
                    start_display: item_about.start_display,
                    overview: item_about.overview,
                    number: item_about.number
                })
            })
        }
    }

    async getAboutCourseAPI(){
        let url = `${OPENEDU_ENDPOINT}/api/courses/v1/courses/?page=${DEFAULT_QUERY}`;
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`OpeneduService getAboutCourseAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        let pagination = data.pagination;
        if (!pagination) {
            throw new Error(`OpeneduService getAboutCourseAPI failed, pagination not returned`);
        }
        let arr = []
        for (var i=1; i <= pagination.num_pages; i++) {
            data.results.map(item => {
                return arr.push(this.getAboutItem(item))
            });
        }
        return arr
    }

}

export default new OpeneduService()