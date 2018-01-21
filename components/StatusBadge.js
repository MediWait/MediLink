import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import Colors from '../constants/Colors';

export default class StatusBadge extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={[styles.timeBadge, { backgroundColor: this.props.color }]}>
					<Icon
						name="timer"
						color={Colors.headerTextIcons}
					/>
					<Text style={styles.timeText}>
						{this.props.time}
					</Text>
				</View>
				<View style={styles.crowdBadge}>
					<Icon
						name="person"
						color={Colors.accent}
					/>
					<Text style={{ color: Colors.accent }}>
						{this.props.people}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	timeBadge: {
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 0,
		marginVertical: 0,
		marginRight: 10,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	crowdBadge: {
		padding: 0,
		margin:0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	timeText: {
		color: Colors.headerTextIcons
	}
});
