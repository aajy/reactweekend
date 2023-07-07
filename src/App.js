import './scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import First from './First/First';
import Second from './Second/Second';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/first" element={<First />}></Route>
					<Route path="/second" element={<Second />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
