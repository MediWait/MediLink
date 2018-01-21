import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { 
    CheckBox,
    Divider,
    Slider,
} from 'react-native-elements';

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
                <Text> {this.state.serviceTitle} </Text>

                <Picker
                    selectedValue = { this.state.service }
                    onValueChange={(itemValue, itemIndex) => this.setState({service: itemValue})}
                >                 
                    <Picker.Item label = 'Urgence' value = 'Urgence'/>
                    <Picker.Item label = 'Centre de prelevement' value = 'Centre de prelevement'/>
                    <Picker.Item label = 'Radiographie' value = 'Radiographie'/>
                    <Picker.Item label = 'Resonance magnetique' value = 'Resonance magnetique'/>
                </Picker>

                <Divider style = {{ backgroundColor: 'grey' }} />

                <Text> {this.state.typeOfServiceTitle} </Text>

                <CheckBox 
                    onIconPress={() => this.setState({hospitalCheck: !this.state.hospitalCheck })}
                    onPress={() => this.setState({hospitalCheck: !this.state.hospitalCheck })}
                    title = { this.state.hospitalText }
                    checked = { this.state.hospitalCheck }
                    iconRight
                    textStyle = { { textAlign: 'left' } } 
                ></CheckBox>

                <CheckBox 
                    onIconPress={() => this.setState({clinicCheck: !this.state.clinicCheck })}
                    onPress={() => this.setState({clinicCheck: !this.state.clinicCheck })}
                    title = { this.state.clinicText }
                    checked = { this.state.clinicCheck }
                    iconRight
                    textStyle = { { textAlign: 'left' } } 
                ></CheckBox>

                <CheckBox 
                    onIconPress={() => this.setState({clscCheck: !this.state.clscCheck })}
                    onPress={() => this.setState({clscCheck: !this.state.clscCheck })}
                    title = { this.state.clscText }
                    checked = { this.state.clscCheck }
                    iconRight
                    textStyle = { { textAlign: 'left' } } 
                ></CheckBox>
            
                <Divider style = {{ backgroundColor: 'grey' }} />

                <Text> {this.state.proximiteTitle} </Text>

                <Slider
                    minimumValue = { 0 }
                    maximumValue = { 100 }
                    onValueChange = {(value) => this.setState({proximiteValue: value})}
                />

                <Text> {'Distance:' } {this.state.proximiteValue.toFixed(0)} {' km'} </Text>

                <Divider style = {{ backgroundColor: 'grey' }} />

                <Text> {'Autre'} </Text>

                <CheckBox 
                    onIconPress={() => this.setState({clscCheck: !this.state.ramqCheck })}
                    onPress={() => this.setState({clscCheck: !this.state.ramqText })}
                    title = { this.state.ramqText }
                    checked = { this.state.ramqCheck }
                    iconRight
                    textStyle = { { textAlign: 'left' } } 
                ></CheckBox>

            </View>
        );
    }
}

