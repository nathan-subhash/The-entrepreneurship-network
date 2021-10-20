import React from 'react'
import { Image, Button, Icon} from 'semantic-ui-react';
import '../components/css/Body.css';
import {Fade} from 'react-reveal';
import {Parallax} from 'react-parallax';
import Tada from 'react-reveal/Tada';

function Body() {
    return (
        <div>
            <Parallax  bgImage="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg/v1/fill/w_1225,h_784,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.webp" strength={500} style={{margin:"50px", borderRadius:"5px"}}>
            <div id='body' style={{height:700, width:100}}>
            <Fade>

                {/* <Image src="https://static.wixstatic.com/media/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.jpg/v1/fill/w_1225,h_784,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_b456634292f844e7b822bb94dcd431fd~mv2.webp" alt='a world of knowledge at your fingertips' size='massive' centered /> */}
                <h1 id="world">A World of Knowledge at Your Fingertips</h1>
            </Fade>
            </div>
            </Parallax>
            <Parallax strength={300} style={{backgroundColor:"#ff3333", margin:'50px', borderRadius:"5px"}}>
                <Fade bottom cascade>
                <div id='body' style={{height:700, padding:"20px", textAlign:"center", color:"white"}}>
                    <h1 style={{fontSize:"80px", textAlign:"center", fontFamily:"Sora", padding:"20px", textDecoration:"underline"}}>About Us</h1>
                    <div >
                    <p style={{fontSize:"60px", textAlign:"center", color:"white", display:"inline-block", marginTop:"50px"}}>
                    Learning Together <br/>From the Comfort of <br/>Your Home<br/> 
                    <Button inverted color='white'>
                        Learn More
                    </Button>
                    </p>
                    <Image src='https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp' style={{ height:"410px",width:"410px", float:"right", borderRadius:"20%", padding:"5px" }} centered/>
                    </div>
                    <br/>
                </div>
            </Fade>

            </Parallax>

            <Parallax bgImage="https://static.wixstatic.com/media/dcca985fe5e148b1aea6744afd6af686.jpg/v1/fill/w_980,h_730,al_c,q_85,usm_0.66_1.00_0.01/dcca985fe5e148b1aea6744afd6af686.webp" strength={100} style={{margin:"50px", borderRadius:"5px"}}>
                <Fade bottom cascade>
                <div style={{height:400, textAlign:"center", marginTop:"70px"}}>
                    <h1 style={{fontSize:"80px", textAlign:"center", fontFamily:"Roboto", padding:"20px", color:"white", textShadow:"2px 2px teal"}}>
                        Welcome To <br/>The Next Big Thing</h1><br/>
                
                
                    <Tada>
                        <Button animated circular color={"teal"}>
                            <Button.Content visible>Join TEN Virtual Campus</Button.Content>
                            <Button.Content hidden>
                                <Icon name='add' />
                            </Button.Content>
                        </Button>
                        
                    </Tada>
                </div>                
                </Fade>
            </Parallax>

            

        </div>
    )
}

export default Body;
