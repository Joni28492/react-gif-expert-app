import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(()=>{
        jest.clearAllMocks();//limpia todas las simulaciones
        wrapper = shallow( <AddCategory setCategories={setCategories} />);
    })

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value='Hola Mundo';//esto es lo que mandamos a la caja
        input.simulate('change',{
            target: {value}
        })

        expect (wrapper.find('p').text().trim()).toBe(value);
    });


    test('NO debe de postear la informacion con submit ', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });


    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value='Hola Mundo';
        //1. simular el inputChange
        wrapper.find('input').simulate('change', {target: { value } });
        //2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //3. llamar el setCategories
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        // expect(setCategories).toHaveBeenCalledTimes(2);
        
        //4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    

})
