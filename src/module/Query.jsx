import axios from 'axios';
import React from 'react';
const URL = 'http://localhost:8080/';
function Query(method, path, data = {}, deps = []) {
	const [response, setResponse] = React.useState();
	React.useEffect(() => {
		const fetchQuery = async () => {
			const response = await axios({
				method: method,
				url: `${URL}${path}`,
				data: data,
			});
			setResponse(response);
		};
		fetchQuery();
	}, deps);
	return response;
}

export default Query;
