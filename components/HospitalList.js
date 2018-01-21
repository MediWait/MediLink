import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import HospitalListItem from './HospitalListItem';
import { hospitals } from './list.json';

export default class HospitalList extends Component {
	render() {
		return (
			<List>
				{
					hospitals.map((item) => (
						<HospitalListItem
							key={item.id}
							name={item.name}
							distance={item.distance}
						/>
					))
				}
			</List>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
