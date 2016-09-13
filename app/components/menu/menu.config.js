/**
 * Created by diego on 12-09-16.
 */
export default function($stateProvider) {
  'ngInject';
  $stateProvider.decorator('views', (state, parent) => {
    let views = parent(state);
  if (state.name === 'root') {
    views['menu@root'] = {
      template: require("./menu.html")
    };
  }
  return views;
});
}
