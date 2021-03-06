import React, { Component } from 'react';
import { connect } from "react-redux";
import { employeeInputUpdate, employeeCreate } from '../actions/EmployeeAction';
import { Button, Card, CardSection } from "./common";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    console.log('EmployeeCreate', this.props.employee);

    return (
      <Card>

        <EmployeeForm {...this.props} />

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeInputUpdate, employeeCreate }
)(EmployeeCreate);