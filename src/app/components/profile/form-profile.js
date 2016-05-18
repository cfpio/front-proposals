class FormProfileController {
  constructor() {
    'ngInject'

    this.model = {
      lastname: '',
      firstname: '',
      email: '',
      favorite_language: '',
      phone_number: '',
      business: '',
      bio: '',
      twitter_profile: '',
      google_profile: '',
      github_profile: ''
    }
  }
  onSubmit(event) {
    event.preventDefault()
  }
}

export const FormProfile = {
  controller: FormProfileController,
  templateUrl: 'app/components/profile/form-profile.html'
}
