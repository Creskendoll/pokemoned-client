import React from 'react';
import "../style/Container.css";
import { Jumbotron, Row, Button, Col } from 'react-bootstrap';
import ResultBox from "./ResultBox";


interface IComponentContainer {

}

export default class ComponentContainer extends React.Component<IComponentContainer, {}> {

    render() {
        return (
            <Jumbotron className="component-container">
                <Row>
                    {this.props.children}
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <Button variant="success" style={{
                            flex : 1,
                            width : "100%",
                            height : 50,
                            marginTop : 15

                        }}>
                            Convert!
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <ResultBox />
                </Row>
            </Jumbotron>
        );
    }
}