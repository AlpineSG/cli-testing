// Testcontainers setup for Go
//
// Install:
//   go get github.com/testcontainers/testcontainers-go
//   go get github.com/testcontainers/testcontainers-go/modules/postgres
//
// Example integration test (place in *_integration_test.go):
//
// //go:build integration
//
// package main_test
//
// import (
//     "context"
//     "testing"
//
//     "github.com/testcontainers/testcontainers-go"
//     "github.com/testcontainers/testcontainers-go/modules/postgres"
// )
//
// func TestWithPostgres(t *testing.T) {
//     ctx := context.Background()
//     pgContainer, err := postgres.Run(ctx, "postgres:16-alpine",
//         postgres.WithDatabase("testdb"),
//         postgres.WithUsername("test"),
//         postgres.WithPassword("test"),
//     )
//     if err != nil {
//         t.Fatal(err)
//     }
//     defer pgContainer.Terminate(ctx)
//
//     connStr, _ := pgContainer.ConnectionString(ctx)
//     // use connStr to connect and test
// }
//
// Run: go test -tags=integration ./...
