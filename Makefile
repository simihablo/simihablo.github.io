.PHONY: server-tests
server-tests:
	@echo "Running server tests with coverage..."
	cd server && go test -v -coverprofile=coverage.out -covermode=atomic ./...
	cd server && go tool cover -func=coverage.out
