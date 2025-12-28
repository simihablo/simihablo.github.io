package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// HealthResponse represents the health check response
type HealthResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

// HealthHandler handles health check requests
func HealthHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	response := HealthResponse{
		Status:  "ok",
		Message: "Server is running",
	}
	json.NewEncoder(w).Encode(response)
}

// GreetingHandler handles greeting requests
func GreetingHandler(w http.ResponseWriter, r *http.Request) {
	name := r.URL.Query().Get("name")
	if name == "" {
		name = "World"
	}
	
	w.Header().Set("Content-Type", "application/json")
	response := map[string]string{
		"greeting": fmt.Sprintf("Hola, %s!", name),
	}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/health", HealthHandler)
	http.HandleFunc("/greet", GreetingHandler)
	
	fmt.Println("Server starting on :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Printf("Server failed to start: %v\n", err)
	}
}
