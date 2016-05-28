class ViewHomeController {
  constructor(AppConfig) {
    'ngInject'
    this.config = AppConfig
  }
}

export const ViewHome = {
  controller: ViewHomeController,
  templateUrl: 'app/components/home/view-home.html'
}
