import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';
import HospitalScreen from '../screens/HospitalScreen';

const RootStackNavigator = StackNavigator(
	{
		main: {
			screen: HomeScreen,
		},
		filters: {
			screen: FilterScreen
		},
		hospital: {
			screen: HospitalScreen,

		}
	},
	{
		navigationOptions: () => ({
			headerTitleStyle: {
				fontWeight: 'normal',
			},
		}),
		lazy: true,
		swipeEnabled: false
	}
);

export default class RootNavigator extends React.Component {
	render() {
		return <RootStackNavigator />;
	}
}
