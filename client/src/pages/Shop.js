import React, {useContext, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ModelList from "../components/ModelList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchModels, fetchTypes} from "../http/modelApi";

const Shop = observer(() => {
    const {model} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => model.setTypes(data))
        fetchBrands().then(data => model.setBrands(data))
        fetchModels(null, null, 1, 2).then(data => {
            model.setModels(data.rows)
            model.setTotalCount(data.count)})
    }, [])
    useEffect(() => {
        fetchModels(model.selectedType.id, model.selectedBrand.id, model.page, 2).then(data => {
            model.setModels(data.rows)
            model.setTotalCount(data.count)
        })
    }, [model.page, model.selectedType, model.selectedBrand,])
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
});

export default Shop;