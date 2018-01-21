import React from 'react';
import { View } from 'react-native';
import { Header, StyleSheet } from 'react-native';
import FilterContent from '../components/FilterContent';

export default class FilterScreen extends React.Component {
	static navigationOptions = {
		title: 'Filtres',
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
		flex: 1
	}
})