import Form from "../components/Form";
export default function Guestbook() {
  return (<><h1 className="text-3xl">leave something behind.</h1>
    <p className="text-dim mt-2 mb-8">the guestbook currently lives through the join form. messages go to the owner, not onto this page.</p>
    <Form submit="send" fields={[
      { name: "name", label: "name / nickname", required: true }, { name: "email", label: "email", type: "email", required: true },
      { name: "message", label: "message", required: true, area: true }, { name: "website", label: "website" }]} /></>);
}
