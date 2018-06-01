import React from 'react';
import Navbar from './layouts/Navbar';
import {Container, Header} from 'semantic-ui-react';

class Companies extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Header size="huge">Companies</Header>
                </Container>
            </div>
        )
    }
}


export default Companies;