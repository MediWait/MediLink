import { MapView } from 'expo';
import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

/* MONTREAL */
// -73.5879,
// 45.5088,
export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
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
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
