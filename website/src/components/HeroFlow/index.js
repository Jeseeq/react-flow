import React from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  Controls,
} from 'react-flow-renderer';

const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
const offsetLeft = windowWidth < 1200 ? 0 : (windowWidth - 1200) / 2;

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input node' },
    sourcePosition: 'right',
    position: { x: 50, y: 5 },
    style: { width: 100 },
  },
  {
    id: '2',
    data: { label: 'Default node' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 550, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Styled node' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 850, y: 40 },
    style: {
      background: '#4C497E',
      color: '#fff',
      border: '1px solid #222138',
    },
  },
  {
    id: '4',
    data: { label: 'Output node' },
    targetPosition: 'left',
    sourcePosition: 'right',
    position: { x: 950, y: 160 },
    type: 'output',
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
];

const onLoad = (rf) => rf.fitView();

export default () => {
  return (
    <ReactFlowProvider>
      <ReactFlow
        elements={initialElements}
        zoomOnScroll={false}
        onLoad={onLoad}
      >
        <Background />
        <Controls showInteractive={false} />
      </ReactFlow>
    </ReactFlowProvider>
  );
};
