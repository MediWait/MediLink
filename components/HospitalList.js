import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Colors from '../constants/Colors';
import HospitalListItem from './HospitalListItem';
import { hospitals } from './list.js';

export default class HospitalList extends Component {
	render() {
		return (
			<List containerStyle={styles.container}>
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
		marginTop: 0,
		borderColor: Colors.divider
	}
});
