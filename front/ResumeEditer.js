import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DomHeader from './DomHeader';
import Footer from './Footer';
import ResumeEditorToolbar from './ToolBar';
import { setresumeState } from './reducer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// Memoizing Content to prevent unnecessary re-renders
const Content = React.memo(({ resumeState, handleChange, display, editorState, fieldName, handledisplay }) => {
    const [addmore,setaddmore]=useState(false)
    const [list,setList] =useState([])
    return (
       
                <div style={{ display: "inline",width:"400px", height:"150px" }} onMouseEnter={()=>setaddmore(true)} onMouseOut={()=>setaddmore(false)}>
                {!display[fieldName] && ( <p>Heading</p>)}
                    <strong>
                        {!display[fieldName] && (
                            <input
                                onChange={handleChange}
                                style={{
                                    fontWeight: editorState.isBold ? "bold" : "",
                                    fontStyle: editorState.isItalic ? "italic" : "",
                                    textDecoration: editorState.isUnderlined ? "underline" : "",
                                    fontSize: editorState.fontSize,
                                    fontFamily: editorState.fontFamily,
                                    textAlign: editorState.alignment
                                }}
                                value={resumeState[fieldName][0]}
                                id="0"
                                name={fieldName}
                            />
                        )}
                       
                    </strong>
                    <p>Description</p>
                    {!display[fieldName] && (
                        <textarea
                            onChange={handleChange}
                            style={{
                                border: '2px solid blue',
                                width: '450px',
                                height: "120px",
                                fontWeight: editorState.isBold ? "bold" : "",
                                fontStyle: editorState.isItalic ? "italic" : "",
                                textDecoration: editorState.isUnderlined ? "underline" : "",
                                fontSize: editorState.fontSize,
                                fontFamily: editorState.fontFamily,
                                textAlign: editorState.alignment
                            }}
                            value={resumeState[fieldName][1]}
                            id="1"
                            name={fieldName}
                        />
                    )}
                    {display[fieldName] && list.map((item, index) => (
                             <p key={index} style={{
                                width:"400px",
                                fontWeight: !editorState.isBold ? "bold" : "",
                                fontStyle: editorState.isItalic ? "italic" : "",
                                textDecoration: editorState.isUnderlined ? "underline" : "",
                                fontSize: editorState.fontSize,
                                fontFamily: editorState.fontFamily,
                                textAlign: editorState.alignment
                            }}><strong>{item.split(":")[0]+" "}</strong>{item.split(":")[1].slice(1)} </p>
                    ))}
                     
                    
                    {!display[fieldName] && (
                        <button
                            className='btn btn-primary mr-2'
                            name={fieldName}
                            onClick={() => {handledisplay(fieldName)
                                setList((prevList)=> [...prevList,resumeState[fieldName][0]+": "+resumeState[fieldName][1]])
                            }} // Call handledisplay to toggle visibility
                            style={{ float: "right" }}
                        >
                            Add
                        </button>
                    )}
                    {display[fieldName] &&  (<button
                            className='btn btn-primary mr-2'
                            name={fieldName}
                            onClick={() => handledisplay(fieldName)} // Call handledisplay to toggle visibility
                            style={{ float: "right" }}
                        >
                            Add More
                        </button>)}
                
                </div>
        
    );
});

