import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

ReactDOM.render(
  <ReactMarkdown>
    {children}
  </ReactMarkdown>,
  document.querySelector('#content')
)