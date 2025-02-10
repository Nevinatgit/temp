import React, { useState } from 'react'
import DomHeader from './DomHeader'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ResumeEditorToolbar from './ToolBar';


export default function CoverLetterEditer() {
    const [choice, setChoice] = useState(null);
   
       const choiceHandler = (section) => {
           setChoice(section);
       };
        const listStyle = {
          listStyleType: 'none',
          padding: 0,
          margin: 0
        };
      
        const listItemStyle = {
          textAlign: 'left',
          marginBottom: '8px'
        };
      
        const linkStyle = {
          color: 'blue',
          textDecoration: 'none'
        };
      
        const linkHoverStyle = {
          textDecoration: 'underline'
        };

const listItemStyle1 = {
    opacity: 0.5,  // Make the list items faded
    transition: 'opacity 0.3s ease, transform 0.3s ease',  // Smooth transition for fade and scale
  };
  
  const hoverStyle = {
    opacity: 1,  // Brighten the item when hovered
    transform: 'scale(1.05)',  // Slightly scale up the item for a hover effect
  };
  const styles = {
    whiteDiv: {
      width: '300px', // Set the width of the white div
      height: '200px', // Set the height of the white div
      overflowY: 'scroll', // Enable vertical scrolling for the white div
      backgroundColor: 'white', // White background color for the white div
      border: '2px solid #000', // Border to define the white div
      position: 'relative',
    },
    blackDiv: {
      width: '100%', // Set the black div to take up full width of the white div
      height: '500px', // Set the height of the black div larger than the white div to enable scrolling
      backgroundColor: 'black', // Black background color for the black div
      color: 'white', // White text color to contrast with the black background
      padding: '10px',
    },
  };
  let ADD=()=>{
    return(
        <li style={listItemStyle}>
            <div style={{display:"inline"}}>  
                <p>Heading</p> 
                <strong><input/></strong> 
                <p>Description</p> 
                <textarea onClick={()=>{choiceHandler("Experience")}} style={{  border: '2px solid blue',width:'450px',height:"150px"}}>                            </textarea>
            </div> 
        </li>
    )
  }
  return (
    <div>
        
 
       <DomHeader/>
            <div className="d-flex justify-content-center align-items-center flex-column"  style={{background:"#9AA6B2"}}>
           
               <div className='d-flex gap-3'>
                <div className=' ' style={{width:"250px",height:"1355 px",background:"#D9EAFD"}}>
                      <ResumeEditorToolbar/>      
                </div>
                <div className="m-5 " style={{background:"white",width:"70%"}}>
                
                <div className='d-flex  ' style={{width:"100%"}}>
                    <div className='d-flex gap-2 flex-column  align-items-center bg-danger pt-5' style={{width:"50%"}}>
                        <img width="200px" height="200px" style={{borderStyle:"solid",borderRadius:"50%"}} src="./images/landingRes.png"/>
                        <div className='p-3 m-5 pb-0 mb-0  pt-0 mt-0'>
                            <h2>Contact Me</h2>
                            <hr/>
                            <ul style={listStyle}>
                                <li className='input' style={listItemStyle}><strong>Name:</strong> <input />  </li>
                                <li  className='input' style={listItemStyle}><strong>Phone:</strong>  <input />  </li>
                                <li  className='input' style={listItemStyle}><strong>Email:</strong> <input /> </li>
                                <div>
                        <ul>
                            <li className='input' style={listItemStyle1} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>
                            <strong>Website/Portfolio:</strong>
                            <input />
                            <button style={{ height: '30px' }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </li>
                            <li className='input' style={listItemStyle1} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>
                            <strong>LinkedIn:</strong>
                            <input />
                            </li>
                            <li className='input' style={listItemStyle1} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.5}>
                            <strong>GitHub:</strong>
                            <input />
                            </li>
                        </ul>
                        </div>
                            </ul>
                            </div>
                        <div className='p-5 m-5 pb-0 mb-0 pt-0 mt-0'>
                            <h2>Education</h2>
                            <hr/>
                            <ul style={listStyle}>
                                <li style={listItemStyle}><strong>Degree:</strong> Bachelor of Science in Computer Science</li>
                                <li style={listItemStyle}><strong>Institution:</strong> University of Fictional Studies, New York, NY</li>
                                <li style={listItemStyle}><strong>Graduated:</strong> May 2022</li>
                            
                                <li style={listItemStyle}><strong>Achievements:</strong> Dean's List (3 semesters), Capstone Project on Machine Learning for Healthcare</li>
                            </ul>
                           
                        </div>
                        <div className='p-5 m-5 pb-0 mb-0  pt-0 mt-0'>
                            <h2>References</h2>
                            <hr/>
                            <ul style={listStyle}>
                            <li style={listItemStyle}><strong>Jane Smith</strong> - Senior Software Engineer | Tech Innovators Inc.</li>
                            <li style={listItemStyle}><strong>Phone:</strong> (555) 987-6543</li>
                            <li style={listItemStyle}><strong>Email:</strong> <a href="mailto:jane.smith@techinnovators.com" style={linkStyle} onMouseOver={e => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={e => e.target.style.textDecoration = 'none'}>jane.smith@techinnovators.com</a></li>
                            <li style={listItemStyle}><strong>Mark Johnson</strong> - Project Manager | Creative Solutions Ltd.</li>
                            <li style={listItemStyle}><strong>Phone:</strong> (555) 246-8102</li>
                            <li style={listItemStyle}><strong>Email:</strong> <a href="mailto:mark.john@creativesolutions.com" style={linkStyle} onMouseOver={e => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={e => e.target.style.textDecoration = 'none'}>mark.john@creativesolutions.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-3' style={{width:"50%"}}>
                        
                    <div className='d-flex flex-column m-5 mb-0'>
                         <div>
                            <h2>About Us</h2>
                            <hr/>
                            <p style={{textAlign:"left"}}>Description</p> 
                            <textarea  onClick={()=>{choiceHandler("about")}} style={{  border:  '2px solid blue' ,width:'450px',height:"150px"}}></textarea>
                        </div>
                        <div>
                            <h2>Job Experience</h2>
                            <hr/>
                            <ul style={listStyle}>
                                <li style={listItemStyle}>
                                    <div style={{display:"inline"}}>  
                                        <p>Heading</p> 
                                        <strong><input/></strong> 
                                        <p>Description</p> 
                                        <textarea onClick={()=>{choiceHandler("Experience")}} style={{  border: '2px solid blue',width:'450px',height:"150px"}}>                            </textarea>
                                    </div> 
                                </li>
                            </ul>
                        </div>
                        </div>                       
                        <div className='p-5 m-5 pb-0 mb-0  pt-0 mt-0'>
                            <h2>Skills</h2>
                            <hr/>
                            <ul style={listStyle}>
                                <ADD/>   
                                <li style={listItemStyle}><strong>Problem Solving & Critical Thinking:</strong> Strong analytical skills with an ability to troubleshoot complex issues</li>
                            </ul>
                        </div>
                        <div className='p-5 m-5 pb-0 mb-0  pt-0 mt-0'>
                            <div>
                                <h2>Language</h2>
                                <hr/>
                                <ul style={listStyle}>
                                    <li style={listItemStyle}><strong>English:</strong> Native</li>
                                    <li style={listItemStyle}><strong>Spanish:</strong> Fluent</li>
                                    <li style={listItemStyle}><strong>French:</strong> Intermediate</li>
                                    <li style={listItemStyle}><strong>German:</strong> Beginner</li>
                                </ul>
                            </div>
                            <div className='p-5 m-5 pb-0 mb-0  pt-0 mt-0'>
                                <h2>Hobbies</h2>
                                <hr/>
                                <ol style={listStyle}>
                                <li style={listItemStyle}><strong>Travelling and exploring</strong></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
       <Footer/>
    </div>
  )
}
