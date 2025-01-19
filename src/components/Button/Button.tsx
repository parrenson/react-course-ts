import "./Button.css";

interface Props {
    label: string,
    parentMethod: () => void

};

export const ChildrenButton = ({ label }: Pick<Props, "label">) => {
    return (<div>{label}</div>)
}

export const Button = ({label, parentMethod}: Props) => {

    return (
        <button className="custom-button" onClick={parentMethod}>
          { label }
        </button>
    )
}