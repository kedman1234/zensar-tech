import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
   return fetch('./products.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let productCategory = data.map((value)=>{
        return value.productCategory
      }).filter((value, index, self) => {
        return self.indexOf(value) === index;
      })
      return RSVP.hash({
        productCategory,
        data: data
      })
      
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('err', err)
      // Do something for an error here
    })
  }
});
