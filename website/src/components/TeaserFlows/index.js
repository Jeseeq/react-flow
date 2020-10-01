import React from 'react';

import TeaserFlow from 'components/TeaserFlow';

const elementsA = [
  {
    id: '1',
    type: 'input',
    position: {
      x: 200,
      y: 5,
    },
    data: {
      label: 'Input',
    },
  },
  {
    id: '2',
    position: {
      x: 0,
      y: 150,
    },
    data: {
      label: 'Default',
    },
  },
  {
    id: '3',
    position: {
      x: 400,
      y: 150,
    },
    data: {
      label: 'Default',
    },
  },
  {
    id: '4',
    type: 'output',
    position: {
      x: 200,
      y: 300,
    },
    data: {
      label: 'Output',
    },
  },
  {
    id: 'e1',
    source: '1',
    target: '2',
  },
  {
    id: 'e2',
    source: '1',
    target: '3',
  },
  {
    id: 'e3',
    source: '2',
    target: '4',
  },
  {
    id: 'e4',
    source: '3',
    target: '4',
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
          onLoad: (rf) => rf.fitView(),
        }}
        withControls
        fitView
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
