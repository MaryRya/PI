import React from 'react';
import {useNavigate} from "react-router";
import {Card, Col, Image} from "react-bootstrap";
import {MODEL_ROUTE} from "../utils/consts";
import star from "../assets/star.svg"

const ModelItem = ({model}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={2} className="mr-3 mt-3" onClick={() => navigate(MODEL_ROUTE + "/" + model.id)}>
            <Card style={{width: 200, cursor: 'pointer'}} border={"light"} >
                <Image width={200} height={200} src={'http://localhost:5000/' + model.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{model.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{model.name}</div>
            </Card>
        </Col>
    );
};

export default ModelItem;