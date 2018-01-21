import { MapView } from 'expo';
import React from 'react';
import {
	StyleSheet,
	View,
	StatusBar
} from 'react-native';
import { Button, SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors';
import HospitalList from '../components/HospitalList';

/* MONTREAL */
// -73.5879,
// 45.5088,
export default class HomeScreen extends React.Component {
	static navigationOptions = {
		headerTintColor: Colors.darkPrimary,
		headerStyle: {
			backgroundColor: Colors.primary,
			padding: 0,
			margin: 0,
			justifyContent: 'center',
		},
		headerLeft: (
			<Button
				icon={{ name: 'menu' }}
				backgroundColor="transparent"
				containerViewStyle={{ padding: 0, margin: 0 }}
			/>
		),
		headerRight:(
			<SearchBar
				round
				icon={{ type: 'font-awesome', name: 'search', color: Colors.lightPrimary}}
				containerStyle={{ backgroundColor: 'transparent', width: 250 }}
				inputStyle={{ backgroundColor: Colors.darkPrimary, color: Colors.lightPrimary }}
			/>
		)
	};

	state = {
		region: {
			longitude: -73.5879,
			latitude: 45.5088,
			longitudeDelta: 0.1,
			latitudeDelta: 0.1
		},
		mapLoaded: false
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={{ flex: 1 }}
					initialRegion={this.state.region}
				/>
				<HospitalList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	menuButton: {
		height: 40,
		width: 40,
		padding: 0,
		margin: 0
	}
});
