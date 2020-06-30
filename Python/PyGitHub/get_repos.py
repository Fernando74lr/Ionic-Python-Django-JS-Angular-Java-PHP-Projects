# Bio: https://github.com/PyGithub/PyGithub

from github import Github
from tokens.auth_token import auth_token

# GitHub instance with auth_token.
g = Github(auth_token)

# Then play with your Github objects:
for repo in g.get_user().get_repos():
    print('')
    print(repo.name)
    print(repo.description)
    print(repo.created_at)
    print('')