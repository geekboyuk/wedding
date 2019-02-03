import fetcher from './fetcher';

const URL = '/user'

const storeUserDetails = (token, {email, group, inviteType, response}) => {
  return fetcher(URL, {
    token,
    method: 'post',
    body: JSON.stringify({
      email,
      group,
      invite_type: inviteType,
      response,
    }),
  });
}

export default storeUserDetails;