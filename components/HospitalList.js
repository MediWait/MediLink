import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-elements';

import Colors from '../constants/Colors';
import { hospitals } from './list.js';

export default class HospitalList extends Component {
	render() {
		return (
			<List containerStyle={styles.container}>
				{ hospitals.map((item) => this.props.renderItem(item)) }
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
