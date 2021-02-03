import React from 'react';
import { create } from 'react-test-renderer';
import PaginationControlled from './Pagination';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('pagination should contain particular number of elemets that depends on props', () => {
    const component = create(<PaginationControlled currentPage={15} pages={31} />);
    const root = component.root;
    let buttons = root.findAllByType('li');
    expect(buttons.length).toBe(9);
});

test('pagination should contain information from props', () => {
    const component = render(<PaginationControlled currentPage={15} pages={31} />);
    const activeBtn = component.getByText('15');
    expect(activeBtn.getAttribute('aria-current')).toBe('true');
});
