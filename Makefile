.PHONY: init-project
init-project:
	make hooks
	make install-dev-dependencies
	make run-dev

.PHONY: hooks
hooks:
	chmod +x ci/hooks/install-hooks.sh && sh ci/hooks/install-hooks.sh

.PHONY: install-dev-dependencies
install-dev-dependencies:
	cd app && yarn

.PHONY: run-dev
run-dev:
	cd app && yarn start

# .PHONY: run-test
# run-test:
# 	cd app && yarn test

# .PHONY: run-component-test
# run-component-test:
# 	cd component-test && yarn run cypress open

.PHONY: fix-lint
fix-lint:
	cd app && yarn eslint --fix src