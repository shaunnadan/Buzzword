import React from 'react'
import renderer from 'react-test-renderer'

import Home from './Home'

it('renders without crashing', () => {
  renderer.create(<Home />).toJSON()
})

it('repeats no buzzwords', () => {
  const foo = renderer.create(<Home />).toJSON()
  const words = foo.children[1].children.map(i =>
    i.children ? i.children[0] : null
  )
  const duplicates = words.reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el)
    return acc
  }, [])

  expect(duplicates.length).toEqual(0)
})
