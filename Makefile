.PHONY: run-dev
run-dev:
	cd app && yarn dev

# .PHONY: run-test
# run-test:
# 	cd app && yarn test

# .PHONY: run-component-test
# run-component-test:
# 	cd component-test && yarn run cypress open

.PHONY: fix-lint
fix-lint:
	cd app && yarn eslint --fix src