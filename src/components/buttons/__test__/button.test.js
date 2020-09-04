import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);

// uses @testing-library/react
it('renders without crashing',  () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

//uses @testing0library/jest-dom/extend-expect
it('renders button correctly', () => {
    const { getByTestId } = render(<Button label="click me please"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})

it('renders button correctly', () => {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})

// uses renderer to create a snapshot of the Button component
it('matches snapshot', () => {
    // creates snapshot and converts to JSON
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    // expects the snapshot to match the saved snapshot code found in the __snapshot__ folder
    expect(tree).toMatchSnapshot()
})