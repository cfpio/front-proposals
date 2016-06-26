class TopMenuController {
  constructor(AuthenticationService) {
    'ngInject'

    this.authService = AuthenticationService
  }
}

export const TopMenu = {
  controller: TopMenuController,
  templateUrl: 'app/components/home/top-menu/top-menu.html',
  bindings: {
    user: '='
  }
}
