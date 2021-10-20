import React from 'react'
import { Image,Button, Card, Icon, Header, Divider } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';






function Courses() {
    return (
        <div style={{margin:"50px", borderRadius:"5px"}}>
            <Divider />
            <Header as='h2' icon textAlign='center'>
                <Icon name='book' circular size="huge"/>
                <Header.Content>Our Courses</Header.Content>
            </Header>
            <br/>

            <Card.Group style={{padding:"20px"}} itemsPerRow={3}>
            <Fade >
             <Card color='red' style={{height:"450px", width:"800px", display:"inline-block", padding:"20px", marginTop:"30px"}}> 
             <Image src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1138,h_590,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp" style={{height:"400px", width:"800px"}}/>



            </Card>
             <div style={{ padding:"20px",  float:"right", textAlign:"center", marginTop:"175px", marginLeft:"50px"}}>
            
                <h1 style={{fontFamily:"Roboto",fontSize:"40px", textDecoration:"bold"}}>Entrepreneurship Made Fun</h1>
                    <Button animated='vertical' color="red" style={{width:"50%"}} circular >
                        <Button.Content visible>
                            <Icon name="content"/>
                        </Button.Content>
                        <Button.Content hidden>
                            Explore here
                        </Button.Content>
                    </Button>
            </div>   
            </Fade>

            <Fade>
             <Card color='red' style={{height:"450px", width:"800px", display:"inline-block", padding:"20px", marginTop:"30px"}}> 
             <Image src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_850,h_563,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp" style={{height:"400px", width:"800px"}}/>
             </Card>
             <div style={{ padding:"20px",  float:"right", textAlign:"center", marginTop:"175px", marginLeft:"50px"}}>
            
                <h1 style={{fontFamily:"Roboto",fontSize:"40px", textDecoration:"bold"}}>Digital Marketting</h1>
                    <Button animated='vertical' color="red" style={{width:"50%"}} circular>
                        <Button.Content visible>
                            <Icon name="content"/>
                        </Button.Content>
                        <Button.Content hidden>
                            Explore here
                        </Button.Content>
                    </Button>
            </div> 

             </Fade>
             <Fade>
             <Card color='red'style={{height:"450px", width:"800px", display:"inline-block", padding:"20px", marginTop:"30px"}}> 
             <Image src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_850,h_555,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp" style={{height:"400px", width:"800px"}}/>

             </Card>
             <div style={{ padding:"20px",  float:"right", textAlign:"center", marginTop:"175px", marginLeft:"50px"}}>
            
                <h1 style={{fontFamily:"Roboto",fontSize:"40px", textDecoration:"bold"}}>Product Management</h1>
                    <Button animated="vertical" color="red" style={{width:"50%"}} circular>
                        <Button.Content visible>
                            <Icon name="content"/>
                        </Button.Content>
                        <Button.Content hidden >
                            Explore here
                        </Button.Content>
                    </Button>
            </div> 
            </Fade>
             </Card.Group>
            <Fade>
             <Divider hidden/><br/>
             <Divider horizontal>Benefits</Divider>
             <Divider hidden/><br/>
             <Card.Group itemsPerRow={3}>
                <Card fluid color='red'>
                    <div style={{padding:"10px"}}>
                        <Pulse>
                        <Icon name="tasks" size="huge" style={{height:"50px", marginTop:"30px", marginLeft:"20px", display:"inline-block"}}/></Pulse>
                        <h2 style={{display:"inline-block", padding:"20px"}}>Expert Teachers</h2>
                        <p style={{marginLeft:"10px"}}>
                            Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                            We are experts in developing and testing hypotheses about learning difficulties or instructional strategies
                        </p>
                    </div>
                </Card>
                <Card fluid color='red'>
                <div style={{padding:"10px"}}>
                    <Pulse>
                        <Icon name="globe" size="huge" style={{height:"50px", marginTop:"30px", marginLeft:"10px", display:"inline-block"}}>

                        </Icon>
                        <h2 style={{display:"inline-block", padding:"20px"}}>Online Community</h2>
                        </Pulse>
                        <p style={{marginLeft:"10px"}}>
                        Feel like home, with a "family of invisible friends".
                        </p>
                    </div>
                </Card>
                <Card fluid color='red'>
                <div style={{padding:"10px"}}>
                    <Pulse>
                        <Icon name="thumbtack" size="huge" style={{height:"50px", marginTop:"30px", marginLeft:"20px", display:"inline-block"}}/>
                        </Pulse>
                        <h2 style={{display:"inline-block", padding:"10px", wordWrap:"break-word"}}>Flexible Curriculum</h2>
                        <p style={{marginLeft:"10px"}}>
                        Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.
                        </p>
                    </div>
                </Card>
                </Card.Group>
             </Fade>
        </div>
    )
}


export default Courses