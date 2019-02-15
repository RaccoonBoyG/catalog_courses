
const OPENEDU_ENDPOINT = `https://courses.openedu.urfu.ru/api`;
const COURSES_ENDPOINT = `/courses/v1/courses/`;
const DEFAULT_QUERY = 1;
const PAGE_PARAM = `?page=`;

class OpeneduService{

    async getCardAPI(){
        let url = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${DEFAULT_QUERY}`;
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`OpeneduService getCardAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        let arr = []
        data.results.map((item) => {
            return arr.push({
                    name: item.name,
                    start_display: item.start_display,
                    number: item.number,
                    short_description: item.short_description,
                    id: item.id,
                    image: item.media.image.small
            });
        });
        return arr
    }

    async getCardBodySizeCheck(){
        let url = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${DEFAULT_QUERY}`;
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`OpeneduService getCardAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        let pagination = data.pagination;
        if (!pagination) {
            throw new Error(`OpeneduService getCardAPI failed, pagination not returned`);
        }
        return pagination.count
    }

    async getCardLoadMoreAPI({page}){
        let url = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${page}`;
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

        if(page <= pagination.num_pages ){
            data.results.map((item) => {
                return arr.push({
                        name: item.name,
                        start_display: item.start_display,
                        number: item.number,
                        short_description: item.short_description,
                        id: item.id,
                        image: item.media.image.small
                });
            });
        }
        return arr
    }

    async getAboutItem(id){
        // let response_about = await this.getAboutCourseAPI()
        let response = await fetch(`${OPENEDU_ENDPOINT}/courses/v1/courses/${id}`)
        let data = await response.json()
        return ({
                name: data.name,
                start_display: data.start_display,
                number: data.number,
                short_description: data.short_description,
                id: data.id,
                overview: data.overview
        });
    }


    async getAboutProgramItem(program){
        // let response_about = await this.getAboutCourseAPI()
        let response = await fetch(`${OPENEDU_ENDPOINT}/itoo_api/v0/programs/${program}`)
        let arr = []
        if(response.status===200){
            let data = await response.json()
            data.results.map((item) => {
                return arr.push({
                    name: item.name,
                    short_name: item.short_name,
                    description: item.description,
                    logo: item.logo,
                    active: item.active
                })
            })
        }
    }

    async getOrgAPI(){
        let response = await fetch(`${OPENEDU_ENDPOINT}/itoo_api/v0/organizations/`)
        let arr = []
        if(response.status===200){
            let data = await response.json()
            data.results.map((item) => {
                return arr.push({
                    id: item.id,
                    name: item.name,
                    short_name: item.short_name,
                    description: item.description,
                    logo: item.logo,
                    active: item.active
                })
            })
        }
        return arr
    }

    async getProgramsAPI(){
        let response = await fetch(`${OPENEDU_ENDPOINT}/itoo_api/v0/programs/`)
        let arr = []
        if(response.status===200){
            let data = await response.json()
            data.results.map((item) => {
                return arr.push({
                    id: item.id,
                    name: item.name,
                    short_name: item.short_name,
                    description: item.description,
                    logo: item.logo,
                    active: item.active
                })
            })
        }
        return arr
    }

}

export default new OpeneduService()