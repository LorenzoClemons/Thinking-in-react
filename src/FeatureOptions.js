import React from 'react'
import Features from './Features'

class FeatureOptions extends React.Component {
  render() {
    const features = Object.keys(this.props.store).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <Features
            handleUpdate={this.props.handleUpdate}
            store={this.props.store}
            selected={this.props.selected}
            part={feature}
          />
        </fieldset>
      );
    });
    return (
      <div>
        {features}
      </div>
    )
  }
}

export default FeatureOptions;