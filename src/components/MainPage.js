import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RecentBlog from './RecentBlog';
import SideBlog from './SideBlog';
import blogService from './../services/blogService';
import '../App.css';
import Pagination from "./Pagination";
import Posts from "./Posts";


function MainPage() {

  const [allPostsData, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
      new blogService().getAllPostData().then(data => {
        setAllPosts(data)
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = allPostsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
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
                  <Posts posts={currentPosts} loading={loading} />
                   <div className="col-12">
                      <div className="blog-pager container pagination-wrapper" id="blog-pager">
                        <Pagination
                          paginate={paginate}
                          postsPerPage={postsPerPage}
                          totalPosts={allPostsData.length}
                        />
                      </div>
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
