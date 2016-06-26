/**
 * Handle the 'has-error' classname on form-group.
 */
export function showErrors($timeout, $interpolate) {
  'ngInject'

  return {
    restrict: 'A',
    require: '?^form',
    link: linkFn
  }

  function getInputElement(element, options) {
    var inputEl
    if (options && options.inputName) {
      inputEl = element[0].querySelector('[name="' + options.inputName + '"]')
    } else {
      inputEl = element[0].querySelector('[name]')
      if (!inputEl) {
        throw 'show-errors element has no child input elements with \'name\' attribute'
      }
    }

    if (inputEl) {
      return angular.element(inputEl)
    }
  }

  function getInputName(scope, inputElement, options) {
    if (options && options.inputName) {
      return options.inputName
    }

    var inputName = $interpolate(inputElement.attr('name') || '')(scope)
    if (!inputName) {
      throw 'show-errors element has no child input elements with \'name\' attribute or no name in options'
    }
    return inputName
  }

  function getFormCtrl(scope, ctrl, options) {
    if (ctrl) {
      return ctrl
    }

    var formCtrl
    if (options && options.form) {
      formCtrl = scope.$eval(options.form)
    }

    if (!formCtrl) {
      throw 'No FormController accessible in parent or defined in options \'form\''
    }

    return formCtrl
  }

  function linkFn(scope, el, attrs, ctrl) {
    var inputName, inputElement, options, formCtrl, deregisterInit, deregisterPristine

    options = scope.$eval(attrs.showErrors)
    inputElement = getInputElement(el, options)
    inputName = getInputName(scope, inputElement, options)
    formCtrl = getFormCtrl(scope, ctrl, options)

    deregisterInit = scope.$watch(function() {
      return formCtrl[inputName]
    }, function(inputCtrl) {
      if (inputCtrl) {
        deregisterInit()

        if (inputCtrl.$pristine) {
          deregisterPristine = scope.$watch(function() {
            return formCtrl[inputName].$pristine
          }, function(pristine) {
            if (!pristine) {
              deregisterPristine()
              watchErrors()
            }
          })
        } else {
          watchErrors()
        }
      }
    })

    function watchErrors() {
      console.log('Start watching for validity on input ', inputName)
      toggleClasses(formCtrl[inputName].$invalid)
      scope.$watch(function() {
        return formCtrl[inputName].$invalid
      }, function(invalid) {
        toggleClasses(invalid)
      })
    }

    scope.$on('show-errors-check-validity', function(event, opts) {
      if (shouldAcceptEvent(event, opts)) {
        return toggleClasses(formCtrl[inputName].$invalid)
      }
    })
    scope.$on('show-errors-reset', function(event, opts) {
      if (shouldAcceptEvent(event, opts)) {
        return $timeout(function() {
          console.log('Reset show-errors done')
          el.removeClass('has-error')
        }, 0, false)
      }
    })

    function shouldAcceptEvent(event, opts) {
      return angular.isUndefined(opts) || ((angular.isUndefined(opts.formName) || formCtrl.$name === opts.formName) &&
        (angular.isUndefined(opts.inputName) || inputName === opts.inputName))
    }

    function toggleClasses(invalid) {
      el.toggleClass('has-error', invalid)
    }

  }
}
