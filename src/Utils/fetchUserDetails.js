import fetcher from './fetcher';

const URL = '/user'

const fetchUserDetails = (token, email) => 
  fetcher(URL, {
    token,
    queryString: {
      email,
    },
  }).then(({ group, invite_type, response }) => ({
    group,
    inviteType: invite_type,
    response,
  }));

export default fetchUserDetails;