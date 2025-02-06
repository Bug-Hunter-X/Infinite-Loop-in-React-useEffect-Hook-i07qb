```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic, effect only runs when count changes
    console.log('Count updated:', count);
  }, [count]);

  return <div>Count: {count}</div>;
}
```