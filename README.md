# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop occurs within a `useEffect` hook due to a missing dependency in the dependency array.

## Bug Description
The `MyComponent` component uses `useEffect` to increment a counter. However, the `count` variable is not included in the dependency array, causing the effect to run continuously, leading to an infinite loop. 

## Bug Solution
The solution involves adding `count` to the dependency array of `useEffect`, ensuring that the effect only runs when the `count` value changes.