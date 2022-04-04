import React from 'react';

const Blogs = () => {
    return (
        <div className='m-10'>
            <h1 className='border-l-8 pl-2 border-green-400 text-lg font-bold'>What is Context API ?</h1>
            <article className='mt-4 text-justify'><span className='p-1 font-bold bg-slate-200'>answer:</span> The Context API is a React structure that enables you to solving prop-drilling . it can halp you prop-drilling from all levels of your application. The React Context API is a way for a React app to effectively produce global variables. And can be passed around. If you can pass data or props in child element of child . Context API can this easy ! You just use use const UserContext = createContext(); in code and sent anywhere as your wish.</article>
            <h1 className='border-l-8 pl-2 mt-6 border-green-400 text-lg font-bold'>What is Semantic Tag ?</h1>
            <article className='mt-4 text-justify'><span className='p-1 font-bold bg-slate-200'>answer:</span> Semantic HTML elements are those that was meaningful tag. Semantic tag is a human- and machine-readable. HTML was originally created as a markup language to describe documents on the early internet. But now day by day its become a familiar markup language .When a developer solve some issue of an site , He can easily find out element issues of the site . As a beginner develope , you can get some idea by tag name . some Semantic tag is : article, aside, details,figcaption,figure,footer,header,main,mark, nav, section,summary,time etc. </article>
        </div>
    );
};

export default Blogs;