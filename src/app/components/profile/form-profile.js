class FormProfileController {
  constructor(Restangular) {
    'ngInject'

    Restangular.one('users/me').get().then((user) => {
      this.model = user
    })
  }
  onSubmit(event) {
    event.preventDefault()
  }
}

export const FormProfile = {
  controller: FormProfileController,
  templateUrl: 'app/components/profile/form-profile.html'
}
