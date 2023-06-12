import React from 'react'
import Dropdown from './Dropdown'

const testFunctions = {
  onChange () {}
};

describe('<Dropdown />', () => {
  it('renders', () => {
    cy.mount(<Dropdown />)
  })
  it('When no options, will be disabled', () => {
    cy.mount(<Dropdown />)
    cy.get('button').should('have.attr', 'disabled')
  })
  it('When options, will be enabled', () => {
    const options = {
      one: {
        label: 'option one',
        value: 1
      }
    }
    cy.mount(<Dropdown options={options}/>)
    cy.get('button').should('not.have.attr', 'disabled')
  })
  it('Clicking option calls fn with value', () => {
    // Arrange
    const options = {
      one: {
        label: 'option one',
        value: 1
      }
    }
    cy.stub(testFunctions, 'onChange').as('stubbed')

    // Act
    cy.mount(<Dropdown options={options} onChange={testFunctions.onChange}/>)

    // Assert
    cy.get('button').click().then(() => {
      cy.get('[data-cy-root=""] > :nth-child(1) > div > button').click().then(() => {
        cy.get('@stubbed').should('have.been.calledWithMatch', 1);
      })
    })

  })
})
