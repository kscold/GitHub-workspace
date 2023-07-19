interface IButtontProps {
  isActive: boolean;
  title: string;
}

export default function Button01(props: IButtontProps): JSX.Element {
  return (
    <button style={{ backgroundColor: props.isActive ? "yellow" : "" }}>
      {props.title}
    </button>
  );
}
