import { MapView } from 'expo';
import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView
} from 'react-native';
import { ListItem, SearchBar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Colors from '../constants/Colors';
import HospitalList from '../components/HospitalList';
import StatusBadge from '../components/StatusBadge';

/* MONTREAL */
// -73.5879,
// 45.5088,
class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerTintColor: Colors.darkPrimary,
		headerStyle: {
			backgroundColor: Colors.primary,
			padding: 0,
			margin: 0,
			justifyContent: 'center',
		},
		headerLeft: (
			<Icon
				name="menu"
				iconStyle={{ color: Colors.headerTextIcons }}
				containerStyle={styles.settingsCont}
				onPress={() => navigation.navigate('filters')}
			/>
		),
		headerRight:(
			<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
				<SearchBar
					round
					icon={{ type: 'font-awesome', name: 'search', color: Colors.lightPrimary }}
					containerStyle={{ backgroundColor: 'transparent', width: 250 }}
					inputStyle={{ backgroundColor: Colors.darkPrimary, color: Colors.lightPrimary }}
				/>
				<Icon
					name="settings"
					iconStyle={{ color: Colors.headerTextIcons }}
					containerStyle={styles.settingsCont}
				/>
			</View>
		)
	});

	state = {
		region: {
			longitude: -73.5879,
			latitude: 45.5088,
			longitudeDelta: 0.1,
			latitudeDelta: 0.1
		},
		mapLoaded: false
	}

	renderItem = (hospital) => {
		return (
			<ListItem
				key={hospital.id}
				title={hospital.name}
				subtitle={hospital.distance}
				onPress={(item) => {
					// this.props.openHospitalScreen(item);
					this.props.navigation.navigate('hospital');
				}}
				badge={{ element: (
					<StatusBadge
						time={hospital.time}
						color={hospital.color}
						people={hospital.crowd}
					/>
				) }}
			/>
		);
	}

	openHospital = (hospital) => {
		this.props.openHospitalScreen(hospital);
		this.props.navigation.navigate('hospital');
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={{ flex: 1 }}
					initialRegion={this.state.region}
				/>
				<View style={styles.hospitalList}>
					<ScrollView>
						<HospitalList
							renderItem={this.renderItem}
						/>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	hospitalList: {
		height: 200,
		margin: 0,
		padding: 0
	},
	settingsCont: {
		backgroundColor: 'transparent',
		flex: 1,
		marginHorizontal: 15
	}
});

export default connect(null, actions)(HomeScreen);
