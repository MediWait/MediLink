import { MapView } from 'expo';
import React, { Component } from 'react';
import { View } from 'react-native';
import {
	List,
	ListItem,
	Icon
} from 'react-native-elements';

import Colors from '../constants/Colors';

export default class HospitalScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		console.log(navigation.state.params.hospital);
		return {
			title: navigation.state.params.hospital.name,
			headerTintColor: Colors.headerTextIcons,
			headerStyle: {
				backgroundColor: Colors.primary,
				padding: 0,
				margin: 0,
				justifyContent: 'center',
			}
		};
	};

	render() {
		// const { hospital } = this.props.navigation.state;

		// console.log(hospital);
		return (
			<View>
				<List>
					<ListItem
						title="thing"
					/>
				</List>
			</View>
		);
	}
}
