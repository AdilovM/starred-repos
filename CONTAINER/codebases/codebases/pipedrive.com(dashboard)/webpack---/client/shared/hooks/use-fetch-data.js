import { useEffect, useState } from 'react';

export default (fetchFunction, hookInput = null, defaultData = []) => {
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [data, setData] = useState(defaultData);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(false);
		setLoaded(false);
		setError(null);
	}, [hookInput]);

	useEffect(() => {
		if (!loaded && !loading && !error) {
			setLoading(true);
			const loadData = async () => {
				try {
					setData(await fetchFunction());
					setLoaded(true);
					setLoading(false);
				} catch (err) {
					setError(err);
					setLoaded(true);
					setLoading(false);
				}
			};

			loadData();
		}
	}, [error, fetchFunction, loaded, loading]);

	return {
		loading,
		loaded,
		error,
		data,
		setData
	};
};
