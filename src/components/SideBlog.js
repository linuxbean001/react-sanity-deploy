import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Moment from 'moment';
import { useParams } from "react-router-dom";
import categoryService from './../services/categoryService';
import commentService from './../services/commentService';
import blogService from './../services/blogService';

function SideBlog() {

  const [allCategories, setAllCategory] = useState(null);
  const [allTags, setAllTags] = useState(null);
  const [commentData, setCommentData] = useState(null);
  const [allPostsData, setAllPosts] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
      new categoryService().getAllCategory().then(data => {
        setAllCategory(data)
      });

      new commentService().getAllComments(slug).then(data => {
        setCommentData(data)
      });

      new blogService().getAllPostData().then(data => {
        setAllPosts(data)
      });

      new blogService().getBlogTagsBySlug(slug).then(data => {
        setAllTags(data)
      });

  }, [slug]);
  
  const location = useLocation();

  return (
    <>
    <div className="col-12 col-md-4"  data-aos="clogo" data-aos-once="true" data-aos-duration="1600">
      <div className="topRight">
           <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Popular</button>
                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Recents</button>
                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Comments</button>
              </div>
          </nav>
           <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                {allPostsData && allPostsData.map((post, index) => (
                <div className="row mb-4" key={index}>
                    <div className="col-12 col-md-4">
                       <img src={post.mainImage.asset.url} className="card-img" alt="..."/>
                    </div>
                    <div className="col-12 col-md-8">
                      <p>
                        {post.title}
                      </p>
                     <i className="fa fa-calendar"></i> {Moment(post.publishedAt).format('MMM DD, YYYY')}
                    </div>
                </div>
                ))}
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                 {allPostsData && allPostsData.map((post, index) => (
                  <div className="row mb-4" key={index}>
                    <div className="col-12 col-md-4">
                       <img src={post.mainImage.asset.url} className="card-img" alt="..."/>
                    </div>
                    <div className="col-12 col-md-8">
                      <p>
                      {post.title}
                      </p>
                     <i className="fa fa-calendar"></i> {Moment(post.publishedAt).format('MMM DD, YYYY')}
                    </div>
                  </div>
                  ))}
              </div>
              <div className="tab-pane fade commentstab" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                <ul>
                {commentData && commentData.comments.map((comment, index) => (
                  <li key={index}>
                    <i className="fa fa-user-circle-o"></i> <u>{comment.name}</u> - <span>{Moment(comment._createdAt).format('MMM DD, YYYY')}</span>
                    <p>{comment.comment}</p>
                  </li>
                ))}
                </ul>
              </div>
        </div>
       </div>
    <div className="topRightCate">
       <h3>Categories</h3>

      <ul className="list-group">
      {allCategories && allCategories.map((category, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
         <Link to="#">{category.title}</Link>
          <span className="badge badge-primary badge-pill">12</span>
        </li>
        ))}
      </ul>

     </div> 

     {(location.pathname === "/blog-detail/"+slug)?
        (<div className="topRightCate tags">
          <h3>Tags</h3>
          {allTags && allTags.tags.map ((tags, index) => (
            <Link key={index} to="#">{tags}</Link>
          ))}
        </div>)
      : ('')} 
      <div className="topRightCate folloemail">
            <h3>The Arcadea Brief</h3>
            <p>Join the Arcadea Brief, where we share our latest ideas and lessons learned, straight to your inbox.</p>
            <input type="text" placeholder="Your Email"/> 
            <Link to="#" className="readmore">Sign up</Link>
      </div>
    </div> 
    </>
  );
}

export default SideBlog;
