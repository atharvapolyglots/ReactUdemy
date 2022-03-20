import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div class="container my-5">
        <h4>Course goal</h4>

        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Course goal</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          <button className='btn btn-primary'>Add Course</button>
        </div>
      </div>
    </div>
  );
}

export default App;
