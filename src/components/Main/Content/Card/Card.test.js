import React from 'react';
import JobCard from './Card';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import logo from '../../../../img/no-logo.png';
import { connect, Provider } from 'react-redux';
import store from '../../../../redux/store';

const obj = {
    cardIndex: 4,
    company: "Реград",
    created: "сегодня",
    jobId: "42151662",
    location: "Москва",
    logo,
    title: "Главный бухгалтер",
    type: "Полный день"
};

let mapStateToProps = () => {
    return {
        cardIndex: 4,
        company: "Реград",
        created: "сегодня",
        jobId: "42151662",
        location: "Москва",
        logo,
        title: "Главный бухгалтер",
        type: "Полный день"
    }
}

const JobCardContainer = connect(mapStateToProps)(JobCard)
const TestCard = () => {
    return <Provider store={store}>
        <JobCardContainer />
    </Provider>
}

test('card component should create company name from props', () => {
    const component = render(<TestCard />);
    let titleElement = component.getByText(obj.company);
    expect(titleElement).toHaveClass('companyName');
});

test('card component should create company logo from props', () => {
    const component = create(<TestCard />);
    const root = component.root;
    let logoElement = root.findAllByType('img');
    expect(logoElement).toBeTruthy();
});

test('card component should create job title from props', () => {
    const component = render(<TestCard />);
    let jobTitleElement = component.getByText(obj.title);
    expect(jobTitleElement).toHaveClass('positionName');
});

test('card component should create job type from props', () => {
    const component = render(<TestCard />);
    let jobTypeElement = component.getByText(obj.type);
    expect(jobTypeElement).toBeTruthy();
});

test('card component should create job location from props', () => {
    const component = render(<TestCard />);
    let jobLocationElement = component.getByText(obj.location);
    expect(jobLocationElement).toBeTruthy();
});

test('card component should create job creation from props', () => {
    const component = render(<TestCard />);
    let jobCreatedElement = component.getByText(obj.created);
    expect(jobCreatedElement).toBeTruthy();
});
