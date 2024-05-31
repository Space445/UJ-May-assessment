import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
  plugins: [
    handlebars({
      context: data
    }),
  ],
};
