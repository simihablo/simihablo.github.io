package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestHealthHandler(t *testing.T) {
	req, err := http.NewRequest("GET", "/health", nil)
	if err != nil {
		t.Fatal(err)
	}

	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(HealthHandler)
	handler.ServeHTTP(rr, req)

	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	var response HealthResponse
	if err := json.NewDecoder(rr.Body).Decode(&response); err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if response.Status != "ok" {
		t.Errorf("handler returned unexpected status: got %v want %v",
			response.Status, "ok")
	}

	if response.Message != "Server is running" {
		t.Errorf("handler returned unexpected message: got %v want %v",
			response.Message, "Server is running")
	}
}

func TestGreetingHandler(t *testing.T) {
	tests := []struct {
		name           string
		queryParam     string
		expectedGreet  string
	}{
		{
			name:          "with name parameter",
			queryParam:    "?name=Juan",
			expectedGreet: "Hola, Juan!",
		},
		{
			name:          "without name parameter",
			queryParam:    "",
			expectedGreet: "Hola, World!",
		},
		{
			name:          "with Spanish name",
			queryParam:    "?name=María",
			expectedGreet: "Hola, María!",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			req, err := http.NewRequest("GET", "/greet"+tt.queryParam, nil)
			if err != nil {
				t.Fatal(err)
			}

			rr := httptest.NewRecorder()
			handler := http.HandlerFunc(GreetingHandler)
			handler.ServeHTTP(rr, req)

			if status := rr.Code; status != http.StatusOK {
				t.Errorf("handler returned wrong status code: got %v want %v",
					status, http.StatusOK)
			}

			var response map[string]string
			if err := json.NewDecoder(rr.Body).Decode(&response); err != nil {
				t.Fatalf("Failed to decode response: %v", err)
			}

			if greeting, ok := response["greeting"]; !ok {
				t.Error("response missing 'greeting' field")
			} else if greeting != tt.expectedGreet {
				t.Errorf("handler returned unexpected greeting: got %v want %v",
					greeting, tt.expectedGreet)
			}
		})
	}
}
