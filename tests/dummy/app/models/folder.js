import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr(),

  parent: DS.belongsTo('folder', { inverse: 'folders' }),
  folders: DS.hasMany('folder', { inverse: 'parent' }),
  files: DS.hasMany('file', { inverse: 'folder' })
});
