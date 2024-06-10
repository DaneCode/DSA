package main

import "fmt"

func bubbleSort(arr []int) {
    n := len(arr)
    for i := 0; i < n-1; i++ {
        swapped := false
        for j := 0; j < n-i-1; j++ {
            if arr[j] > arr[j+1] {
                // Swap arr[j] and arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = true
            }
        }
        // If no two elements were swapped in the inner loop, the array is already sorted
        if !swapped {
            break
        }
    }
}

func main() {
    // Example unordered slice but this will also function with arrays
    arr := []int{64, 34, 25, 12, 22, 11, 90}
    fmt.Println("Original array:", arr)
    bubbleSort(arr)
    fmt.Println("Sorted array:", arr)
}
