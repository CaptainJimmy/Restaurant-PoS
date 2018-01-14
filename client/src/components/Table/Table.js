import React from 'react';
import { Col, Row, Grid, Jumbotron, Panel } from 'react-bootstrap';
import Aux from '../Hoc/Hoc'
import './Table.css';


const table = props => {

        return(
            <Grid fluid>
                <Grid>
                    <Jumbotron className="text-center">
                        <h1> Eat At Joes </h1>
                        <h2> Select a table to perform functions </h2>
                    </Jumbotron>
                    <Row>
                        {props.tables.map( (table)=>{
                        return (
                            <Col className="tablePanels" md={3} xs={2} key={table.name}>
                                <Panel className="tablePanels" onClick={()=> props.clicked(table.name)} bsStyle={ table.isOccupied? "danger" : "success" }>
                                    <Panel.Heading className="tablePanel" >
                                        <Panel.Title>
                                            <h2 className="text-center">{table.name}</h2 >
                                        {table.isOccupied ?  
                                            (
                                            // IS OCCUPIED RENDER
                                            <Aux>
                                                <h3 className="text-center"> Guests: {table.guestNumber} </h3>
                                                <h3 className="text-center"> Server: {table.server} </h3>
                                            </Aux>
                                            )
                                            :(
                                            // NOT OCCUPIED RENDER
                                                <h3 className="text-center"> Table Open </h3>)}
                                    </Panel.Title>
                                </Panel.Heading>
                            </Panel>
                        </Col>
                        )
                    })
                    }
                    </Row>
                </Grid>
            </Grid> 
            )
        }
export default table;

        