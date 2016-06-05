/**
 * Encapsulate the jQuery plugin https://github.com/jackocnr/intl-tel-input
 */
export function inputTel() {
  'ngInject'

  // Arbitrary number.
  // Below a certain length, the validation does not work because intlTelInput does not return a number.
  // In this case, we reset the input field on blur.
  // Above a certain length, the validation does not work either because intlTelInput does not return a number.
  // In this case, we consider the field not empty and fails the validation.
  var minLength = 8

  return {
    restrict: 'E',
    template: '<input type="text" id="{{ fid }}" class="form-control input-box-radius" ng-disabled="disabled" />',
    require: 'ngModel',
    scope: {
      fid: '@',
      disabled: '=?ngDisabled',
      model: '=ngModel'
    },
    link: link
  }

  function link(scope, elem, attrs, ngModelController) {
    const input = elem.find('input')

    ngModelController.$render = function() {
      if (ngModelController.$isEmpty(ngModelController.$viewValue)) {
        input.val('')
      }
      else {
        input.intlTelInput('setNumber', ngModelController.$viewValue)
      }
    }

    ngModelController.$validators.phoneNumber = function(modelValue, viewValue) {
      return (ngModelController.$isEmpty(viewValue) && input.val().length < minLength) || isNumberValid()
    }

    input.on('keypress keydown keyup change blur', onChange)

    const options = {
      autoFormat: true,
      formatOnInit: true,
      separateDialCode: false,
      initialCountry: 'fr',
      utilsScript: '',
      preferredCountries: ['fr', 'de', 'gb', 'us'],
      nationalMode: false
    }
    input.intlTelInput(options)

    scope.$on('destroy', function() {
      input.intlTelInput('destroy')
      input.off()
    })

    function onChange(event) {
      const number = getNumber()
      ngModelController.$setViewValue(number, event.type)
      if (event.type === 'blur') {
        if ((!number || !number.length) && input.val().length < minLength) {
          input.val('')
        }
        else {
          // We set the formatted number
          input.val(number)
        }
      }
    }

    function getNumber() {
      return input.intlTelInput('getNumber', 1)
    }

    function isNumberValid() {
      return input.intlTelInput('isValidNumber')
    }
  }
}
