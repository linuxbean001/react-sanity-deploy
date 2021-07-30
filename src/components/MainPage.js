import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecentBlog from './RecentBlog';
import SideBlog from './SideBlog';
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import Moment from 'moment';
import blogService from './../services/blogService';
import { Modal } from 'react-bootstrap';
import '../App.css';


function MainPage() {

  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
      new blogService().getAllPostData().then(data => {
        setAllPosts(data)
      });
  }, []);

  const [modalShow, setModalShow] = React.useState(0);
  const showModal = (value) => {
    setModalShow(value);
  };
  const hideModal = (value) => {
    setModalShow(0);
  };

  return (
    <>
    <main>
        <header className="Hero Hero--philosophy">
          <figure className="Hero__background"><img src={process.env.PUBLIC_URL+'/images/blog-bg.jpg'} alt=""/></figure>
          <h1>Our Blog</h1> 
        </header>
    </main>
    <section className="blogsection">
        <div className="container">
          <div className="row d-flex justify-content-center mb-5 pt-5">
          <div className="col-12">
              <p className="welcometext"><b>Our blogs</b> are written to Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.</p>
          </div>
        </div>
        </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="topMenu">
                  <ul>
                    <li><Link to="#">Arcadea News</Link></li>
                    <li><Link to="#">Strategy & Tactics</Link></li>
                    <li><Link to="#">Selling & Transacting</Link></li>
                    <li><Link to="#">Perspectives</Link></li>
                    <li><Link to="#">Operators Circle</Link></li>
                  </ul>
              </div>
            </div>
              <div className="row">
                <div className="col-12 col-md-8">
                {allPostsData && allPostsData.map((post, index) => (
                <div key={index} className="blogwrap" data-aos="clogo" data-aos-once="true" data-aos-duration="1200">
                  <div className="blog-post">
                    <h2><Link to={"/blog-detail/" + post.slug.current} key={post.slug.current}>{post.title}</Link></h2>
                        <p className="lastupdate">
                        <Link to="#"><i className="fa fa-user-circle-o"></i> {post.name}</Link>
                        <i className="fa fa-calendar"></i> {Moment(post.publishedAt).format('MMM DD, YYYY')}
                        <i className="fa fa-hashtag"></i> {post.categories}
                         <span className="comments-type">
                         <i className="fa fa-comments-o"></i>
                         <Link to="#"> {(post.comments) ? post.comments.length : 0 } comments</Link>
                         </span>
                         </p>               
                  </div>                   
                   <div className="row post-content">
                     <div className="col-12 col-md-4">
                      <img src={post.mainImage.asset.url} className="card-img" alt="..."/>
                     </div>
                      <div className="col-12 col-md-8 blogCharLimit">
                        <BlockContent blocks={post.body} 
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}/>
                        <Link onClick={() => showModal(post._id)} className="readmore">Read More</Link>
                        
                        <Modal
                        show={modalShow === post._id}
                        onHide={() => hideModal(post._id)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                          
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row">
                          <div className="col-12">
                          <BlockContent blocks={post.body} 
                        projectId={sanityClient.clientConfig.projectId}
                        dataset={sanityClient.clientConfig.dataset}/>
                          </div>             
                        </div> 
                        </Modal.Body>
                      </Modal>
                     </div>
                   </div>
                   </div>
                   ))}
                   <div className="col-12">
                    <div className="blog-pager container" id="blog-pager"><span className="page-num page-active">1</span><Link className="page-num" to="#">2</Link><Link className="page-num" to="#">3</Link><span className="page-num page-dots">...</span><Link className="page-num" to="#">8</Link><Link className="page-num page-next" to="#"><i className="fa fa-angle-right" aria-hidden="true"></i></Link></div>
                   </div>
                </div>
                <SideBlog/>              
              </div>
          </div>
          <RecentBlog/>
        </section>  
    </>
  );
}

export default MainPage;
