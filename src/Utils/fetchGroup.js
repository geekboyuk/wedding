import fetcher from './fetcher';

const URL = '/group'

const fetchGroup = (token, inviteCode) => 
  fetcher(URL, {
    token,
    queryString: {
      invite_code: inviteCode
    },
  }).then(({group, invite_type}) => ({
    group,
    inviteType: invite_type
  }));

export default fetchGroup;