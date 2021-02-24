import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Francisco',
        email: 'francisco.barrientos@gmail.com'
    };

    test('Debe de retornar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm() );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( {} );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    });

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Daniel'
                }
            });
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Daniel' } );

    });

    test('Debde de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Daniel'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );

    })
    
    
    
    
});
