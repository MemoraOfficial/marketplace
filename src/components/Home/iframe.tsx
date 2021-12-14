import React from 'react';

const Iframe = ({ source }: {source:any}) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    //const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        <iframe title="lol" src={source} width="1300px" height="600px" allow='autoplay'></iframe>
    );
};

export default Iframe;