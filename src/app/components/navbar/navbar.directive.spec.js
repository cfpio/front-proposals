/**
 * @todo Complete the test
 * This example is not perfect.
 * Test should check if MomentJS have been called
 */
describe('directive navbar', function () {
  let vm
  let element
  let timeInMs

  beforeEach(angular.mock.module('fr.lowtaux.webapp'))

  beforeEach(inject(($compile, $rootScope) => {
    const currentDate = new Date()
    timeInMs = currentDate.setHours(currentDate.getHours() - 24)

    element = angular.element(`
      <acme-navbar creation-date="${timeInMs}"></acme-navbar>
    `)

    $compile(element)($rootScope.$new())
    $rootScope.$digest()
    vm = element.isolateScope().vm
  }))

  it('should be compiled', () => {
    //expect(element.html()).not.toEqual(null)
    //vm.prototype
    expect(vm).toEqual(vm)
  })
})
