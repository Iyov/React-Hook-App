import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from '../../fixtures/demoTodos';

const todo = demoTodos[0];

describe('Pruebas en <TodoListItem />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    let wrapper = shallow( 
        <TodoListItem 
            todo={ todo } 
            index={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    // beforeEach( () => {
    //     jest.clearAllMocks();
    //     wrapper = shallow( 
    //         <TodoListItem 
    //             todo={ todo } 
    //             index={ 0 }
    //             handleDelete={ handleDelete }
    //             handleToggle={ handleToggle }
    //         />
    //     );
    // });

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de llamar la función handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( todo.id );

    });

    test('Debe de llamar la función handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( todo.id );

    });

    test('Debe de mostrar el texto correctamente <p />', () => {

        const todoText = wrapper.find('p').text().trim();
        expect( todoText ).toEqual( '1. '+todo.desc );

    });

    test('Debe de tener la clase compete si el TODO.done = true', () => {
        
        todo.done = true;
        wrapper = shallow( 
            <TodoListItem 
                todo={ todo }
            />
        );
        expect( wrapper.find('p').hasClass('complete') ).toBe(true);

    });
    
});
