function ImageDemo(){
    return(
        <div>
            <h2>LOCAL image</h2>
            <img src={ImageDemo} alt="ImageDemo" width="200"/>

            <h2>URL Image</h2>
            <img src="angry-birds-parak.png" alt=""/>
        </div>
    )
}
export default ImageDemo;