import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      var params = {
        client: this.get('client'),
        description: this.get('description'),
        time: this.get('time')
      };
      this.sendAction('save', params);
    }
  }
});
