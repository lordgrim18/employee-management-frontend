import './Header.css'

const Header = ({title}: {title: string}) => {
    return (
        <h1 className="content-body__header">
            {title}
        </h1>
    )
}

export default Header;