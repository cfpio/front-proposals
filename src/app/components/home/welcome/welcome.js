class WelcomeController {
  constructor(AppConfig) {
    'ngInject'
    this.config = AppConfig
  }
}

export const Welcome = {
  controller: WelcomeController,
  templateUrl: 'app/components/home/welcome/welcome.html'
}
