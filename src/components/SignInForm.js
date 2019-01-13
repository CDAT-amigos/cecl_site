import React, {useState} from 'react'
import { 
    Button, Form, FormGroup, 
    Label, Input,
    Col, Container
} from 'reactstrap'

const tChange=f=>e=>f(e.target.value)
const onSubmit=fn=>e=>{
    e.preventDefault()
    fn()
}
const SignInForm=()=>{
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [company, setCompany]=useState("")
    return (
    <Container>
        <Form onSubmit={onSubmit(()=>console.log({
            name, email, company
            }))}
        >
            <FormGroup row>
                <Label for="fullName" sm={2}>Full Name</Label>
                <Col sm={10}>
                    <Input 
                        type="text" name="fullName" 
                        id="fullName" 
                        placeholder="with a placeholder" 
                        value={name}
                        onChange={tChange(setName)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="email" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input 
                        type="email" name="email" 
                        id="email" placeholder="with a placeholder" 
                        value={email}
                        onChange={tChange(setEmail)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="company" sm={2}>Company</Label>
                <Col sm={10}>
                    <Input 
                        type="text" name="company" 
                        id="company" 
                        placeholder="with a placeholder" 
                        value={company}
                        onChange={tChange(setCompany)}
                    />
                </Col>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </Container>
    )   
}
export default SignInForm