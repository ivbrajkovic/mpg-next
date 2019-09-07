import fetchDataAsync from '../../lib/fetchDataAsync';

const Post = props => {
    console.log('TCL: props', props);

    return (
        <>
            <h1>bla</h1>
        </>
    );
};

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    //   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    //   const show = await res.json();

    //   console.log(`Fetched show: ${show.name}`);

    //   return { show };

    const data = await fetchDataAsync(context, 'odjeli');
    return data;
};

export default Post;
