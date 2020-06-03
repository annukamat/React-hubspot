import React, { Component } from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './homepage.css';

class Home extends Component {
  render() {
    return (
      <>
        <div className="homepage">
          <div
            style={{
              backgroundColor: '#33475b',
              color: '#fff',
              height: '100px',
            }}
          >
            <div className="container">
              <div className="row" style={{ height: '90vh', resize: 'both' }}>
                <div className="col-sm-12 col-md-12">
                  <p
                    style={{
                      padding: '20px',
                      fontWeight: 'bold',
                      fontSize: '20px',
                    }}
                  >
                    Global health and safety is our top priority.
                    <a href="https://www.hubspot.com/en-us/coronavirus-response">
                      {' '}
                      <u>Learn how HubSpot is responding</u>
                    </a>{' '}
                    to COVID-19 and its economic impact on the communities we
                    serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://cdn2.hubspot.net/hubfs/53/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg"
            alt="hubspot"
            style={{ backgroundColor: '#fef2ee' }}
          ></img>
          <div className="container">
            <div className="home-text">
              <h1 style={{ fontWeight: 'bold', color: '#33475b' }}>
                There’s a better way to grow.
              </h1>
              <p style={{ margin: '15px 0 15px 0', fontSize: '20px' }}>
                Marketing, sales, and service software that helps your business
                grow without compromise. Because “good for the business” should
                also mean “good for the customer.”
              </p>
              <Button
                style={{ backgroundColor: '#f57958', border: 'none' }}
                size="lg"
                active
              >
                Get HubSpot free
              </Button>
              <p style={{ margin: '15px 0 15px 0' }}>
                Get started with FREE tools, and upgrade as you grow.
              </p>
            </div>
          </div>
          <div className="growth" style={{ backgroundColor: '#f5f8fa' }}>
            <div className="growth-products container">
              <div className="row">
                <div className="growth-logo-wrapper col-12 col-sm-3 col-md-3">
                  <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>
                    Powerful alone. Better together.
                  </h2>
                  <p>
                    HubSpot offers a full stack of software for marketing,
                    sales, and customer service, with a completely free CRM at
                    its core. They’re powerful alone — but even better when used
                    together.
                  </p>
                </div>
                <Card
                  style={{ width: '18rem' }}
                  className="col-12 col-sm-3 col-md-3 offset-md-1"
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{ marginRight: '10px' }}
                      />
                      Free HubSpot CRM
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                      Everything you need to organize, track, and build better
                      relationships with leads and customers. Yes, it's 100%
                      free. Forever.
                    </Card.Text>
                    <hr />
                    <Card.Subtitle
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      POPULAR FEATURES
                    </Card.Subtitle>
                    <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        contact Insights
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Deals
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Tasks
                      </li>
                    </ul>
                    <Button
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f57958',
                        border: 'none',
                      }}
                      variant="danger"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: '18rem' }}
                  className="col-12 col-sm-3 col-md-3 offset-md-1"
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{ marginRight: '10px' }}
                      />
                      Free HubSpot CRM
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                      Everything you need to organize, track, and build better
                      relationships with leads and customers. Yes, it's 100%
                      free. Forever.
                    </Card.Text>
                    <hr />
                    <Card.Subtitle
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      POPULAR FEATURES
                    </Card.Subtitle>
                    <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        contact Insights
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Deals
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Tasks
                      </li>
                    </ul>
                    <Button
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f57958',
                        border: 'none',
                      }}
                      variant="danger"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="row" style={{ marginTop: '30px' }}>
                <Card
                  style={{ width: '18rem' }}
                  className="col-12 col-sm-3 col-md-3"
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{ marginRight: '10px' }}
                      />
                      Free HubSpot CRM
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                      Everything you need to organize, track, and build better
                      relationships with leads and customers. Yes, it's 100%
                      free. Forever.
                    </Card.Text>
                    <hr />
                    <Card.Subtitle
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      POPULAR FEATURES
                    </Card.Subtitle>
                    <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        contact Insights
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Deals
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Tasks
                      </li>
                    </ul>
                    <Button
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f57958',
                        border: 'none',
                      }}
                      variant="danger"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: '18rem' }}
                  className="col-12 col-sm col-md-3 offset-md-1"
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{ marginRight: '10px' }}
                      />
                      Free HubSpot CRM
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                      Everything you need to organize, track, and build better
                      relationships with leads and customers. Yes, it's 100%
                      free. Forever.
                    </Card.Text>
                    <hr />
                    <Card.Subtitle
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      POPULAR FEATURES
                    </Card.Subtitle>
                    <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        contact Insights
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Deals
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Tasks
                      </li>
                    </ul>
                    <Button
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f57958',
                        border: 'none',
                      }}
                      variant="danger"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: '18rem' }}
                  className="col-12 col-sm-3 col-md-3 offset-md-1"
                >
                  <Card.Body>
                    <Card.Title
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      {' '}
                      <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{ marginRight: '10px' }}
                      />
                      Free HubSpot CRM
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                      Everything you need to organize, track, and build better
                      relationships with leads and customers. Yes, it's 100%
                      free. Forever.
                    </Card.Text>
                    <hr />
                    <Card.Subtitle
                      style={{ textAlign: 'left', fontWeight: 'bold' }}
                    >
                      POPULAR FEATURES
                    </Card.Subtitle>
                    <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                      <li>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        contact Insights
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Deals
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ marginRight: '10px', color: '#f86' }}
                        />
                        Tasks
                      </li>
                    </ul>
                    <Button
                      style={{
                        textAlign: 'center',
                        backgroundColor: '#f57958',
                        border: 'none',
                      }}
                      variant="danger"
                    >
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div className="community-board">
            <div className="community-board-inner">
              <div className="com-board-text">
                <h2
                  style={{
                    marginTop: '30px',
                    padding: '80px',
                    fontWeight: 'bold',
                  }}
                >
                  Learn and grow with award-winning support and a thriving
                  community behind you.
                </h2>
                <p>
                  You don't have to go it alone. Master the inbound methodology
                  and get the most out of your tools with HubSpot's legendary
                  customer support team and a community of thousands of
                  marketing and sales pros just like you.
                </p>
              </div>
              <div className="cos_wrapper">
                <Container>
                  <Row>
                    <Col>
                      <h2>150+</h2>
                      <p>HubSpot user groups</p>
                    </Col>
                    <Col>
                      <h2>7M+</h2>
                      <p>Monthly Visits</p>
                    </Col>
                    <Col>
                      <h2>248+</h2>
                      <p>certified professionals</p>
                    </Col>
                    <Col>
                      <h2>26K</h2>
                      <p>Registered Attendees</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2>400+</h2>
                      <p>Integrations</p>
                    </Col>
                    <Col>
                      <h2>6</h2>
                      <p>Languages</p>
                    </Col>
                    <Col>
                      <h2>2.6M+</h2>
                      <p>social followers</p>
                    </Col>
                    <Col>
                      <h2>5K+</h2>
                      <p>profiles and counting</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
