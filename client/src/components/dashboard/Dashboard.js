import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import DahshboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome {user && user.name}</i>
      </p>
      {profile != null ? (
        <Fragment>
          <DahshboardActions />
          <Experience experience={profile.experience}></Experience>
          <Education education={profile.education}></Education>

          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'></i>Delete My account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup your profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primery my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  deleteAccount: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
