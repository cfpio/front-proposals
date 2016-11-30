export const markdownEditor = () => {
  'ngInject'

  return {
    restrict: 'A',
    scope: {
      source: '=ngModel',
      name: '@',
      rows: '@'
    },
    templateUrl: 'app/directives/markdown-editor.html',
    controller: function($scope, $sanitize, marked) {
      'ngInject'

      this.sanitize = (source) => {
        $scope.source = $sanitize(source).replace(/&#10;/g, '\n') // workaround to keep line returns
      }

      this.generatePreview = (source) => {
        this.preview = marked(source)
      }
    },
    controllerAs: '$ctrl'
  }
}
