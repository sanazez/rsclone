import React from 'react';
import SimilarJobs from './SimilarJobs';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import original from '../../../img/no-logo.png';

const val = {
    id: 135,
    employer: {
        logo_urls: {
            original
        }
    },
    name: 'worker',
    area: {
        name: 'Minsk'
    },
    published_at: "2021-01-22T11:24:14+0300"
};

test('similar jobs component should create job title from props', () => {
    const component = render(<SimilarJobs onClick={() => { }} similarJob={val} />);
    let titleElement = component.getByText(val.name);
    expect(titleElement).toHaveClass('similarJobTitle');
});

test('similar jobs component should create job location from props', () => {
    const component = render(<SimilarJobs onClick={() => { }} similarJob={val} />);
    let locationElement = component.getByText(val.area.name);
    expect(locationElement).toBeTruthy();
});

test('similar jobs component should create logo element from props', () => {
    const component = create(<SimilarJobs onClick={() => { }} similarJob={val} />);
    const root = component.root;
    let logoElement = root.findAllByType('img');
    expect(logoElement).toBeTruthy();
});

test('similar jobs component should call function from props on click event', () => {
    let counter = 0;
    const component = render(<SimilarJobs onClick={() => { counter += 1 }} similarJob={val} />);
    let clickElement = component.getByTestId('click-button');
    fireEvent(
        clickElement,
        new MouseEvent('mousedown', {
          bubbles: true,
          cancelable: true,
        })
      )
    expect(counter).toBe(1);
});
