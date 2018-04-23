import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from './components/home';
import Search from './components/search';
import Detail from './components/detail';
import Info from './components/info';
import Bookmark from './components/bookmark';

const HomeStack = StackNavigator({
  Home: { screen: Home }
});

const SearchStack = StackNavigator({
  Search: { screen: Search },
  Detail: { screen: Detail }
});

const InfoStack = StackNavigator({
  Info: { screen: Info }
});

const BookmarkStack = StackNavigator({
  Bookmark: { screen: Bookmark }
});

const RootStack = TabNavigator(
  {
    Home: { screen: HomeStack },
    Search: { screen: SearchStack },
    Info: { screen: InfoStack },
    Bookmark: { screen: BookmarkStack },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
