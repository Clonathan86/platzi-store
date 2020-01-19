import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);

    test('Render of Footer component', () => {
        expect(footer.length).toEqual(1);
    });

    test('Title render', () => {
        expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
    });
});

describe('Footer Snapshot', () => {
    test('Component UI check', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});
