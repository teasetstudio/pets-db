import './text.scss';

const MainTitle = (props) =>{
    const {title, children} = props;
    return(
        <div className='main-title'>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    )
}

const Title2 = ({align = 'left', children}) =>{
    return(
        <h2 className='title2' style={{textAlign: align}}>{children}</h2>
    )
}
const Text1 = ({align = 'left', children}) =>{
    return(
        <p className='text1' style={{textAlign: align}}>{children}</p>
    )
}

export default MainTitle;
export {
    Title2,
    Text1
}