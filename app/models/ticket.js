import DS from 'ember-data';

export default DS.Model.extend({
  client: DS.attr(),
  description: DS.attr(),
  time: DS.attr()
});
