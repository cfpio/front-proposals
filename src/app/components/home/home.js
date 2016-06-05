class HomeController {
  constructor(AppConfig, Restangular) {
    'ngInject'
    this.config = AppConfig

    Restangular.all('tracks').getList().then((tracks) => {
      this.tracks = tracks.filter(t => t.referenced)
    })
  }
}

export const Home = {
  controller: HomeController,
  templateUrl: 'app/components/home/home.html'
}
