const OPENEDU_ENDPOINT = `//courses.openedu.urfu.ru/api`;
const OPENEDU_ENDPOINT2 = `https://courses.openedu.urfu.ru/api`;
const COURSES_ENDPOINT = `/courses/v1/courses/`;
const DEFAULT_QUERY = 1;
const PAGE_PARAM = `?page=`;
const PAGE_SIZE = `?page_size=100`;
export const MEDIA_LS_URL = `//courses.openedu.urfu.ru`;

// const OPENEDU_ENDPOINT = `http://10.16.208.164/api`;
// const OPENEDU_ENDPOINT2 = `http://10.16.208.164/api`;
// const COURSES_ENDPOINT = `/courses/v1/courses/`;
// const DEFAULT_QUERY = 1;
// const PAGE_PARAM = `?page=`;
// const PAGE_SIZE = `?page_size=100`;
// export const MEDIA_LS_URL = `http://10.16.208.164`;

class OpeneduService {
  async getDataAPI(url) {
    let defaultUrl = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${DEFAULT_QUERY}`;
    let response = null;
    if (url !== undefined) {
      response = await fetch(url);
    } else {
      response = await fetch(defaultUrl);
    }

    if (!response.ok) {
      throw new Error(
        `OpeneduService getDataAPI failed, HTTP status ${response.status}`
      );
    }
    let data = await response.json();
    return data;
  }

  async getCardAPI() {
    let data = await this.getDataAPI();
    let arr = [];
    data.results.map(item => {
      return arr.push({
        name: item.name,
        start_display: item.start_display,
        number: item.number,
        short_description: item.short_description,
        id: item.id,
        image: item.media.image.small
      });
    });
    return arr;
  }
  async getNextPageAPI() {
    let data = await this.getDataAPI();
    let pagination = data.pagination;
    if (!pagination) {
      throw new Error(
        `OpeneduService getCardAPI failed, pagination not returned`
      );
    }
    return pagination.next;
  }
  async getCardBodySizeCheck() {
    let data = await this.getDataAPI();
    let pagination = data.pagination;
    if (!pagination) {
      throw new Error(
        `OpeneduService getCardAPI failed, pagination not returned`
      );
    }
    return pagination.count;
  }

  async getCardLoadMoreAPI({ page }) {
    let url = `${OPENEDU_ENDPOINT}${COURSES_ENDPOINT}${PAGE_PARAM}${page}`;
    let data = await this.getDataAPI(url);
    let pagination = data.pagination;
    if (!pagination) {
      throw new Error(
        `OpeneduService getCardAPI failed, pagination not returned`
      );
    }
    let arr = [];

    if (page <= pagination.num_pages) {
      data.results.map(item => {
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
    return arr;
  }

  async getAllCardApi() {
    // https://courses.openedu.urfu.ru/api/courses/v1/courses/?page_size=100
    let url = `${OPENEDU_ENDPOINT}/courses/v1/courses/${PAGE_SIZE}`;
    let data = await this.getDataAPI(url);
    let arr = [];
    data.results.map(item => {
      return arr.push({
        name: item.name,
        start_display: item.start_display,
        number: item.number,
        short_description: item.short_description,
        id: item.id,
        image: item.media.image.small
      });
    });
    return arr;
  }

  async getAboutItem(id) {
    // let response_about = await this.getAboutCourseAPI()
    let url = `${OPENEDU_ENDPOINT}/courses/v1/courses/${id}/`;
    let data = await this.getDataAPI(url);
    return {
      name: data.name,
      start_display: data.start_display,
      number: data.number,
      short_description: data.short_description,
      id: data.id,
      overview: data.overview
    };
  }

  async getAboutOrgItem(organizations) {
    // let response_about = await this.getAboutCourseAPI()
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/organizations/${organizations}/`;
    let data = await this.getDataAPI(url);
    return {
      id: data.id,
      name: data.title,
      short_name: data.short_name,
      slug: data.slug,
      description: data.description,
      logo: data.logo,
      image_background: data.image_background,
      active: data.active
    };
  }

  async getAboutProgramList(program) {
    // let response_about = await this.getAboutCourseAPI()
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/link_courses_program/${program}/`;
    let data = await this.getDataAPI(url);
    return {
      courses: data.courses,
      org_slug: data.slug,
      active: data.active
    };
  }

  async getOrgAPI() {
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/organizations/`;
    let arr = [];
    let data = await this.getDataAPI(url);
    data.results.map(item => {
      return arr.push({
        id: item.id,
        name: item.title,
        short_name: item.short_name,
        slug: item.slug,
        description: item.description,
        image_background: item.image_background,
        logo: item.logo,
        active: item.active
      });
    });
    return arr;
  }

