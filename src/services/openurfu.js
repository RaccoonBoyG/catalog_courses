
const OPENEDU_ENDPOINT = `http://media.ls.urfu.ru:8080/api`;
const COURSES_ENDPOINT = `/courses/v1/courses/`;
const DEFAULT_QUERY = 1;
const PAGE_PARAM = `?page=`;
export const MEDIA_LS_URL = `http://media.ls.urfu.ru:8080`;

class OpeneduService{

    async getDataAPI(url) {
        let defaultUrl = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${DEFAULT_QUERY}`;
        let response = null
        if(url!=undefined){
            response = await fetch(url)
        } else {
            response = await fetch(defaultUrl)
        }
        
        if (!response.ok) {
            throw new Error(`OpeneduService getDataAPI failed, HTTP status ${response.status}`);
        }
        let data = await response.json();
        return data
    }

    async getCardAPI(){
        let data = await this.getDataAPI()
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
    async getNextPageAPI() {
        let data = await this.getDataAPI()
        let pagination = data.pagination;
        if (!pagination) {
            throw new Error(`OpeneduService getCardAPI failed, pagination not returned`);
        }
        return pagination.next
    }
    async getCardBodySizeCheck(){
        let data = await this.getDataAPI()
        let pagination = data.pagination;
        if (!pagination) {
            throw new Error(`OpeneduService getCardAPI failed, pagination not returned`);
        }
        return pagination.count
    }

    async getCardLoadMoreAPI({page}){
        let url = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${page}`;
        let data = await this.getDataAPI(url)
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
        let url = `${OPENEDU_ENDPOINT}/courses/v1/courses/${id}`;
        let data = await this.getDataAPI(url)
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
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/programs/${program}`;
        let data = await this.getDataAPI(url)
        return {
            id: data.id,
            name: data.name,
            short_name: data.short_name,
            description: data.description,
            logo: data.logo,
            active: data.active
        }
    }

    async getAboutProgramList(){
        // let response_about = await this.getAboutCourseAPI()
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/link_courses/`;
        let arr = []
        let data = await this.getDataAPI(url)
        data.results.map((item) => {
            return arr.push({
                id: item.id,
                course: item.course,
                program: item.program,
                active: item.active,
                course_id: item.course_id
            })
        })
        return arr
    }

    async getOrgAPI(){
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/organizations/`;
        let arr = []
        let data = await this.getDataAPI(url)
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
        return arr
    }

    async getProgramsAPI(){
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/programs/`;
        let arr = []
        let data = await this.getDataAPI(url)
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
        return arr
    }

    async CheckAuthAPI() {
        let url = `${OPENEDU_ENDPOINT}/user/v1/accounts`
        let arr = []
        let data = await this.getDataAPI(url)
        data.map((item) => {
            return arr.push({
                username: item.username,
                is_active: item.is_active,
                profile_image: item.profile_image.image_url_full
            })
        })
        return arr
    }

    async CheckEnrollCourseAPI(id) {
        let url = await fetch(`${OPENEDU_ENDPOINT}/enrollment/v1/enrollment`)
        let data = await this.getDataAPI(url)
        return data.map((item) => item.course_details.course_id===id ? true : false)
    }

    async CheckEnrollCourseItooAPI(id) {
        let url = await fetch(`${OPENEDU_ENDPOINT}/itoo_api/v0/enrollment/${id}`)
        let data = await this.getDataAPI(url)
        return data.map((item) => item.course_details.course_id===id ? true : false)
    }

    async ResponseStatusAPI() {
        let response = await fetch(`${OPENEDU_ENDPOINT}/user/v1/accounts`)
        return response.status
    }

}

export default new OpeneduService()
