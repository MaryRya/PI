import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {model} = useContext(Context)

    return (
        <Row className="d-flex">
            {model.brands.map(brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="pt-3 pl-2 pb-3 pr-2"
                    onClick={() => model.setSelectedBrand(brand)}
                    border={brand.id === model.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;