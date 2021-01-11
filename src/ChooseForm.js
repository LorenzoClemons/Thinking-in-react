import React from 'react'
import FeatureOptions from './FeatureOptions'
import Choices from './Choices'

class FeaturesForm extends React.Component {
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureOptions
          handleUpdate={this.props.handleUpdate}
          store={Choices}
          selected={this.props.selected}
        />
        </form>
    );
  }
}

export default FeaturesForm;