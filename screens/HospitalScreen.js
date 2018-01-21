import { MapView } from 'expo';
import React, { Component } from 'react';
import { View } from 'react-native';
import {
	List,
	ListItem,
	Icon
} from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Colors from '../constants/Colors';

class HospitalScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Thing',
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
		console.log(this.props.hospital);
		return (
			<View>
				<List>
					<ListItem
						title={this.props.hospital.name}
					/>
				</List>
			</View>
		);
	}
}

function mapStateToProps({ hospital }) {
	return { hospital };
}

export default connect(mapStateToProps, actions)(HospitalScreen);
