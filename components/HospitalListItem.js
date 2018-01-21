import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';


export default class HospitalListItem extends Component {
	render() {
		return (
			<ListItem
				title={this.props.name}
				subtitle={this.props.distance}
			/>
		);
	}
}
