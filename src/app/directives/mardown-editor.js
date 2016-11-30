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
    controller: function(marked) {
      'ngInject'

      this.generatePreview = (source) => {
        this.preview = marked(source)
      }
    },
    controllerAs: '$ctrl'
  }
}
