import {EditProposal} from './edit-proposal'

export const proposal = angular.module('io.cfp.front.components.proposal', [
  'ui.router',
  'io.cfp.front.services.resource'
])
  .component('editProposal', EditProposal)

  .config(($stateProvider) => {

    $stateProvider
      .state('proposal', {
        abstract: true,
        url: '/proposal',
        parent: 'home.secured',
        template: '<ui-view></ui-view>'
      })
      .state('proposal.new', {
        url: '/new',
        component: 'editProposal',
        resolve: {
          proposal: (Drafts) => {
            return Drafts.restangularize({})
          }
        }
      })
      .state('proposal.edit', {
        url: '/{id:int}/edit',
        component: 'editProposal',
        resolve: {
          proposal: (Drafts, $stateParams) => Drafts.one($stateParams.id).get()
        }
      })
  })
