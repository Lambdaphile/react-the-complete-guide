import { useReducer } from 'react';

import { changeView } from './actions/views';
import { initialViews, viewReducer } from './reducers/views';

import ThemeContext from './contexts/theme';
import ViewsContext from './contexts/views';

import { Home } from '@containers';
import { Button } from '@components';
import * as Views from '@views';

function isCurrentView(viewName: string, currentViewName: string) {
  return viewName === currentViewName;
}

function App() {
  const [views, dispatchViews] = useReducer(viewReducer, initialViews);

  function getViewProps(viewName: string) {
    switch (viewName) {
      case 'Main':
        return {
          onClick: (viewName: string): any | undefined => {
            dispatchViews(changeView(viewName));
          },
        };
      case 'UserForm':
        return {};
      case 'FoodOrder':
        return {};
      case 'AdvancedFoodOrder':
        return {};
      default:
    }
  }

  function handleGetBack() {
    dispatchViews(changeView('Main'));
  }

  const [View] = Object.values(Views).filter(view =>
    isCurrentView(view.name, views.current)
  );
  const backBtn =
    View.name !== 'Main' ? (
      <Button type="button" onClick={handleGetBack}>
        {'<-'}
      </Button>
    ) : (
      <div />
    );

  return (
    <ThemeContext.Provider value={{}}>
      <Home>
        {backBtn}
        <ViewsContext.Provider value={{ views, dispatchViews }}>
          <View {...(getViewProps(View.name) as any)} />
        </ViewsContext.Provider>
      </Home>
    </ThemeContext.Provider>
  );
}

export default App;
