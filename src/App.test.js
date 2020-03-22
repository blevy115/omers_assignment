import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders Card if status equals pass', () => {
  const testCardInfo =  {
    status: "pass",
    data: [
      {}
    ]
  };
  const { queryByTestId } = render(<App cardInfo={testCardInfo}/>);
  const personalInformation = queryByTestId("Personal Information");
  expect(personalInformation).toBeDefined();
});

test('Renders Error if status not equal to pass', () => {
  const testCardInfo =  {
    status: "fail",
    data: [
      {}
    ]
  };
  const { queryByTestId } = render(<App cardInfo={testCardInfo}/>);
  const personalInformation = queryByTestId("Personal Information");
  const errorMessage = queryByTestId("There was an error loading the data");
  expect(errorMessage).toBeDefined();
  expect(personalInformation).toBeNull();
});
