import sanityClient from "../client.js";

class blogService {
  
  async getAllPostData() {
    return sanityClient
      .fetch(
        `*[_type == "post"]{
        _id,
        title,
        slug,
        mainImage{
            asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        publishedAt,
        "categories": categories[]->title,
        "authorImage": author->image,
        'comments': *[_type == "comment" && post._ref == ^._id]{
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
      }`)
      .then((data) => { return data })
      .catch(console.error);
  }

  async getBlogBySlug(slug) {
    return sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug]{
          _id,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        publishedAt,
        "categories": categories[]->title,
        'comments': *[_type == "comment" && post._ref == ^._id]{
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
       }`,
        { slug }
      )
      .then((data) => { return data[0] })
      .catch(console.error);
  }

}
export default blogService;
