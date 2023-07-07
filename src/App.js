import './scss/style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import First from './First/First';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/first" element={<First />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default App;
