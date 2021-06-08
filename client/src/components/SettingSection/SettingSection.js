import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SettingSection = () => {
    return (
        <div className="setting-section">
            <ListGroup defaultActiveKey="#personal">
                <ListGroup.Item action href="#personal">
                    Personal Information
                    </ListGroup.Item>
                <ListGroup.Item action href="#education">
                    Education
                </ListGroup.Item>
                <ListGroup.Item action href="#experience">
                    Experience
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default SettingSection;