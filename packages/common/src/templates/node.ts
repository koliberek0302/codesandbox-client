import Template from './template';
import { decorateSelector } from '../utils/decorate-selector';

export default new Template(
  'node',
  'Node',
  'https://csb-bogdan.dev/docs/environment#container-environment',
  'node',
  decorateSelector(() => '#66cc33'),
  {
    showOnHomePage: true,
    main: true,
    netlify: false,
    popular: true,
    mainFile: ['/pages/index.vue', '/pages/index.js', '/src/pages/index.js'],
  }
);
