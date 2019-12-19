const github = {
  appName: 'github',
  api: 'https://api.github.com',
  install_url: 'https://github.com/apps/FluxoGithub/installations/new?state=',
  events: {
    new_issue: {
      name: 'New Issue',
      outputs: ['title', 'number'],
      inputs: {
        owner: {
          name: 'Owner Name',
          optional: false,
          data: true,
        },
        repo: {
          name: 'Repository Name',
          optional: false,
          data: true,
        },
      },
    },
  },
  actions: {
    create_issue: {
      name: 'Create New Issue',
      inputs: {
        title: {
          name: 'Title of Issue',
          optional: false,
          data: true,
        },
        body: {
          name: 'Message body',
          optional: true,
          data: false,
        },
      },
    },
  },
};

export default github;
