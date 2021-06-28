import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'


const About = () => {
  

  return (
    
   
    <Container fluid>
      <Row className='about py-5 align-self-center'>
        <Col sm={10} md={6}  className='mx-auto my-5 '>
        <h1>About <strong className='aboutcolor'>Pipeline</strong></h1>
          <p className=' text-muted w-75 text-justify'><strong>Pipelining</strong> is a technique for implementing instruction-level parallelism within a single processor. Pipelining attempts to keep every part of the processor busy with some instruction by dividing incoming instructions into a series of sequential steps (the eponymous "pipeline") performed by different processor units with different parts of instructions processed in parallel.</p>
        </Col>
        <Col sm={10} md={6} className='mx-auto  my-5'>
          <div className='outline'>
             <img className='img-fluid align-self-center' alt ='microprocessor' src ='/images/cpu1.gif'/>
          </div>           
        </Col>
      </Row>
  
    </Container>
  )
}
export default About
