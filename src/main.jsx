import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './Style/index.css';
import './Style/activity.css';
import './Style/Nav.css';
import './Style/Form.css';
import './Style/Report.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
