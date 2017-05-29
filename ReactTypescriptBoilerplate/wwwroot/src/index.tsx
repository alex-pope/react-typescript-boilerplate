import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StarterTemplateNav } from './components/StarterTemplateNav';
import { StarterTemplateContent } from './components/StarterTemplateContent';
ReactDOM.render(
    <StarterTemplateNav />,
    document.getElementById('nav-root')
);
ReactDOM.render(
    <StarterTemplateContent />,
    document.getElementById('container-root')
);