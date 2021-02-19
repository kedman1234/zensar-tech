import Controller from '@ember/controller';
import {set, computed } from '@ember/object'

export default Controller.extend({
  filterData: computed(function(){
    return this.model.data.filter((data)=> data.productCategory === this.selectedCategory) || [];
  }),
  selectedCategory: computed(function(){
    return this.model.productCategory[0] || '';
  }),
  actions: {
    filterData(category) {
      set(this, 'selectedCategory',category);
      set(this, 'filterData', this.model.data.filter((data)=> data.productCategory === category));
    }
  }
});
