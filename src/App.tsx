import { useReducer } from 'react'

import { changeView } from './actions/views'
import { initialViews, viewReducer } from './reducers/views'

import { Home } from '@containers'
import * as Views from '@views'

function isCurrentView(viewName: string, currentViewName: string) {
  return viewName === currentViewName
}

function App() {
  const [views, dispatchViews] = useReducer(viewReducer, initialViews)

  function getViewProps(viewName: string) {
    switch (viewName) {
      case 'Main':
        return {
          onClick: (viewName: string) => {
            dispatchViews(changeView(viewName))
            alert(viewName)
          }
        }
      case 'UserForm':
      case 'FoodOrder':
      case 'AdvancedFoodOrder':
      default:
    }
  }

  const [View] = Object.values(Views).filter(({ name }) =>
    isCurrentView(name, views.current)
  )

  return (
    <Home>
      <View {...getViewProps(View.name)} />
    </Home>
  )
}

export default App
