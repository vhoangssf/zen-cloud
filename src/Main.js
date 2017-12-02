import React from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button, PageHeader } from 'react-bootstrap';
import NavBar from './NavBar';

class Main extends React.Component {

  render() {
    return (
      <div>
      <Grid>
      <Row>
        <Col lg={4}><PageHeader>Zen Cloud</PageHeader></Col>
        <Col lg={4}></Col>
      </Row>
      <Form inline>
      <FormGroup controlId="formInlineName">
        <FormControl type="text" placeholder="Jane Doe" />
      </FormGroup>
      <Button type="submit">
        Search
      </Button>
    </Form>

      <Row>
        <Col lg={12}>
          <NavBar/>
        </Col>
      </Row>

      <Row>
        <Col lg={4}>
        hi
        </Col>
      </Row>

      <Row>
        <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
      </Row>
    </Grid>
  </div>
    );
  }
}

export default Main;
