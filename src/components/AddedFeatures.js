import React from 'react';
import {remove} from '../actions/actions';
import AddedFeature from './AddedFeature';
import {connect} from 'react-redux';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remove={props.remove}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  {remove}
)(AddedFeatures);
