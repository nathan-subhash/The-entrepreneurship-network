import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials() {
    

    return (
        
        <Carousel fade interva="5000" style={{margin:"50px", borderRadius:"5px"}}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="First slide"
            style={{height:"700px"}}/>
            <Carousel.Caption style={{marginBottom:"200px", fontFamily:"Roboto"}}>
                <h3>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.</h3>
                <p>-Harsh Rajput, General Management Intern</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Second slide"
                style={{height:"700px"}}/>
        
            <Carousel.Caption style={{marginBottom:"200px", fontFamily:"Roboto"}}>
                <h3>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.</h3>
                <p>-Anjali Srivastava, Content Intern</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Third slide"
                style={{height:"700px"}}/>
        
            <Carousel.Caption style={{marginBottom:"200px", fontFamily:"Roboto"}}>
                <h3>I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.

                Thank you team TEN!</h3>
                <p>-Kshema Unni, Business Development Intern</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Third slide"
                style={{height:"700px"}}/>
        
            <Carousel.Caption style={{marginBottom:"200px", fontFamily:"Roboto"}}>
                <h3>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!</h3>
                <p>--Aakriti Malik, DM Intern</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Testimonials;
