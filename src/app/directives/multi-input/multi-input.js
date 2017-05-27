export const multiInput = () => {
  'ngInject'

  return {
    restrict: 'E',
    replace: false,
    scope: {
      values: '=ngModel',
      formName: '@name',
      inputType: '@type',
      inputPlaceholder: '@placeholder',
      maxCount: '@max',
      addButtonTitle: '@',
      removeButtonTitle: '@'
    },
    template: require('./multi-input.html'),
    controller($scope) {
      'ngInject'

      $scope.maxCount = $scope.maxCount ? Number($scope.maxCount) : -1

      this.addValue = (value) => {
        if (!$scope.values) {
          $scope.values = []
        }
        if ($scope.values.length < $scope.maxCount) {
          $scope.values.push(value)
        }
      }

      this.removeValue = (index) => {
        $scope.values.splice(index, 1)
      }

      this.validationClass = (index) => {
        const input = $scope[$scope.formName][$scope.formName + '_' + index]
        if (input.$dirty) {
          return input.$invalid ? 'has-error' : 'has-success'
        }
      }
    },
    controllerAs: '$ctrl'
  }
}
