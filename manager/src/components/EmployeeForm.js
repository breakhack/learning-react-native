import React, { Component } from 'react';
import { Picker, Text, View } from "react-native";
import { connect } from 'react-redux';
import { employeeInputUpdate } from '../actions';
import { CardSection, Input } from "./common";

class EmployeeForm extends Component {
  render() {
    console.log('EmployeeForm', this.props);
    return (
      <View>

        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeInputUpdate({ key: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeInputUpdate({ key: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ height: 150, flexDirection: "column", alignSelf: "stretch" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, marginLeft: 12 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeInputUpdate({ key: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeInputUpdate })(EmployeeForm);