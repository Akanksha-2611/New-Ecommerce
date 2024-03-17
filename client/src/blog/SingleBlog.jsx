import React ,{useState}from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import Tags from "../Shop/Tags";
import PopularPost from "../Shop/PopularPost";
const socialList=[
    {
        link:"#",
        iconName:"icofont-facebook",
        className:"facebook",
    },
    {
        link:"#",
        iconName:"icofont-twitter",
        className:"twitter",
    },
    {
        link:"#",
        iconName:"icofont-linkedin",
        className:"linkedin",
    },
    {
        link:"#",
        iconName:"icofont-instagram",
        className:"instagram",
    },
    {
        link:"#",
        iconName:"icofont-pinterest",
        className:"pinterest",
    },

];
const SingleBlog = () => {
    const [blog,setBlog]=useState(blogList);
    const {id}=useParams();
    const result=blog.filter((b)=>b.id===Number(id));
    console.log(result[0]);
  return (
    <div className='blog-section blog-single padding-tb section-bg'>
        <div className='container'>
            <div className='row justify-content-center'>
               {/* left side */}
                <div className='col-lg-8 col-12'>
                    <article>
                        <div className='section-wrapper'>
                            <div className='row row-cols-1 justify-content-center g-4'>
                    
                                <div className='col'>
                                    <div className='post-item style-2'>
                                        <div className='post-inner'>
                                            {
                                                result.map((item)=>(
                                                    <div  key={item.id}>
                                                        <div className='post-thumb'>
                                                            <img src={item.imgUrl} alt=''/>
                                                        </div>

                                                        <div className='post-content'>
                                                           <h3>{item.title}</h3>
                                                           <div className='meta-post'>
                                                          
                                                             <ul className='lab-ul'>
                                                               {
                                                                item.metaList.map((val,i)=>(
                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                ))
                                                               }
                                                             </ul>
                                                            
                                                           </div>
                                                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                           <blockquote>
                                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                             <cite>
                                                                <a href='#'>...Melissa Hunter</a>
                                                             </cite>
                                                           </blockquote>

                                                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        
                                                           <img src='/src/assets/images/blog/single/01.jpg' alt=''/>

                                                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                           
                                                           <div className='video-thumb'>
                                                             <img src='/src/assets/images/blog/single/02.jpg'/>
                                                                <a href='https://youtu.be/L0U2u8kvKW4?si=CrwQ_czLuMVt2UMB' className='video-button popup' target='_blank'>
                                                                  <i className='icofont-ui-play'></i>
                                                                </a>
                                                           </div>

                                                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                                           <div className='tags-section'>
                                                             <ul className='tags lab-ul'>
                                                                <li>
                                                                    <a href='#'>Agency</a>
                                                                </li>
                                                                <li>
                                                                    <a href='#'>Bussiness</a>
                                                                </li>
                                                                <li>
                                                                    <a href='#'>Personal</a>
                                                                </li>
                                                             </ul>
                                                             <ul className='lab-ul social-icons'>
                                                               {
                                                                socialList.map((val,i)=>(
                                                                    <li key={i}>
                                                                        <a href='#' className={val.className}>
                                                                            <i className={val.iconName}></i>
                                                                        </a>
                                                                    </li>
                                                                ))}

                                                             </ul>
                                                           </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    <div className='navigation-part'>
                                       <div className='left'>
                                         <a href='#' className='prev'>
                                           <i className='icofont-double-left'></i>Previous Blog
                                         </a>
                                         <a href='#' className='title'>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                         </a>
                                       </div>
                                         <div className='right'>
                                         <a href='#' className='prev'>
                                           <i className='icofont-double-right'></i>Previous Blog
                                         </a>
                                         <a href='#' className='title'>
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                         </a>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                
                {/* right side */}
                <div className='col-lg-4 col-12'>
                 <aside>
                    <Tags/>
                    <PopularPost/>
                 </aside>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog