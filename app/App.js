import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Home from './containers/home'
import Search from './containers/search'
import Detail from './containers/detail'
import Info from './containers/info'
import Bookmark from './containers/bookmark'
import { Provider } from 'mobx-react'
import stores from './boot'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const HomeStack = StackNavigator({
  Home: { screen: Home }
})

const SearchStack = StackNavigator({  
  Search: { screen: Search },
  Detail: { screen: Detail }
})

const InfoStack = StackNavigator({
  Info: { screen: Info }
})

const BookmarkStack = StackNavigator({
  Bookmark: { screen: Bookmark }
})

const RootStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Search: { screen: SearchStack },
    Bookmark: { screen: BookmarkStack },
    Info: { screen: InfoStack }
  },
  {
    initialRouteName: 'Search',
    animationEnabled: true,
    swipeEnabled: true
  }
)

export default class App extends React.Component {
  render () {
    return (
      <Provider {...stores}>
        <RootStack />
      </Provider>
    )
  }
}
