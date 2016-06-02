class WelcomeController {
  constructor(AppConfig, Restangular) {
    'ngInject'
    this.config = AppConfig

    Restangular.all('tracks').getList().then((tracks) => {
      this.tracks = tracks.filter(t => t.referenced)
    })
  }
}

export const Welcome = {
  controller: WelcomeController,
  templateUrl: 'app/components/home/welcome/welcome.html'
}
