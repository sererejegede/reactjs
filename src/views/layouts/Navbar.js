import React from 'react';
import {Menu, Segment, List} from "semantic-ui-react";
// import { Router, Route, IndexRoute, hashHistory } from ''


class Navbar extends React.Component {

    state = {
        activeItem: 'project management',
        companies: [],
        testcompanies: [1,2,3,4]
    };
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    componentDidMount() {
        fetch("http://localhost:8000/api/companies")
            .then(res => res.json() )
            .then((result) => {
                console.log('Success', result);
                this.setState({companies: result});
            }, (error) => {
                console.log('Error', error)
            })
    }

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <div className='ui fixed'>
                    <Segment>
                        <Menu pointing secondary>
                            <Menu.Item color='orange' name='project management' active={activeItem === 'project management'} onClick={this.handleItemClick}/>
                            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                        </Menu>
                    </Segment>
                </div>

                <List divided relaxed>
                    <List.Item>
                        {/*{this.state.companies.name}*/}
                    </List.Item>
                </List>

            </div>
        )
    }
}

export default Navbar;