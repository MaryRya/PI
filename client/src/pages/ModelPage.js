import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {fetchOneModel} from "../http/modelApi";
import {useParams} from "react-router-dom";

const ModelPage = () => {
    const [model, setModel] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneModel(id).then(data => setModel(data))
    }, [])

    return (
        <Container className="mt-3 ml-10" >
            <Row>
                <Col md={4} className="pr-1">
                    <Image className="d-flex flex-column align-items-center" width={300} height={300} src= { 'http://localhost:5000/' + model.img}/>
                    <h5 className="mt-2"> Рейтинг: {model.rating} звезд</h5>
                </Col>
                <Col md={4}>
                    <h2 className="mt-2">{model.name}</h2>
                    <Row className="d-flex flex-column mt-3">
                        <h5 className = "ml-3">Характеристики</h5>
                        {model.info.map((info) =>
                                    <Row key={info.id} className = "ml-3">
                                        {info.title}: {info.description}
                                    </Row>
                        )}
                    </Row>
                    <h5 className="mt-3">Цена: {model.price} руб.</h5>
                    <Button variant={"outline-primary"} className="mt-3">Добавить в корзину</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ModelPage;