class TopMenuController {
  constructor(AppUser, AuthenticationService) {
    'ngInject'

    this.user = AppUser
    this.authService = AuthenticationService
  }
}

export const TopMenu = {
  controller: TopMenuController,
  templateUrl: 'app/components/home/top-menu/top-menu.html'
}
