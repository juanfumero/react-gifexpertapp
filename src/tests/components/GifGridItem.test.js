import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Mi titulo';
    const url = 'http://localhost:3000';

    let wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    beforeEach( () => {

        wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    })
 
    test('debe de mostrar <GifGridItem /> correctamente', () => {

         expect( wrapper ).toMatchSnapshot();
 
    });

    test('debe de tener un párrafo con el title', () => {

         const p = wrapper.find('p');
         expect( p.text().trim() ).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
   });

   test('debe de tener animate__animated', () => {

        const div = wrapper.find('div');
        const className = div.props().className;
        expect( className.includes('animate__animated') ).toBe(true);

    });

 });