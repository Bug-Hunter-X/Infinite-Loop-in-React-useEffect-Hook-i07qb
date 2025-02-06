```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic causing infinite loop
    setCount(count + 1);
  }, [count]); // Missing dependency: count

  return <div>Count: {count}</div>;
}
```