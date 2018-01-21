import React from 'react';
import { View } from 'react-native';
import { Header, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import FilterContent from '../components/FilterContent';

export default class FilterScreen extends React.Component {
	static navigationOptions = {
		title: 'Filtres',
		headerTintColor: Colors.headerTextIcons,
		headerStyle: {
			backgroundColor: Colors.primary,
			padding: 0,
			margin: 0,
			justifyContent: 'center',
		}
	};

	render() {
		return (
			<View style = {styles.container}>

				<FilterContent
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.headerTextIcons
	}
});
