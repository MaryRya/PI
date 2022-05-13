import React from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ModelList from "../components/ModelList";

const Shop = () => {
    return (
        <Row className="mt-4 pl-2">
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <BrandBar/>
                <ModelList/>
            </Col>
        </Row>
    );
};

export default Shop;