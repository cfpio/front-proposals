class FormLoginController {
  constructor($state) {
    'ngInject'

    this.injected = { $state }

    this.credentials = {
      login: '',
      password: ''
    }
  }
  onSubmit(event) {
    event.preventDefault()

    const { $state } = this.injected

    $state.go('authenticated.profile')
  }
}

export const FormLogin = {
  controller: FormLoginController,
  templateUrl: 'app/components/login/form-login.html'
}
