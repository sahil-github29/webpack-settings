import './index.scss';

import addfile from './add-file';
import HelloWorldButton from './components/hello-world-button';

const helloWorldButton = new HelloWorldButton();

// add hellow world to the DOM
helloWorldButton.render();

addfile();
