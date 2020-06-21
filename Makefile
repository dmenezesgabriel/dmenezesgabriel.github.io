run-dev:
	bundle exec jekyll serve --watch --draft

run-test:
	echo "Building site."
	bundle exec jekyll build --config "_config.yml,_config.localhost.yml"
	echo "Serving files"
	bundle exec jekyll server --config "_config.yml,_config.localhost.yml" --skip-initial-build >/dev/null 2>&1 &
	bundle exec htmlproofer --log-level debug --allow-hash-href --url-ignore https://www.linkedin.com/in/dmenezesgabriel/ ./_site
	killall bundle
