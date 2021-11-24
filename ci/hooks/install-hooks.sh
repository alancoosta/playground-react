cp ci/hooks/commit-msg.sh .git/hooks/commit-msg

rm -f .git/hooks/commit-msg.sample >> /dev/null

chmod +x .git/hooks/commit-msg