export default function ResumeEditor() {
    const [choice, setChoice] = useState(null);
    const location = useLocation();
    const [resumeState, setResumeState] = useState({
        about: "",
        Experience: ["", ""], // Initialize as an array for the two fields
        skills: ["", ""], // Initialize as an array for the two fields
        language: "",
        hobbies: "",
        references: ["", ""],
        education: ["", ""],
    });

    const token = useSelector((state) => state.resumeEditor.Token); 
    console.log(token)
    useEffect(() => {
        const fetchData = async () => {
            const queryParams = new URLSearchParams(location.search);
            const id = queryParams.get('id');
            console.log(id)
            if (id && token) {
                try {
                    console.log("sdfg")
                    const response = await axios.get(
                        'http://localhost:5000/api/resumeRoutes/GetResume', 
                        {
                            params: { id }, // Sending 'id' as a query parameter
                            headers: {
                                'Authorization': `Bearer ${token}`, // Sending token in the Authorization header
                            },
                        }
                    );
                   
                  setResumeState(response.data.existingResume)
                  handledisplay("skills")
             
                  console.log(response.data.existingResume)
                  console.log("wallah")
                    
                } catch (err) {
                    // Handle error here
                
                }
            }
        };
        
        fetchData(); // Call fetchData inside useEffect
    }, [location.search, token]);
  useEffect(()=>{
    console.log(resumeState)
  },[resumeState])
    const [display, setDisplay] = useState({
        contact:false,
        about: false,
        Experience: false,
        skills: false,
        language: false,
        hobbies: false,
        references: false,
        education: false,
    });

   
    const dispatch = useDispatch();
    const editorState = useSelector(state => state.resumeEditor.editorState);

    const handleChange = useCallback((event) => {
        const { name, value, id } = event.target;

        setResumeState((prevState) => {
            if (name === "Experience" || name === "skills" || name==="references" || name==="education"
            ) {
                const updatedField = [...prevState[name]];
                updatedField[parseInt(id)] = value;
                return { ...prevState, [name]: updatedField };
            } else {
                return { ...prevState, [name]: value };
            }
        });
    }, []);

    const handledisplay = (fieldName) => {
        setDisplay((prevState) => ({
            ...prevState,
            [fieldName]: !prevState[fieldName], // Toggle visibility for the specific field
        }));
        dispatch(setresumeState(resumeState));
    };

    return (
        <div>
            <DomHeader />

            <div className='d-flex'>
                <div style={{ width: "300px", height: "1355px", background: "#D9EAFD" }}>
                    <ResumeEditorToolbar />
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column" style={{ overflowY: 'scroll', height: "1200px", backgroundColor: 'white', border: '2px solid #000', position: 'relative', background: "#9AA6B2" }}>
                    <div className='d-flex gap-3'>
                        <div className="m-5" style={{ background: "white", width: "70%" }}>
                            <div className='d-flex' style={{ height: "1250px", backgroundColor: 'black', padding: '10px', background: "white", width: "130%" }}>
                                <div className='d-flex gap-2 flex-column align-items-center bg-danger pt-5' style={{width:"550px",height:"100%"}}>
                                    <img width="200px" height="200px" style={{ borderStyle: "solid", borderRadius: "50%" }} src="./images/landingRes.png" />
                                    <div className='p-3 m-5 pb-0 mb-0 pt-0 mt-0'>
                                        <h2>Contact Me</h2>
                                        <hr />
                                        {!display.contact && (<ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}><strong>Name:</strong> <input />  </li>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}><strong>Phone:</strong>  <input />  </li>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}><strong>Email:</strong> <input /> </li>
                                        </ul>)}
                                        {display.contact && (<ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}> <strong>Name:</strong> <span>sdfdsf</span></li>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}><strong>Phone:</strong>  <span>sdfs</span>  </li>
                                            <li style={{ textAlign: 'left', marginBottom: '8px' }}><strong>Email:</strong> <span>sdfsdf</span> </li>
                                        </ul>)}
                                        {!display.contact && (
                                                <button
                                                    className='btn btn-primary mr-2'
                                                    name="contact"
                                                    onClick={() => handledisplay('contact')}
                                                    style={{ float: "right" }}
                                                >
                                                    Add
                                                </button>
                                            )}
                                    </div>
                                    <h2>Education</h2>
                                            <hr />
                                           
                                                 <Content resumeState={resumeState} handleChange={handleChange} display={display} editorState={editorState} fieldName="education" handledisplay={handledisplay}  />
                                          
                                            <h2>References</h2>
                                            <hr />
                                           
                                            <Content resumeState={resumeState} handleChange={handleChange} display={display} editorState={editorState} fieldName="references" handledisplay={handledisplay} />
                                           
                                </div>
                                <div className='d-flex flex-column   gap-3 ' style={{ width:"550px", paddingTop: "50px" }}>
                                    <div className='d-flex flex-column gap-5 m-5 mb-0 ' style={{width:"450px"}}>
                                        <div>
                                            <h2>About Us</h2>
                                            <hr />
                                            <p style={{ textAlign: "left" }}>Description</p>

                                            {!display.about && (
                                                <textarea
                                                    onChange={handleChange}
                                                    onClick={() => { setChoice("about"); }}
                                                    style={{
                                                        border: '2px solid blue',
                                                        width: '450px',
                                                        height: "120px",
                                                        fontWeight: editorState.isBold ? "bold" : "",
                                                        fontStyle: editorState.isItalic ? "italic" : "",
                                                        textDecoration: editorState.isUnderlined ? "underline" : "",
                                                        fontSize: editorState.fontSize,
                                                        fontFamily: editorState.fontFamily,
                                                        textAlign: editorState.alignment
                                                    }}
                                                    value={resumeState.about}
                                                    name="about"
                                                />
                                            )}

                                            {display.about && (
                                                <p style={{
                                                    fontWeight: editorState.isBold ? "bold" : "",
                                                    fontStyle: editorState.isItalic ? "italic" : "",
                                                    textDecoration: editorState.isUnderlined ? "underline" : "",
                                                    fontSize: editorState.fontSize,
                                                    fontFamily: editorState.fontFamily,
                                                    textAlign: editorState.alignment
                                                }}>
                                                    {resumeState.about}
                                                </p>
                                            )}

                                            {!display.about && (
                                                <button
                                                    className='btn btn-primary mr-2'
                                                    name="about"
                                                    onClick={() => handledisplay('about')}
                                                    style={{ float: "right" }}
                                                >
                                                    Add
                                                </button>
                                            )}
                                        </div>
                                        <div>
                                            <h2>Job Experience</h2>
                                            <hr />
                                            <Content resumeState={resumeState} handleChange={handleChange} display={display} editorState={editorState} fieldName="Experience" handledisplay={handledisplay}  />
                                            </div>
                                            <div>
                                            <h2>Skills</h2>
                                            <hr />
                                            <Content resumeState={resumeState} handleChange={handleChange} display={display} editorState={editorState} fieldName="skills" handledisplay={handledisplay} />

                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
