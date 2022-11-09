import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data: joke, loading, error, refetch } = useFetch(
    "https://marcconrad.com/uob/smile/api.php"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <h1>
        {joke?.question} : {joke?.solution} : {joke?.png}
      </h1>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
