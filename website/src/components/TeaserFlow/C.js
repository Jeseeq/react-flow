import React from 'react';

import TeaserFlow from 'components/TeaserFlow';

const defaultNodeOptions = {
  targetPosition: 'left',
  sourcePosition: 'right',
  style: {
    width: 50,
  },
};

const elements = [
  {
    id: 'input',
    type: 'input',
    position: {
      x: 0,
      y: 100,
    },
    data: {
      label: 'Input',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'A',
    position: {
      x: 150,
      y: 0,
    },
    data: {
      label: 'A',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'B',
    position: {
      x: 250,
      y: 0,
    },
    data: {
      label: 'B',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'C',
    position: {
      x: 350,
      y: 0,
    },
    data: {
      label: 'C',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'D',
    position: {
      x: 150,
      y: 200,
    },
    data: {
      label: 'D',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'E',
    position: {
      x: 250,
      y: 200,
    },
    data: {
      label: 'E',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'F',
    position: {
      x: 350,
      y: 200,
    },
    data: {
      label: 'F',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'output',
    type: 'output',
    position: {
      x: 500,
      y: 100,
    },
    data: {
      label: 'Output',
    },
    ...defaultNodeOptions,
  },
  {
    id: 'e1',
    source: 'input',
    target: 'A',
    type: 'step',
  },
  {
    id: 'e2',
    source: 'A',
    target: 'B',
    type: 'step',
  },
  {
    id: 'e3',
    source: 'B',
    target: 'C',
    type: 'step',
  },
  {
    id: 'e4',
    source: 'C',
    target: 'output',
    type: 'step',
  },
  {
    id: 'e5',
    source: 'input',
    target: 'D',
    type: 'step',
    animated: true,
  },
  {
    id: 'e6',
    source: 'D',
    target: 'E',
    type: 'step',
    animated: true,
  },
  {
    id: 'e7',
    source: 'E',
    target: 'F',
    type: 'step',
    animated: true,
  },
  {
    id: 'e8',
    source: 'F',
    target: 'output',
    type: 'step',
    animated: true,
  },
];

const flowProps = {
  elements,
  onLoad: (rf) => rf.fitView({ padding: 0.2 }),
};

export default () => (
  <TeaserFlow
    title="Additional Components"
    description="React Flow includes a MiniMap, Controls, Background and a FlowProvider you can use to access internal state outside the ReactFlow component."
    flowProps={flowProps}
    withControls
    withMinimap
    fitView
    linesBg
  />
);
