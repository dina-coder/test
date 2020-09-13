import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TagPage from '../components/pages/TagPage';

class PageResolver extends React.Component {

  render() {
    console.log(this.props.isAuth);
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    else return <TagPage />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.TagReducer.isAuth
});

export default connect(mapStateToProps)(PageResolver);