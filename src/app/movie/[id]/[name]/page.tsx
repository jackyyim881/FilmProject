export default function Page({
  params,
}: {
  params: { id: string; name: any };
}) {
  return (
    <>
      <div className="container relative p-6">{params.id}</div>
    </>
  );
}
