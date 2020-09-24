echo "SSH scan"
ssh-keyscan github.com >> ~/.ssh/known_hosts

echo "Global user configuration"
git config --global user.name "$USER_NAME"
git config --global user.email "$USER_EMAIL"

echo "Clone destination repo"
git clone $GITHUB_PAGE_REPOSITORY_URL destination
cd destination

git checkout master
git pull origin master

echo "Delete if not _site"

find . -maxdepth 1 ! -name '_site' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv ~/repo/blog/_site/* .
rm -R ~/repo/blog/_site/

export COMMIT_MESSAGE=\"$(git log --format=oneline -1 --pretty=format:'%h - %B')\"
echo $COMMIT_MESSAGE

git add -fA
git commit --allow-empty -m "$COMMIT_MESSAGE"

echo "Push to destination"
git push -f origin master

echo "Deployed successfully"