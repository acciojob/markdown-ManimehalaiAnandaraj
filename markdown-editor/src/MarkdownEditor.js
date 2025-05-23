import React,{useState,useEffect} from 'react'
import marked from 'marked';

const MarkdownEditor = () => {
    const [markdown,setMarkdown] = useState('#Hello World');
    const [isLoading,setIsLoading]= useState(false);

    useEffect(() => {

    },[markdown]);

    const handleMarkdownChange = (e) => {
        setMarkdown(e.target.value);
    }

  return (
    <div className='markdown-container'>
        {isLoading && <div className='loading'>Loading...</div>}
        <textarea
        className='textarea'
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder='Enter markdown here...'
    />
    <div
    className='preview'
    dangerouslySetInnerHTML={{_html:marked(markdown)}}
    />
    </div>
  )
}

export default MarkdownEditor
