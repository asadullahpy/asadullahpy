import { beliefs } from "../data/content";
export default function Manifesto() {
  return (<><h1 className="text-3xl mb-10">a few things I believe.</h1>
    <ul className="space-y-8 text-2xl max-w-xl">{beliefs.map(b => <li key={b}>{b}</li>)}</ul></>);
}
