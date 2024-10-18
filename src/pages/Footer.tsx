
const Footer = () => {

    const styleSymbol = {
        fontSize: 20,
        marginRight: 7,
        marginLeft: 7
    }
    return (
        <div className='footer'>
            Made with ❤ by Hemleen <span style={styleSymbol}>©</span>{ new Date().getFullYear()}
        </div>
    )

 }

export default Footer