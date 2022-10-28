import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import GlobalStyle from './components/GlobalStyles';
import Button from './components/Button';
function App() {
  	return (
  	 	<GlobalStyle>
			<div className="App" style={{ textAlign :"center" }}> 
				<Button primary />
				<Button />
	  		</div>
		</GlobalStyle>
	);
}

export default App;
