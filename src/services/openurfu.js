
const OPENEDU_ENDPOINT = `//courses.openedu.urfu.ru/api`;
const COURSES_ENDPOINT = `/courses/v1/courses/`;
const DEFAULT_QUERY = 1;
const PAGE_PARAM = `?page=`;
export const MEDIA_LS_URL = `//courses.openedu.urfu.ru`;

class OpeneduService{

    async getDataAPI(url) {
        let defaultUrl = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${DEFAULT_QUERY}`;
        let response = null
        if(url!==undefined){
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
        let url = `${OPENEDU_ENDPOINT}/courses/v1/courses/${id}/`;
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
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/programs/${program}/`;
        let data = await this.getDataAPI(url)
        return {
            id: data.id,
            name: data.name,
            short_name: data.short_name,
            slug: data.slug,
            description: data.description,
            image_background: data.image_background,
            logo: data.logo,
            active: data.active
        }
    }

    async getAboutOrgItem(organizations){
        // let response_about = await this.getAboutCourseAPI()
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/organizations/${organizations}/`;
        let data = await this.getDataAPI(url)
        return {
            id: data.id,
            name: data.name,
            short_name: data.short_name,
            slug: data.slug,
            description: data.description,
            logo: data.logo,
            image_background: data.image_background,
            active: data.active
        }
    }

    async getAboutProgramList(program){
        // let response_about = await this.getAboutCourseAPI()
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/link_courses_program/${program}/`;
        let data = await this.getDataAPI(url)
        return {
            courses: data.courses,
            org_slug: data.slug,
            active: data.active,
        }
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
                slug: item.slug,
                description: item.description,
                image_background: item.image_background,
                logo: item.logo,
                active: item.active
            })
        })
        return arr
    }

    async getAboutOrgList(slug){
        // let response_about = await this.getAboutCourseAPI()
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/link_courses_org/${slug}/`;
        let data = await this.getDataAPI(url)
        return {
            courses: data.courses,
            org_slug: data.slug,
            active: data.active,
        }
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
                slug_program: item.slug,
                description: item.description,
                image_background: item.image_background,
                logo: item.logo,
                active: item.active
            })
        })
        return arr
    }

    async CheckAuthAPI() {
        let url = `${OPENEDU_ENDPOINT}/user/v1/accounts/`
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
        let url = `${OPENEDU_ENDPOINT}/enrollment/v1/enrollment`
        let data = await this.getDataAPI(url)
        return data.map((item) => item.course_details.course_id===id ? true : false)
    }

    async CheckEnrollCourseItooAPI(id) {
        let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/enrollment/${id}/`
        let data = await this.getDataAPI(url)
        return data.map((item) => item.course_details.course_id===id ? true : false)
    }

    async ResponseStatusAPI() {
        let response = await fetch(`${OPENEDU_ENDPOINT}/user/v1/accounts`)
        return response.status
    }

}

export default new OpeneduService()
