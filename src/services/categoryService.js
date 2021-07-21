import sanityClient from "../client.js";

class categoryService {
  
  async getAllCategory() {
    return sanityClient
      .fetch(
        `*[_type == "category"]{
        _id,
        _type,
        title,
      }`)
      .then((data) => {return data })
      .catch(console.error);
  }

}
export default categoryService;
