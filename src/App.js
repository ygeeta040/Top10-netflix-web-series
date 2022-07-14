import Netflix from './COMPONENTS/Netflix';
import Sdata from './COMPONENTS/Sdata';
console.log(Sdata[0]);
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
     
    //     <Netflix/>
    //   </header>
    // </div>
    <>
    <h1 className='headings'>Top 10 Netflix Web series 2022</h1>

    {
      Sdata.map((val)=>{
        return(
          
          <Netflix
          imgsrc={val.imgsrc}
          sname={val.sname}
          title={val.title}
          link={val.links}
          />
        )
      })
    }
    
  
                                          
    </>
  );
}

export default App;
