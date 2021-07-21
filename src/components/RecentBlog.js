import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import Moment from 'moment';
import imageUrlBuilder from "@sanity/image-url";
import blogService from './../services/blogService';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function RecentBlog() {

  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
      new blogService().getAllPostData().then(data => {
        setAllPosts(data)
      });
  }, []);

  return (
    <>
    <div className="container mt-4" data-aos="clogo" data-aos-once="true" data-aos-duration="1200">
      <div className="row pb-5">
        <h2>Recent Blog</h2>
        {allPostsData && allPostsData.map((post, index) => (
        <div className="col-sm-4" key={index}>
                <div className="entry2">
                  <div className="recentblogimg">
                      <Link to={"/blog-detail/" + post.slug.current}><img src={post.mainImage.asset.url} alt="Image1" className="img-fluid rounded"/></Link>
                  </div>
                      <div className="excerpt">
                      <span className="post-category mb-3">{post.categories}</span>
                      <h2><Link to={"/blog-detail/" + post.slug.current}>{post.title}</Link></h2>
                      <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure"><img src={urlFor(post.authorImage).url()} alt="Image2" className="img-fluid"/></figure>
                      <span className="d-inline-block mt-1">By <Link to="#">{post.name}</Link></span>
                      <span>&nbsp;-&nbsp; {Moment(post.publishedAt).format('MMM DD, YYYY')}</span>
                      </div>
                      <BlockContent blocks={post.body} 
                      projectId={sanityClient.clientConfig.projectId}
                      dataset={sanityClient.clientConfig.dataset}/>
                      <p><Link to="#">Read More</Link></p>
                      </div>
                  </div>
        </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default RecentBlog;
