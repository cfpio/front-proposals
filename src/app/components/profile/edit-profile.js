const EditProfileController = function($timeout, $scope, $state, $translate) {
  'ngInject'

  this.availableLanguages = $translate.getAvailableLanguageKeys()

  this.save = (user) => {
    this.user.save().then(() => {
      $state.go('welcome')
    })
  }

  this.updateLanguage = (lang) => {
    $translate.use(lang)
  }

  this.tshirtModels = ['MALE', 'FEMALE']

  this.tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXL']
}

export const EditProfile = {
  controller: EditProfileController,
  templateUrl: 'app/components/profile/edit-profile.html',
  bindings: {
    user: '='
  }
}
