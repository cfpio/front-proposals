class NavbarController {
  constructor(moment) {
    'ngInject'

    // "this.creationDate" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow()
  }
}

export const NavbarDirective = () => {
  'ngInject'

  return {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  }
}
