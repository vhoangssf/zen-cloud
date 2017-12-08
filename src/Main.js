import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ListFilter from './filters/ListFilter';
import SortResults from './SortResults';
import DisplayAmount from './DisplayAmount';
import QuickLinks from './QuickLinks';
import PageSelect from './PageSelect';
import VideoList from './video/VideoList';

class Main extends React.Component {

  render() {
    return (
      <div>
      <Grid fluid="true">
      <Row>
        <Col lg={4}><PageHeader>Zen Cloud</PageHeader></Col>
        <Col lg={8}><SearchBar/></Col>
      </Row>

      <Row>
        <Col lg={12}>
          <NavBar/>
        </Col>
      </Row>

      <Row>
        <Col lg={3}>
          <ListFilter/>
        </Col>
        <Col lg={2}>
          <SortResults/>
        </Col>
        <Col lg={2}>
          <DisplayAmount/>
        </Col>
        <Col lg={3} lgPush={2}>
          <PageSelect/>
        </Col>
        <Col lg={6}>
          <VideoList/>
        </Col>
        <Col lg={3}>
          <QuickLinks/>
        </Col>
      </Row>

      <Row>

      </Row>

      <Row>
        {/* <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col> */}
      </Row>
    </Grid>
  </div>
    );
  }
}

export default Main;
