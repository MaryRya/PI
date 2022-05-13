import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ModelItem from "./ModelItem";

const ModelList = observer(() => {
    const {model} = useContext(Context)

    return (
        <Row className="d-flex">
            {model.models.map(model =>
                <ModelItem key={model.id} model={model}/>
            )}
        </Row>
    );
});

export default ModelList;