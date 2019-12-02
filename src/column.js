import React from 'react';
import styled from 'styled-components'
import Task from './task';
import {Droppable, Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 300px;
    background-color: #f1f2f6;
    display:flex
    flex-direction: column;
`;

const Title= styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding : 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgreen' : 'inherit')};
    flex-grow: 1;
    min-height: 100px;
`;

export default class column extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.column.id} index={this.props.index}>
                { provided => (

                <Container {...provided.draggableProps} ref={provided.innerRef} >

                    <Title {...provided.dragHandleProps}>
                        {this.props.column.title}
                    </Title>
                        <Droppable droppableId={this.props.column.id} type="task">
                            {(provided, snapshot) => (
                                
                                <TaskList 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps} 
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    
                                        {this.props.tasks.map((task, index)=> (
                                        <Task key={task.id} task={task} index={index} />
                                        ))}
                                    {provided.placeholder}
                                </TaskList>
                            )}
                        </Droppable>               
                 </Container>

                )}
            </Draggable>
        );
    }
}