  async getAboutOrgList(slug) {
    // let response_about = await this.getAboutCourseAPI()
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/link_courses_org/${slug}/`;
    let data = await this.getDataAPI(url);
    return {
      courses: data.courses,
      org_slug: data.slug,
      active: data.active
    };
  }

  async getAboutProgramItem(program) {
    // let response_about = await this.getAboutCourseAPI()
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/programs/${program}/`;
    let data = await this.getDataAPI(url);
    return {
      id: data.id,
      name: data.title,
      short_name: data.short_name,
      slug: data.slug,
      description: data.description,
      image_background: data.image_background,
      logo: data.logo,
      active: data.active,
      content: data.content
    };
  }

  async getProgramsAPI() {
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/programs/`;
    let arr = [];
    let data = await this.getDataAPI(url);
    data.results.map(item => {
      return arr.push({
        id: item.id,
        name: item.title,
        project_slug: item.project_slug,
        owner_slug: item.owner_slug,
        short_name: item.short_name,
        slug_program: item.slug,
        description: item.description,
        image_background: item.image_background,
        logo: item.logo,
        active: item.active
      });
    });
    return arr;
  }

  async getProjectsAPI() {
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/projects/`;
    let arr = [];
    let data = await this.getDataAPI(url);
    data.results.map(item => {
      return arr.push({
        id: item.id,
        name: item.title,
        short_name: item.short_name,
        slug_project: item.slug,
        description: item.description,
        image_background: item.image_background,
        logo: item.logo,
        active: item.active,
        content: item.content
      });
    });
    return arr;
  }

  async CheckAuthAPI() {
    let url = `${OPENEDU_ENDPOINT2}/user/v1/accounts`;
    let arr = [];
    let data = await this.getDataAPI(url);
    data.map(item => {
      return arr.push({
        username: item.username,
        is_active: item.is_active,
        profile_image: item.profile_image.image_url_full
      });
    });
    return arr;
  }

  async CheckEnrollCourseAPI(username, id) {
    let url = `${OPENEDU_ENDPOINT}/enrollment/v1/enrollment/${username},${id}`;
    let arr = [];
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `OpeneduService getDataAPI failed, HTTP status ${response.status}`
      );
    }
    let data = null;
    try {
      data = await response.json();
    } catch {
      // console.log(data.course_details.course_modes.forEach((item, i) => item));
      data = {};
    }
    if (Object.keys(data).length === 0) {
      arr.push({
        is_active: false
      });
    } else if (Object.keys(data).length > 0) {
      arr.push({
        username: data.user,
        user_mode: data.mode,
        is_active: data.is_active,
        course_id: data.course_details.course_id,
        course_modes_slug: data.course_details.course_modes.find(i => i.slug)
          .slug,
        course_modes_currency: data.course_details.course_modes.find(
          i => i.currency
        ).currency,
        course_modes_min_price: data.course_details.course_modes[0].min_price,
        course_modes_suggested_prices:
          data.course_details.course_modes[0].suggested_prices
      });
    }
    return arr;

    // return data.course_details.map(item => {
    //   return arr.push({
    //     username: data.user,
    //     user_mode: data.mode,
    //     is_subscribe: data.is_active,
    //     course_id: item.course_id,
    //     course_modes_slug: item.find(i => i.slug).slug,
    //     course_modes_currency: item.find(i => i.currency).currency,
    //     course_modes_min_price: item.find(i => i.min_price).min_price,
    //     course_modes_suggested_prices: item.find(i => i.suggested_prices)
    //       .suggested_prices
    //   });
    // });

    // return data.map(item =>
    //   item.course_details.course_id === id ? true : false
    // );
  }

  async CheckEnrollCourseItooAPI(id) {
    let url = `${OPENEDU_ENDPOINT}/itoo_api/v0/enrollment/${id}/`;
    let data = await this.getDataAPI(url);
    return data.map(item =>
      item.course_details.course_id === id ? true : false
    );
  }

  async ResponseStatusAPI() {
    let response = await fetch(`${OPENEDU_ENDPOINT}/user/v1/accounts`);
    return response.status;
  }
}

export default new OpeneduService();
