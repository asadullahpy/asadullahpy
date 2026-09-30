import Form from "../components/Form";
export default function Join() {
  return (<><h1 className="text-3xl">stay around.</h1>
    <p className="text-dim mt-2 mb-8">if this little corner of the internet is your kind of place, leave a trace.</p>
    <Form submit="leave a trace" fields={[
      { name: "name", label: "name / nickname", required: true }, { name: "email", label: "email", type: "email", required: true },
      { name: "instagram", label: "instagram" }, { name: "interests", label: "interests" }, { name: "project", label: "current project" },
      { name: "found_via", label: "how did you find this?" }, { name: "message", label: "message", area: true }]} /></>);
}
