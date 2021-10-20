import React from 'react'
import {  Icon, Segment } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'


export default function Footer() {
    return (
        <div style={{width:"100%", margin:"auto", marginTop:"50px"}} >
            <Segment textAlign="center" inverted padded>
            <Fade bottom cascade>
            
                <a href="https://www.facebook.com/people/The-Entrepreneurship-Network/100063983912464/" style={{textDecoration:"none"}}className="social"><Icon name='facebook f' color={'white'} size={'big'}  link={true}/></a>
                <a href="https://twitter.com/We_Are_TEN?s=08" target="_blank" style={{textDecoration:"none"}} className="social"><Icon name='twitter' color={'blue'} size={'big'} link={true}/></a>
                <a href="https://www.instagram.com/theentrepreneurshipnetwork/" target="_blank" style={{textDecoration:"none"}} className="social"><Icon name='instagram' color={'pink'} size={'big'} link={true}/></a>
                <nav>About Us</nav>
                <nav>FAQs</nav>
                <nav>Contact Us</nav>
                <p><Icon name="copyright outline"/>Limitless Technologies- The Entrepreneurship Network</p>
                <p style={{float:"right", fontSize:"8px"}}>Designed by Nathan Subhash</p>
            </Fade>
            </Segment>
        </div>
    )
}
