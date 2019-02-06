
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
                            short_description: item.short_description,
                            id: item.id
                    });
                });
            }
        }
        return arr
    }

    async getAboutItem(id){
        // let response_about = await this.getAboutCourseAPI()
        let response_about2 = await fetch(`${OPENEDU_ENDPOINT}/api/courses/v1/courses/${id}`)
        let data = await response_about2.json()
        return ({
                name: data.name,
                start_display: data.start_display,
                number: data.number,
                short_description: data.short_description,
                id: data.id,
                overview: data.overview
        });
    }


    async getOrgAPI(){
        let response = await fetch(`${OPENEDU_ENDPOINT}/api/organizations/v0/organizations/`)
        let arr = []
        if(response.status===200){
            let data = await response.json()
            data.results.map((item) => {
                return arr.push({
                    name: item.name,
                    short_name: item.short_name,
                    description: item.description,
                    logo: item.logo,
                    activate: item.activate
                })
            })
        }
        return arr
    }
    // async getAboutCourseAPI(){
    //     let url = `${OPENEDU_ENDPOINT}/api/courses/v1/courses/?page=${DEFAULT_QUERY}`;
    //     let response = await fetch(url)
    //     if (!response.ok) {
    //         throw new Error(`OpeneduService getAboutCourseAPI failed, HTTP status ${response.status}`);
    //     }
    //     let data = await response.json();
    //     let pagination = data.pagination;
    //     if (!pagination) {
    //         throw new Error(`OpeneduService getAboutCourseAPI failed, pagination not returned`);
    //     }
    //     for (var i=1; i <= pagination.num_pages; i++) {
    //         data.results.map(item => {
    //             arr_about.push(item.id)
    //         })
    //     }
    //     return arr_about
    // }

}

export default new OpeneduService()