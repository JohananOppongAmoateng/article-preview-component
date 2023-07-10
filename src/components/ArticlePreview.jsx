
import "./ArticlePreview.css"
import AvatarCard from "./AvatarCard"


function ArticlePreview() {
  return (
    <div className="container">
       <img className="drawers" src="../../images/drawers.jpg" alt="image" /> 
       <div className="preview">
        <h3 className="title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h3>
        <p className="text">Ever been in a room and felt like something was missing?Perhaps it felt slightly bare and uninviting.I've got some simple tips to help make any room feel complete</p>
        <AvatarCard />
       </div>
    </div>
  )
}

export default ArticlePreview