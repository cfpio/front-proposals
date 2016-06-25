class FormProfileController {

  constructor($timeout, $scope, $state) {
    'ngInject'

    this.$timeout = $timeout
    this.$scope = $scope
    this.$state = $state
  }

  onCancel() {
    this.reload()
  }

  onSubmit() {
    this.$timeout(() => {
      this.$scope.$broadcast('show-errors-check-validity')
      if (this.form.$valid) {
        this.user.save().then(() => {
          this.reload()
        })
      }
    })
  }

  reload() {
    this.$state.reload()
  }
}

export const FormProfile = {
  controller: FormProfileController,
  templateUrl: 'app/components/profile/form-profile.html',
  bindings: {
    user: '='
  }
}
