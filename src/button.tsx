export function Button(props: { onclick: Function; title: string }) {
  return (
    <button
      onClick={() => props.onclick()}
      className="h-[74px] rounded-full  text-[30px]   text-center    w-[74px] bg-blue-200"
    >
      {props.title}
    </button>
  );
}
