import React from 'react';

import TeaserFlow from 'components/TeaserFlow';

const elementsA = [
  {
    id: '123',
    position: {
      x: 0,
      y: 0,
    },
    data: {
      label: 'Test',
    },
  },
];

const elementsB = [
  {
    id: '123',
    position: {
      x: 200,
      y: 200,
    },
    data: {
      label: 'Test 1',
    },
  },
];

const elementsC = [
  {
    id: '123',
    position: {
      x: 50,
      y: 300,
    },
    data: {
      label: 'Test 2',
    },
  },
];

export default () => {
  return (
    <>
      <TeaserFlow
        title="Easy to use"
        description="Seamless zooming & panning behaviour and single and multi-selections of elements."
        flowProps={{
          elements: elementsA,
        }}
      />
      <TeaserFlow
        title="Customizable"
        description="Different node and edge types and support for custom nodes with multiple handles and custom edges."
        textPosition="right"
        flowProps={{
          elements: elementsB,
        }}
      />
      <TeaserFlow
        title="Easy to use"
        description="Seamless zooming & panning behaviour and single and multi-selections of elements."
        flowProps={{
          elements: elementsC,
        }}
      />
    </>
  );
};
