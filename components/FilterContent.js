import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import {
	CheckBox,
	Divider,
	Slider,
} from 'react-native-elements';

import Colors from '../constants/Colors';

export default class FilterContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceTitle: 'Service',
			service: 'Urgence',
			typeOfServiceTitle: 'Installations',
			hospitalText: 'Hopital',
			hospitalCheck: true,
			clinicText: 'Clinique (GMF-UMF)',
			clinicCheck: true,
			clscText: 'CLSC',
			clscCheck: true,
			proximiteTitle: 'Proximite',
			proximiteValue: 10,
			ramqCheck: true,
			ramqText: 'Couvert par la RAMQ'

		};
	}

	render() {
		return (
			<View>
				<Text style={styles.label}> {this.state.serviceTitle} </Text>

				<Picker
					selectedValue = { this.state.service }
					onValueChange={(itemValue, _itemIndex) => this.setState({ service: itemValue })}
				>
					<Picker.Item label = 'Urgence' value = 'Urgence'/>
					<Picker.Item label = 'Centre de prelevement' value = 'Centre de prelevement'/>
					<Picker.Item label = 'Radiographie' value = 'Radiographie'/>
					<Picker.Item label = 'Resonance magnetique' value = 'Resonance magnetique'/>
				</Picker>

				<Divider style = {{ backgroundColor: Colors.divider }} />

				<Text style={styles.label}> {this.state.typeOfServiceTitle} </Text>

				<CheckBox
					onIconPress={() => this.setState({ hospitalCheck: !this.state.hospitalCheck })}
					onPress={() => this.setState({ hospitalCheck: !this.state.hospitalCheck })}
					title = { this.state.hospitalText }
					checked = { this.state.hospitalCheck }
					iconRight
					textStyle = {styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>

				<CheckBox
					onIconPress={() => this.setState({ clinicCheck: !this.state.clinicCheck })}
					onPress={() => this.setState({ clinicCheck: !this.state.clinicCheck })}
					title = { this.state.clinicText }
					checked = { this.state.clinicCheck }
					iconRight
					textStyle = {styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>

				<CheckBox
					onIconPress={() => this.setState({ clscCheck: !this.state.clscCheck })}
					onPress={() => this.setState({ clscCheck: !this.state.clscCheck })}
					title = { this.state.clscText }
					checked = { this.state.clscCheck }
					iconRight
					textStyle = {styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>

				<Divider style = {{ backgroundColor: Colors.divider }} />

				<Text style={styles.label}> {this.state.proximiteTitle} </Text>

				<Slider
					minimumValue = { 0 }
					maximumValue = { 100 }
					onValueChange = {(value) => this.setState({ proximiteValue: value })}
					style={styles.slider}
					trackStyle={styles.sliderTrack}
					thumbStyle={styles.sliderNipple}
				/>

				<Text style={styles.distance}> {'Distance:' } {this.state.proximiteValue.toFixed(0)} {' km'} </Text>

				<Divider style = {{ backgroundColor: Colors.divider }} />

				<Text style={styles.label}> {'Autre'} </Text>

				<CheckBox
					onIconPress={() => this.setState({ clscCheck: !this.state.ramqCheck })}
					onPress={() => this.setState({ clscCheck: !this.state.ramqText })}
					title = { this.state.ramqText }
					checked = { this.state.ramqCheck }
					iconRight
					textStyle = {styles.checkboxText}
					containerStyle={styles.checkboxContainer}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	checkboxContainer: {
		backgroundColor: Colors.lightPrimary
	},
	checkboxText: {
		textAlign: 'left',
		color: Colors.primaryText
	},
	label: {
		fontSize: 20,
		color: Colors.primaryText,
		paddingLeft: 4,
		marginTop: 5
	},
	distance: {
		textAlign: 'center',
		color: Colors.secondaryText
	},
	slider: {
		marginLeft: 7,
		marginRight: 7
	},
	sliderTrack: {
		backgroundColor: Colors.lightPrimary,
		borderColor: Colors.darkPrimary
	},
	sliderNipple: {
		backgroundColor: Colors.accent
	}
});
