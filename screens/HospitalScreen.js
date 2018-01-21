import { MapView } from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
	List,
	ListItem,
	Icon
} from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import StatusBadge from '../components/StatusBadge';

class HospitalScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Hopital General Juif',
			headerTintColor: Colors.headerTextIcons,
			headerStyle: {
				backgroundColor: Colors.primary,
				padding: 0,
				margin: 0,
				justifyContent: 'center',
			}
		};
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
			<ScrollView Style={styles.container}>
				<View style={styles.iconContainer}>
					<Icon
						name="phone"
						color={Colors.accent}
						reverse
					/>
					<Icon
						name="language"
						color={Colors.accent}
						reverse
					/>
					<Icon
						name="arrow-right"
						type="font-awesome"
						color={Colors.accent}
						reverse
					/>
				</View>
				<View style={styles.listContainer}>
					<Text style={styles.label}>
						Services Offerts
					</Text>
					<List style={styles.list}>
						<ListItem
							title="Urgence"
							hideChevron
							badge={{ element: (
								<StatusBadge
									time="6h00"
									color={Colors.red}
									people={112}
								/>
							) }}
						/>
						<ListItem
							title="Centre de Prelevements"
							hideChevron
							badge={{ element: (
								<StatusBadge
									time="3h14"
									color={Colors.yellow}
									people={15}
								/>
							) }}
						/>
						<ListItem
							title="Radiologie"
							hideChevron
							badge={{ element: (
								<StatusBadge
									time="4h00"
									color={Colors.green}
									people={43}
								/>
							) }}
						/>
					</List>
				</View>
				<View style={styles.listContainer} >
					<Text style={styles.label}>
						Services Offerts
					</Text>
					<List style={styles.list}>
						<ListItem
							title="Stationnement"
							hideChevron
							badge={{ element: (
								<Text>25$</Text>
							) }}
						/>
						<ListItem
							title="Stationnement"
							hideChevron
							badge={{ element: (
								<Text style={{ color: Colors.green }}>
									Ouvert
								</Text>
							) }}
						/>
					</List>
				</View>
			</ScrollView>
		);
	}
}

function mapStateToProps({ hospital }) {
	return { hospital };
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		margin:0,
		backgroundColor: Colors.headerTextIcons
	},
	map: {
		height: Layout.window.height/2,
		width: Layout.window.width
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20
	},
	listContainer: {
		margin: 0
	},
	label: {
		alignSelf: 'center',
		color: Colors.primaryText,
		fontSize: 20,
		marginBottom: 5,
		marginTop: 10
	},
	list: {
		margin: 0
	}
});

export default connect(mapStateToProps, actions)(HospitalScreen);
