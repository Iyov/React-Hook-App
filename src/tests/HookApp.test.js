import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en <HookApp />', () => {
    
    test('Debe de mostrar el componente', () => {
        
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();

    });
    

});
