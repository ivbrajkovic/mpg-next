import { useReducer, useEffect } from 'react';
import preloadImages from '../lib/preloadImages';

// const initialState = {
//   loading: true,
//   error: '',
//   data: []
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_SUCCESS':
//       return {
//         loading: false,
//         error: '',
//         data: action.payload
//       };
//     case 'FETCH_ERROR':
//       return {
//         loading: false,
//         error: `Fetch data from API failed, ${action.payload}`,
//         data: {}
//       };
//     default:
//       return state;
//   }
// };

const useFetchNews = (url, folder, dispatch) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('TCL: useFetchNews -> url', url);
    const fetchData = async url => {
      let json = [];
      let slike = [];

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok.');
        json = await res.json();
      } catch (err) {
        // dispatch({ type: 'FETCH_ERROR', error: err });
        dispatch.setLoading(false);
        dispatch.setError(`Fetch data from API failed, ${err}`);
        return;
      }

      json &&
        json.forEach &&
        json.forEach(item => {
          item.SlikaPath = folder + item.SlikaPath;
          slike.push(item.SlikaPath);
        });

      slike &&
        preloadImages(slike).then(value => {
          // dispatch({ type: 'FETCH_SUCCESS', data: json });
          dispatch.setLoading(false);
          dispatch.setData(json);
        });
    };

    fetchData(url);
  }, [url]);
};

export default useFetchNews;
