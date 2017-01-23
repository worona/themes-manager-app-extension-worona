import * as components from './components';
import * as sagas from './sagas';
import * as deps from './deps';

const locales = lang => require(`./locales/${lang}.json`);

export {
  components,
  locales,
  sagas,
  deps,
};
