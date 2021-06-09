import React from 'react'
import styles from "./styles.module.css";
import ImageCaption  from "../../components/ImageCaption/ImageCaption";
import HashTag from "../../components/HashTag/HashTag";

const ArticleDetails = () => {
  return (
    <div className={`${styles.detailsWrapper} font-bold`}>
      <h2 className="font-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </h2>
      <ImageCaption />
      <div className={`${styles.content}`}>
        <HashTag tags={["#tag1", "#tag2"]}/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi maxime odit recusandae fuga aperiam accusantium delectus ad 
          quos perferendis eum? Odit distinctio accusantium consequuntur deserunt enim ullam optio rem est!
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi maxime odit recusandae fuga aperiam accusantium delectus ad 
          quos perferendis eum? Odit distinctio accusantium consequuntur deserunt enim ullam optio rem est!
        </p>
      </div>
    </div>
  )
}

export default ArticleDetails
