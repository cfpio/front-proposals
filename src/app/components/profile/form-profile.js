class FormProfileController {

  constructor($timeout, $scope, $state, $translate) {
    'ngInject'

    this.$timeout = $timeout
    this.$scope = $scope
    this.$state = $state
    this.$translate = $translate

    this.availableLanguages = $translate.getAvailableLanguageKeys()
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

  updateLanguage(lang) {
    this.$translate.use(lang)
  }
}

export const FormProfile = {
  controller: FormProfileController,
  templateUrl: 'app/components/profile/form-profile.html',
  bindings: {
    user: '='
  }
}
