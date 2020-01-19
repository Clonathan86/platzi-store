import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
    const payload = ProductMock;

    test('addToCart Action', () => {
        const expected = {
            type: 'ADD_TO_CART',
            payload,
        };
        expect(actions.addToCart(ProductMock)).toEqual(expected);
    });

    test('removeFromCart Action', () => {
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload,
        };
        expect(actions.removeFromCart(ProductMock)).toEqual(expected);
    });
});
