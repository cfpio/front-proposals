class FormProfileController {

  constructor(Restangular, $timeout, $scope, $state) {
    'ngInject'

    this.$timeout = $timeout
    this.$scope   = $scope
    this.$state   = $state
    this.rest     = Restangular
    this.rest.one('users/me').get().then((user) => {
      this.model = user
    })
  }

  onCancel() {
    this.reload()
  }

  onSubmit() {
    this.$timeout(() => {
      this.$scope.$broadcast('show-errors-check-validity')
      if (this.form.$valid) {
        this.model.put().then(() => {
          this.reload()
        })
      }
    })
  }

  reload() {
    this.$state.go(this.$state.current, {}, {
      reload: true
    })
  }
}

export const FormProfile = {
  controller: FormProfileController,
  templateUrl: 'app/components/profile/form-profile.html'
}
