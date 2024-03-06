import './CustomP.css';

type CustomPProps = {
    children?: JSX.Element
}

export const CustomP = (props: CustomPProps) => {

    return <div className="corn">
            {props.children}
        </div>
}