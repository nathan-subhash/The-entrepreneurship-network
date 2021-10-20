import React from 'react'
import { Button, Divider, Form, Segment } from 'semantic-ui-react'

export default function Newsletter() {
    return (
        <div style={{width:"50%", padding:"10px", textAlign:"center", margin:"auto"}}>
            <Divider hidden/>
            <Segment inverted >
                <h3 style={{textAlign:"center", padding:"20px"}}>Subscribe to our Newsletter</h3>
                <Form inverted style={{height:"400px", padding:"20px"}}>
                    <Form.Group widths={2}>
                    <Form.Input fluid label='Full name' placeholder='Full name' />
                    <Form.Input fluid label='College name' placeholder='College name' />
                    </Form.Group>
                    <Form.Group widths={2} style={{marginTop:"50px"}}>
                    <Form.Input fluid label='Mobile No.' placeholder='Mobile no.' />
                    <Form.Input fluid label='E-mail' placeholder='E-mail' />

                    </Form.Group>
                    <Form.Checkbox label='Join TENs Discord community' style={{marginTop:"30px"}}/>
                    <Button type='submit' style={{marginTop:"20px"}}>Submit</Button>
                </Form>
            </Segment>
        </div>
    )
}
