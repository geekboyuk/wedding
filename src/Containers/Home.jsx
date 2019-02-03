import React, { Component } from 'react';
import { Box } from 'grommet';

import applyAnimation from '../Utils/applyAnimation';

import Acknowledgement from '../Components/Acknowledgement';
import WeddingOf from '../Components/WeddingOf';
import Invitation from '../Components/Invitation';
import Verify from '../Components/Verify';
import InviteCode from '../Components/InviteCode';

import fetchUserDetails from '../Utils/fetchUserDetails';
import fetchGroup from '../Utils/fetchGroup';
import storeUserDetails from '../Utils/storeUserDetails';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInviteError: false,
      group: null,
      hasResponded: false,
    };

    this.onInviteCode = this.onInviteCode.bind(this);
    this.onRsvp = this.onRsvp.bind(this);
    this.onUndoResponse = this.onUndoResponse.bind(this);
  }

  componentDidMount() {
    const { token, email } = this.props;

    email && fetchUserDetails(token, email)
      .then(({group, inviteType, response}) => {
        this.setState({
          group,
          inviteType,
          response,
          hasResponded: !!response,
        })
      }).catch(() => {});
  }

  onInviteCode(e) {
    e.preventDefault();
    const { inviteCode } = e.value;
    const { token, email } = this.props;
    // Remove all extra whitespace
    const code = inviteCode.trim().replace(/\s+/, ' ');

    this.setState({
      isInviteError: false,
    });

    fetchGroup(token, code)
      .then(({ group, inviteType }) => {
        storeUserDetails(token, {email, group, inviteType});
        this.setState({ 
          group, 
          inviteType
        });
      })
      .catch((error) => {
        this.setState({
          isInviteError: true,
        })
      });
  }

  onRsvp(e) {
    e.preventDefault();

    const { response } = e.value;
    const { token, email } = this.props;
    const { group, inviteType } = this.state;

    storeUserDetails(token, {email, group, inviteType, response});

    this.setState({ 
      hasResponded: true,
      response,
    });
  }

  onUndoResponse(e) {
    e.preventDefault();

    this.setState({ 
      hasResponded: false,
    });
  }

  render() {
    const {
      isVerified,
      email,
    } = this.props;

    const {
      group,
      inviteType,
      isInviteError,
      hasResponded,
      response,
    } = this.state;

    return (
      <Box fill align="center" pad="medium">
        <WeddingOf width="large"  animation={applyAnimation({type: "zoomIn"})} />
        { !isVerified ? <Verify email={email} width="large" animation={applyAnimation({"delay": 300, duration: 1500})}/> :null }
        { isVerified && !group ? (
          <InviteCode onSubmit={this.onInviteCode} isError={isInviteError} width="large" animation={applyAnimation({"delay": 300, duration: 1500})} />
        ) : null}
        { group && !hasResponded ? (<Invitation width="large" animation={applyAnimation({"delay": 300, duration: 1500})} inviteType={inviteType} onRsvp={this.onRsvp}/>) : null}
        { group && hasResponded ? (<Acknowledgement width="large" response={response} onUndo={this.onUndoResponse} animation={applyAnimation({"delay": 300, duration: 1500})} />): null }
      </Box>
    );
  }
};

export default Home;
