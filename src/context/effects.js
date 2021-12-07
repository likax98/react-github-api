async function createEffect(dispatch, fetcher, setLoading, setState, setError) {
  if (setLoading) {
    dispatch(setLoading(true));
  }
  try {
    const data = await fetcher();
    dispatch(setState(data));
    return data;
  } catch (error) {
    if (setError) {
      dispatch(setError(error.message));
    }
  }
}

export { createEffect };
