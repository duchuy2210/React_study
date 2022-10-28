import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import GlobalStyle from './components/GlobalStyles';
function App() {
  	return (
  	 	<GlobalStyle>
			<div className="App" style={{ textAlign :"center" }}> 
				<Heading />
				<Paragraph />
	  		</div>
		</GlobalStyle>
	);
}

export default App;
