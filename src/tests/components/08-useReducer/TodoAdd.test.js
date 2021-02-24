import { shallow } from 'enzyme';
import React from 'react';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        />
    );

    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('NO debe de llamar handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        // console.log( formSubmit );
        formSubmit({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);

    });

    test('Debe de llamar la función handleAddTodo', () => {
        
        const descripcion = 'Aprender React';
        const cajaTxt = wrapper.find('input').simulate('change', {
            target: {
                value: descripcion,
                name: 'description'
            }
        });
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1); //Se llamó una vez
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) ); // { }
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number), //Cualquier número
            desc: descripcion,
            done: false
        });

        expect( wrapper.find('input').prop('value') ).toBe('');

    });
    
    
});

