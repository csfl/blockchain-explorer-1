import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Header from './component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  push: args => dispatch(push(args)),
  onSearch: dispatch.dataStore.onSearch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
