import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: 'Young Gatchell',
        account: '@yg',
        img: 'http://mrmrs.github.io/photos/p/2.jpg'
      },
      {
        name: 'Arnoldo Degraff',
        account: '@99xx88randomhandle',
        img: 'http://mrmrs.github.io/photos/p/3.jpg'
      },
      {
        name: 'Deirdre Lachance',
        account: '@@favfavfav',
        img: 'http://mrmrs.github.io/photos/p/4.jpg'
      },
      {
        name: 'Frederic Starner',
        account: '@hungryhippofanatic',
        img: 'http://mrmrs.github.io/photos/p/5.jpg'
      },
      {
        name: 'Cleveland Ridout',
        account: '@purethinking',
        img: 'http://mrmrs.github.io/photos/p/6.jpg'
      },
      {
        name: 'Leticia Fearon',
        account: '@retrofeels',
        img: 'http://mrmrs.github.io/photos/p/7.jpg'
      },
      {
        name: 'Ahmad Backer',
        account: '@ahmadBB',
        img: 'http://mrmrs.github.io/photos/p/10.jpg'
      },
      {
        name: 'Carlie Noakes',
        account: '@carnoakes99',
        img: 'http://mrmrs.github.io/photos/p/11.jpg'
      }
    ]
  }
});
