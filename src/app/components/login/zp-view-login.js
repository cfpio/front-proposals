class ViewLoginController {
  constructor($scope, $state, ZetaPushClient) {
    'ngInject'

    this.$state = $state
    this.$scope = $scope
    this.client = ZetaPushClient

    this.error = {}
    this.credentials = {
      login: 'root',
      password: 'root'
    }
  }

  onSubmit(event) {
    event.preventDefault()

    const { $scope, $state, client, credentials } = this

    this.error = {}

    const onFailedHandshake = (error) => {
      console.debug('ViewLoginController::onFailedHandshake', error)
      this.error.failed = true
    }
    const onSuccessfulHandshake = (authentication) => {
      console.debug('ViewLoginController::onSuccessfulHandshake', authentication)
      $state.go('authenticated.dashboard')
    }
    const onConnectionClosed = () => {
      console.debug('ViewLoginController::onConnectionClosed')
      client.connect()
    }
    const handler = client.addConnectionStatusListener({
      onFailedHandshake, onSuccessfulHandshake, onConnectionClosed
    })
    $scope.$on('$destroy', () => {
      console.debug('ViewLoginController::$destroy')
      client.removeConnectionStatusListener(handler)
    })

    client.setCredentials(credentials)
    client.disconnect()
  }
}

export const zpViewLogin = {
  controller: ViewLoginController,
  templateUrl: 'app/components/login/zp-view-login.html'
}
