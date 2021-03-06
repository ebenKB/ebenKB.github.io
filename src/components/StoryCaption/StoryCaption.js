import React from 'react'

const StoryCaption = ({ story = {} }) => {
  return (
    <div>
      <img 
        src={story.url} alt=""
        style={{height: "60px", width: "100%"}}
      />
      <div className="text-xs text-center">{story.caption}</div>
    </div>
  )
}

export default StoryCaption
