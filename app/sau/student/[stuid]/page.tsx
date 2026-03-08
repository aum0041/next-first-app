interface PageParams {
  params: {
    stuid: string;
  };
}

export default async function Page({ params }: PageParams) {
  const { stuid } = await params;

  return (
    <div>
      ID :
      <br />
      WOW WOW WOW
      <br />
      Hello
    </div>
  );
}
